"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const categories = [
  "Beauty & Personal Care",
  "Health & Wellness",
  "Fashion & Apparel",
  "Electronics",
  "Home & Kitchen",
  "Food & Beverages",
  "Baby Products",
  "Other",
];

const sellingStatuses = [
  "Yes, actively selling",
  "Yes, but sales are low",
  "Account created but not launched",
  "No, we want to start",
];

const marketplaces = ["Amazon", "Flipkart", "Meesho", "Myntra", "Nykaa", "Other", "None"];

export function GetStartedButton({
  children = "Get Started",
  className = "button",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/get-started"
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <span>→</span>
    </Link>
  );
}

export function LeadForm() {
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const toggleMarketplace = (marketplace: string) => {
    setSelectedMarketplaces((current) => {
      if (marketplace === "None") return current.includes("None") ? [] : ["None"];
      const withoutNone = current.filter((item) => item !== "None");
      return withoutNone.includes(marketplace)
        ? withoutNone.filter((item) => item !== marketplace)
        : [...withoutNone, marketplace];
    });
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedMarketplaces.length === 0) {
      setStatus("error");
      setMessage("Please select at least one marketplace or choose None.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      sellerProfileLink: formData.get("sellerProfileLink"),
      productCategory: formData.get("productCategory"),
      sellingStatus: formData.get("sellingStatus"),
      marketplaces: selectedMarketplaces,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit your details.");
      form.reset();
      setSelectedMarketplaces([]);
      setStatus("success");
      setMessage("Thank you! Your details have been saved. Our team will contact you shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
      <section className="lead-card" aria-labelledby="lead-form-title">
        <Link className="form-close" href="/" aria-label="Back to home">×</Link>
        <div className="form-glow" />
        <header className="lead-form-header">
          <span className="eyebrow">Start your growth journey</span>
          <h2 id="lead-form-title">Get Started with EVOC</h2>
          <p>Share a few details and our marketplace experts will contact you with the right growth plan.</p>
        </header>

        {status === "success" ? (
          <div className="form-success" role="status">
            <span>✓</span>
            <h3>Application received!</h3>
            <p>{message}</p>
            <Link className="button" href="/">Back to home <span>→</span></Link>
          </div>
        ) : (
          <form className="lead-form" onSubmit={submit}>
            <div className="form-row two-columns">
              <label>
                <span>Name <b>*</b></span>
                <input name="name" type="text" placeholder="Your full name" autoComplete="name" required minLength={2} />
              </label>
              <label>
                <span>Phone No. <b>*</b></span>
                <input name="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" required pattern="[0-9+() -]{7,20}" />
              </label>
            </div>

            <label>
              <span>Seller Profile Link <b>*</b></span>
              <input name="sellerProfileLink" type="url" placeholder="https://amazon.in/your-store" required />
            </label>

            <div className="form-row two-columns">
              <label>
                <span>What product category do you sell? <b>*</b></span>
                <select name="productCategory" defaultValue="" required>
                  <option value="" disabled>Select product category</option>
                  {categories.map((category) => <option value={category} key={category}>{category}</option>)}
                </select>
              </label>
              <label>
                <span>Are you currently selling? <b>*</b></span>
                <select name="sellingStatus" defaultValue="" required>
                  <option value="" disabled>Select current status</option>
                  {sellingStatuses.map((item) => <option value={item} key={item}>{item}</option>)}
                </select>
              </label>
            </div>

            <fieldset>
              <legend>Which marketplaces are you currently selling on? <b>*</b> <small>Select all that apply</small></legend>
              <div className="marketplace-options">
                {marketplaces.map((marketplace) => (
                  <label className={selectedMarketplaces.includes(marketplace) ? "selected" : ""} key={marketplace}>
                    <input
                      type="checkbox"
                      value={marketplace}
                      checked={selectedMarketplaces.includes(marketplace)}
                      onChange={() => toggleMarketplace(marketplace)}
                    />
                    <i aria-hidden="true">✓</i>
                    <span>{marketplace}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {message && <p className="form-message error" role="alert">{message}</p>}
            <button className="button submit-button" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Saving your details…" : "Submit Application"}
              <span>{status === "submitting" ? "" : "→"}</span>
            </button>
            <p className="privacy-note">Your information is kept private and used only to contact you about EVOC services.</p>
          </form>
        )}
      </section>
  );
}
