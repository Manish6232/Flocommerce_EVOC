import type { Metadata } from "next";
import Logo from "@/components/logo";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Get Started | EVOC Flocommerce",
  description: "Tell EVOC about your brand and marketplace growth goals.",
};

export default function GetStartedPage() {
  return (
    <main className="form-page">
      <header className="form-page-header">
        <Logo href="/" />
        <a href="/" className="back-home">← Back to home</a>
      </header>
      <div className="form-page-shell">
        <LeadForm />
      </div>
    </main>
  );
}
