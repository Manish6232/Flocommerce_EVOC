import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  sellerProfileLink?: unknown;
  productCategory?: unknown;
  sellingStatus?: unknown;
  marketplaces?: unknown;
};

type Lead = {
  name: string;
  phone: string;
  formType: "flocommerce-dropshipping";
  sellerProfileLink: string;
  productCategory: string;
  sellingStatus: string;
  marketplaces: string[];
  submittedAt: string;
};

const clean = (value: unknown) =>
  typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim() : "";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const name = clean(body.name);
    const phone = clean(body.phone);
    const sellerProfileLink = clean(body.sellerProfileLink);
    const productCategory = clean(body.productCategory);
    const sellingStatus = clean(body.sellingStatus);
    const marketplaces = Array.isArray(body.marketplaces)
      ? body.marketplaces.map(clean).filter(Boolean)
      : [];

    if (!name || !phone || !sellerProfileLink || !productCategory || !sellingStatus || marketplaces.length === 0) {
      return NextResponse.json({ message: "Please complete every required field." }, { status: 400 });
    }

    try {
      new URL(sellerProfileLink);
    } catch {
      return NextResponse.json({ message: "Please enter a valid seller profile URL." }, { status: 400 });
    }

    const lead: Lead = {
      name,
      phone,
      formType: "flocommerce-dropshipping",
      sellerProfileLink,
      productCategory,
      sellingStatus,
      marketplaces,
      submittedAt: new Date().toISOString(),
    };

    const forwardingUrl = process.env.LEADS_FORWARD_URL;
    if (forwardingUrl) {
      const forwardingResponse = await fetch(forwardingUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.LEADS_FORWARD_TOKEN
            ? { Authorization: `Bearer ${process.env.LEADS_FORWARD_TOKEN}` }
            : {}),
        },
        body: JSON.stringify({
          name: lead.name,
          phone: lead.phone,
          formType: lead.formType,
          metadata: {
            sellerProfileLink: lead.sellerProfileLink,
            productCategory: lead.productCategory,
            sellingStatus: lead.sellingStatus,
            marketplaces: lead.marketplaces,
            submittedAt: lead.submittedAt,
          },
        }),
        signal: AbortSignal.timeout(10_000),
      });

      if (!forwardingResponse.ok) {
        return NextResponse.json(
          { message: "Unable to send your details to our lead system right now." },
          { status: 502 },
        );
      }

      // Orbit Admin is the durable source of truth. Vercel functions have an
      // ephemeral filesystem, so do not try to append a local file after a
      // successful production delivery.
      return NextResponse.json({ message: "Your details have been saved successfully." });
    }

    if (process.env.NODE_ENV === "production") {
      console.error("Lead forwarding failed: LEADS_FORWARD_URL is not configured.");
      return NextResponse.json(
        { message: "Lead delivery is not configured right now." },
        { status: 503 },
      );
    }

    // Local fallback for development only. Production submissions must be
    // forwarded to Orbit Admin so that they survive serverless restarts.
    const dataDirectory = path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDirectory, "leads.txt");
    const entry = [
      "",
      "============================================================",
      `Submitted: ${lead.submittedAt}`,
      `Name: ${name}`,
      `Phone No.: ${phone}`,
      `Seller Profile Link: ${sellerProfileLink}`,
      `Product Category: ${productCategory}`,
      `Current Selling Status: ${sellingStatus}`,
      `Marketplaces: ${marketplaces.join(", ")}`,
      "============================================================",
      "",
    ].join("\n");

    await mkdir(dataDirectory, { recursive: true });
    await appendFile(leadsFile, entry, "utf8");

    return NextResponse.json({ message: "Your details have been saved successfully." });
  } catch {
    return NextResponse.json({ message: "Unable to save your details right now." }, { status: 500 });
  }
}
