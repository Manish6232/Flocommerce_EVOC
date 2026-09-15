import Header from "@/components/header";
import Reveal from "@/components/reveal";
import { GetStartedButton } from "@/components/lead-form";
import Logo from "@/components/logo";
import SiteMotion from "@/components/site-motion";
import MarketplaceRail from "@/components/marketplace-rail";
import AmazonCommerce from "@/components/amazon-commerce";

const services = [
  { title: "Launch with confidence.", text: "From account setup to your first product listing, get the foundations of your marketplace business in place.", tags: "Account setup · Onboarding · Compliance", icon: "launch" },
  { title: "Make every listing count.", text: "Turn your catalog into a better shopping experience with clear product content, relevant keywords and organized listings.", tags: "Catalog management · Content · SEO", icon: "listing" },
  { title: "Put your brand in view.", text: "Reach relevant shoppers through marketplace advertising, with campaign management and ongoing optimization.", tags: "Advertising · PPC · Campaign optimization", icon: "ads" },
  { title: "Keep operations moving.", text: "Bring order to the everyday work of selling, from inventory coordination to marketplace account management.", tags: "Inventory · Account management · Operations", icon: "operations" },
  { title: "Know your next move.", text: "Understand how your business is performing with reporting that helps guide your next marketplace decision.", tags: "Analytics · Performance reports · Strategy", icon: "analytics" },
  { title: "Grow into new marketplaces.", text: "Build on your existing business with a plan for expanding across platforms and reaching more customers.", tags: "Marketplace expansion · Growth planning", icon: "scale" },
];
const steps = [
  ["01", "Start with your brand", "We understand your products, current challenges and goals."],
  ["02", "Build the right plan", "Together, we define your marketplace priorities and approach."],
  ["03", "Put it into motion", "Our team takes on setup, listings, campaigns and operations."],
  ["04", "Learn and improve", "We review performance and refine the work as your business evolves."],
  ["05", "Find your next opportunity", "We plan the next stage of growth, including new marketplaces."],
];
function ServiceIcon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    launch: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M10 4H4v16h16v-6" /></>,
    listing: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
    ads: <><path d="M4 10v5l15 4V5L4 10ZM7 16l2 5h3l-2-4M22 9v6" /></>,
    operations: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 8v9l9 5 9-5V8M12 13v9M7 6l9 5" /></>,
    analytics: <><path d="M4 3v17h17M8 15v-4M13 15V7M18 15v-6" /></>,
    scale: <><path d="M4 18 10 12l4 3 6-10M14 5h6v6" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}
function Instagram() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
const stories = [
  { name: "Zenvora", initials: "Z", quote: "Really good experience with EVOC Labs. Their Flocommerce team helped us get our Amazon store properly set up. The support has been great." },
  { name: "Aarvika", initials: "A", quote: "We were having issues with product listings and catalog. Flocommerce team sorted most of it out for us. Very helpful." },
  { name: "UrbanKart", initials: "UK", quote: "Started using Flocommerce for our Amazon business and honestly it has saved us a lot of time. Good team and quick response." },
  { name: "Nirvra", initials: "N", quote: "EVOC Labs helped us improve our Amazon listings and manage the backend work. Much easier now." },
  { name: "Munchiyo", initials: "M", quote: "Good service overall. The Flocommerce team understands marketplace selling and helped us with our Amazon operations." },
  { name: "VedaRoots", initials: "VR", quote: "We needed help managing our Amazon store and Flocommerce was recommended to us. So far, the experience has been smooth." },
  { name: "House of Aarya", initials: "HA", quote: "Very supportive team. They helped us with catalog, listings and some marketplace-related issues. Happy with the service." },
  { name: "GlowNest", initials: "GN", quote: "Flocommerce made our Amazon operations much more organized. Their team is responsive whenever we need help." },
];

export default function Home() {
  return (
    <SiteMotion><main id="top">
      <a className="skip-link" href="#services">Skip to content</a>
      <Header />
      <section className="hero-shell">
        <div className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow animate-up"><span className="status-dot" /> YOUR BRAND. MORE POSSIBILITIES.</div>
            <h1 className="hero-headline"><span className="headline-line"><span>Built for your</span></span><span className="headline-line"><span>next <em>big move.</em></span></span></h1>
            <p className="hero-lead animate-up delay-2">Launch, manage and grow your brand on Amazon and leading marketplaces with Flocommerce by EVOC Labs.</p>
            <div className="hero-actions animate-up delay-3"><GetStartedButton>Talk to our team</GetStartedButton><a className="text-link" href="#services">Explore services <span>↗</span></a></div>
            <div className="hero-proof animate-up delay-4"><span>Strategy to execution.</span><span>One marketplace team.</span></div>
          </div>
          <div className="commerce-scene animate-up delay-2" aria-label="Illustration of marketplace listing and operations services">
            <div className="scene-topline"><span>THE BIGGER PICTURE</span><span>Flocommerce ↗</span></div>
            <div className="scene-title">Your brand.<br />Connected.</div>
            <div className="listing-preview">
              <div className="listing-product"><AmazonCommerce /></div>
              <div className="listing-info"><span className="mini-label">AMAZON ECOMMERCE</span><h3>Ready for your next order.</h3><p>Better product listings.<br />Organized operations.<br />Support as you grow.</p><div className="listing-state"><span /> Amazon store management</div></div>
            </div>
            <div className="workflow-preview"><span className="workflow-icon"><ServiceIcon type="operations" /></span><div><strong>Behind every great brand.</strong><small>Listings · Advertising · Operations</small></div><span className="workflow-arrow">↗</span></div>
            <div className="scene-bottomline"><span>FROM FIRST LISTING TO WHAT’S NEXT</span><span>01 / ∞</span></div>
          </div>
        </div>
        <div className="section-wrap hero-bottom"><span>Ambitious brands. Hands-on support.</span><a href="#marketplaces">Discover what’s possible <span>↓</span></a></div>
      </section>

      <section className="marketplaces" id="marketplaces" aria-label="Supported marketplaces">
        <MarketplaceRail />
      </section>

      <section className="services" id="services"><div className="section-wrap">
        <Reveal className="section-heading"><div className="eyebrow">01 / WHAT WE DO</div><div className="heading-split"><h2>Big ambition.<br /><span>Every detail covered.</span></h2><p>There’s a lot behind a successful marketplace business. We bring the strategy and everyday execution together, so you can focus on your brand.</p></div></Reveal>
        <div className="service-cards">{services.map((service, index) => <Reveal className="service-card" key={service.title} delay={index * 45}><div className="service-top"><ServiceIcon type={service.icon} /><span>0{index + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-tags">{service.tags}</div></Reveal>)}</div>
        <div className="section-tail"><span>One team. The whole marketplace journey.</span><GetStartedButton>Talk to our team</GetStartedButton></div>
      </div></section>

      <section className="process" id="process"><div className="section-wrap process-layout">
        <Reveal className="section-intro"><div className="eyebrow">02 / HOW WE WORK</div><h2>A clear path.<br /><span>A shared ambition.</span></h2><p>Every brand starts somewhere different. Our process connects where you are with where you want to go.</p><a className="text-link" href="#contact">Let’s build your next chapter <span>↗</span></a></Reveal>
        <div className="steps">{steps.map(([number, title, text], index) => <Reveal className="step" key={number} delay={index * 50}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div>
      </div></section>

      <section className="why" id="why-us"><div className="section-wrap why-grid">
        <Reveal className="operations-panel"><div className="panel-caption"><span>THE FLOCOMMERCE APPROACH</span><ServiceIcon type="scale" /></div><h3>More connected.<br />More in control.</h3><div className="operations-hub"><span className="hub-center">Your brand</span><div className="hub-services"><span>Catalog</span><span>Advertising</span><span>Operations</span><span>Reporting</span></div></div><p>A coordinated approach to your marketplace business.</p></Reveal>
        <Reveal className="section-intro"><div className="eyebrow">03 / WHY FLOCOMMERCE</div><h2>A team that sees<br /><span>the whole picture.</span></h2><p>From the details of your catalog to your next growth opportunity, we help connect the work that matters.</p><div className="advantage-list"><div><h3>Expertise, put into practice.</h3><p>Marketplace knowledge backed by hands-on execution.</p></div><div><h3>Built around your brand.</h3><p>A strategy shaped by your products, priorities and stage of growth.</p></div><div><h3>Clarity at every step.</h3><p>Performance reporting and responsive support to keep you informed.</p></div></div><GetStartedButton>Talk to our team</GetStartedButton></Reveal>
      </div></section>

      <section className="stories" id="stories"><div className="section-wrap story-layout">
        <Reveal className="section-intro"><div className="eyebrow">04 / SELLER REVIEWS</div><h2>Good work.<br /><span>In their words.</span></h2><p>Hear from the companies we support with marketplace setup, listings and everyday operations.</p><div className="review-note"><span /> Real experiences. Shared by sellers.</div></Reveal>
        <div className="testimonial-window" tabIndex={0} role="region" aria-label="Seller reviews. Hover or focus to pause scrolling."><div className="testimonial-track">{[0, 1].map((copy) => <div className="testimonial-sequence" key={copy} aria-hidden={copy === 1 ? true : undefined}>{stories.map((story) => <article className="testimonial" key={story.name}><div className="quote-mark" aria-hidden="true">“</div><p>{story.quote}</p><div className="person"><span aria-hidden="true">{story.initials}</span><div><strong>{story.name}</strong><small>Marketplace seller</small></div></div></article>)}</div>)}</div></div>
      </div></section>

      <section className="cta" id="contact"><div className="section-wrap"><Reveal><div className="eyebrow">YOUR NEXT CHAPTER</div><h2>Let’s make your<br /><span>next move count.</span></h2><div className="cta-bottom"><p>Tell us about your brand.<br />We’ll help you plan what comes next.</p><GetStartedButton>Talk to our team</GetStartedButton></div><a className="contact-email" href="mailto:Contact@evoclabs.com">Contact@evoclabs.com <span>↗</span></a></Reveal></div></section>
      <footer><div className="section-wrap footer-main"><div className="footer-brand"><Logo /><p>Marketplace growth, together.<br />By EVOC Labs.</p></div><nav aria-label="Footer navigation"><a href="#services">Services</a><a href="#marketplaces">Marketplaces</a><a href="#process">Our process</a><a href="#stories">Seller reviews</a><a href="#contact">Contact</a></nav><div className="socials"><span>FLCommerce Connect</span><a href="https://www.instagram.com/flocommerce/" target="_blank" rel="noopener noreferrer" aria-label="FLCommerce Connect on Instagram"><Instagram /></a></div></div><div className="section-wrap footer-bottom"><span>© 2026 EVOC LABS PVT LTD. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
    </main></SiteMotion>
  );
}
