import Image from "next/image";
import Header from "@/components/header";
import Reveal from "@/components/reveal";
import { GetStartedButton } from "@/components/lead-form";
import Logo from "@/components/logo";

const capabilities = [
  { icon: "↗", title: "Launch", text: "Get your brand ready to sell across leading marketplaces." },
  { icon: "▣", title: "Manage", text: "We handle catalogue, operations, inventory and marketplace accounts." },
  { icon: "✦", title: "Optimize", text: "Improve visibility, listings, pricing and conversion performance." },
  { icon: "◎", title: "Advertise", text: "Run high-performing marketplace advertising campaigns." },
  { icon: "⌁", title: "Scale", text: "Expand into new marketplaces and unlock new growth opportunities." },
  { icon: "▥", title: "Analyze", text: "Turn sales and performance data into smarter business decisions." },
];

const marketplaces = [
  { key: "amazon", label: "Amazon", src: "/marketplaces/amazon.png" },
  { key: "flipkart", label: "Flipkart", src: "/marketplaces/flipkart.png" },
  { key: "meesho", label: "Meesho", src: "/marketplaces/meesho.svg" },
  { key: "myntra", label: "Myntra", src: "/marketplaces/myntra.png" },
  { key: "nykaa", label: "Nykaa", src: "/marketplaces/nykaa.png" },
  { key: "ajio", label: "AJIO", src: "/marketplaces/ajio.svg" },
];

function MarketplaceLogo({ marketplace }: { marketplace: (typeof marketplaces)[number] }) {
  const { key, label, src } = marketplace;

  return (
    <div className={`marketplace-logo ${key}`} aria-label={label}>
      <Image src={src} width={250} height={100} alt={`${label} logo`} />
    </div>
  );
}

const services = [
  { icon: "♙", title: "Account Setup & Onboarding", text: "Get your brand set up and compliant across marketplaces." },
  { icon: "☷", title: "Product Listing Management", text: "Create optimized listings that rank and convert." },
  { icon: "⌕", title: "SEO & Optimization", text: "Boost visibility with keyword, content and listing optimization." },
  { icon: "◁", title: "Advertising & PPC", text: "Run result-driven campaigns for higher sales and better ROAS." },
  { icon: "◇", title: "Inventory Management", text: "Keep your stock in check and avoid missed sales." },
  { icon: "▮", title: "Analytics & Reporting", text: "Make data-backed decisions for sustainable growth." },
];

const advantages = [
  { icon: "♧", title: "Expert Team", text: "Marketplace specialists, analysts and creative experts under one roof." },
  { icon: "✎", title: "Proven Results", text: "Strategies built around visibility, sales and profitability." },
  { icon: "▤", title: "Multi-Platform", text: "Experience across major marketplaces and quick-commerce platforms." },
  { icon: "◔", title: "Transparent Reporting", text: "Clear, real-time insights and performance updates." },
];

const steps = [
  ["01", "Understand Your Goals", "We learn about your brand, products and growth objectives."],
  ["02", "Strategy & Planning", "We create a customized marketplace strategy for your brand."],
  ["03", "Execution & Optimization", "We handle setup, listings, ads and daily operations."],
  ["04", "Monitor & Improve", "We track performance and optimize for better results."],
  ["05", "Scale & Grow", "We expand to new marketplaces and unlock more sales."],
];

const stories = [
  {
    initials: "PS",
    quote: "EVOC gave us a complete marketplace setup and management solution. Our sales on Amazon and Flipkart have grown 3× in just 6 months.",
    name: "Priya Sharma",
    role: "Founder, PureGlow",
  },
  {
    initials: "RM",
    quote: "Their advertising and SEO strategies helped our products rank higher and brought in consistent sales. A highly professional team.",
    name: "Rohit Mehta",
    role: "Co-Founder, UrbanFit",
  },
  {
    initials: "NV",
    quote: "From listing to inventory management, EVOC handles everything. It feels like having a dedicated marketplace team.",
    name: "Neha Verma",
    role: "Brand Manager, TerraEssence",
  },
];

function ArrowLink({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return <a className={`button ${outline ? "button-outline" : ""}`} href="#contact">{children}<span>→</span></a>;
}

export default function Home() {
  return (
    <main id="top">
      <div className="hero-shell">
        <Header />
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow animate-up">Marketplace management company</div>
            <h1 className="animate-up delay-1">Your Complete <span>Marketplace Growth Partner.</span></h1>
            <p className="hero-lead animate-up delay-2">
              We help ambitious brands launch, manage, optimize and scale across leading marketplaces—so you can focus on building a brand people remember.
            </p>
            <div className="hero-actions animate-up delay-3">
              <GetStartedButton />
              <a className="button button-outline" href="#services">Explore Our Services <span>↓</span></a>
            </div>
            <div className="hero-proof animate-up delay-4">
              <strong>250+</strong><span>brands scaled</span><i /><strong>4.9/5</strong><span>client rating</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Marketplace sales dashboard visualization">
            <div className="visual-aura" />
            <Image
              src="/marketplace-growth-hero.png"
              width={1792}
              height={896}
              priority
              alt="Laptop showing an e-commerce sales dashboard surrounded by product cards"
              className="hero-image"
            />
            <div className="market-badge badge-a">a<span>amazon</span></div>
            <div className="market-badge badge-f">F<span>Flipkart</span></div>
            <div className="market-badge badge-m">m<span>meesho</span></div>
            <div className="market-badge badge-n">N<span>NYKAA</span></div>
          </div>
        </section>
        <a href="#overview" className="scroll-cue" aria-label="Scroll to overview"><span>Scroll</span><i>↓</i></a>
      </div>

      <section className="overview light-section" id="overview">
        <div className="section-wrap split-grid">
          <Reveal className="section-intro">
            <div className="eyebrow light">What we help with</div>
            <h2>Everything You Need to Win on Marketplaces</h2>
            <p>From launching your brand to managing daily operations and scaling sales, EVOC helps brands grow across the entire marketplace ecosystem.</p>
          </Reveal>
          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="capability-card">
                <div className="icon-orb">{item.icon}</div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="marketplaces" id="marketplaces">
        <div className="section-wrap">
          <p className="rail-title">We manage all major marketplaces & more</p>
          <div className="marketplace-marquee" aria-label="Supported marketplaces">
            <div className="marketplace-track">
              {[0, 1].map((group) => (
                <div className="marketplace-sequence" key={group} aria-hidden={group === 1 ? "true" : undefined}>
                  {marketplaces.map((marketplace) => (
                    <MarketplaceLogo marketplace={marketplace} key={`${group}-${marketplace.key}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services dark-section" id="services">
        <div className="section-wrap services-grid">
          <Reveal className="section-intro dark-intro">
            <div className="eyebrow">Our services</div>
            <h2>End-to-End Marketplace Management</h2>
            <p>From listing to advertising, inventory to analytics—we cover every aspect of your marketplace business.</p>
            <a className="text-link" href="#contact">View all services <span>→</span></a>
          </Reveal>
          <div className="service-cards">
            {services.map((service, index) => (
              <Reveal className="service-card" key={service.title} delay={index * 60}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="card-arrow">↗</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="why light-section" id="why-us">
        <div className="section-wrap why-grid">
          <Reveal className="section-intro">
            <div className="eyebrow light">Why choose us</div>
            <h2>Built for Brands.<br />Driven by Growth.</h2>
            <p>Marketplace expertise, data-driven strategy and hands-on execution to help you scale faster and smarter.</p>
            <GetStartedButton />
          </Reveal>
          <div className="advantage-grid">
            {advantages.map((item, index) => (
              <Reveal className="advantage" key={item.title} delay={index * 80}>
                <div className="icon-orb">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process dark-section" id="process">
        <div className="section-wrap process-layout">
          <Reveal className="section-intro dark-intro">
            <div className="eyebrow">Our process</div>
            <h2>A Simple 5-Step Journey to Marketplace Success</h2>
            <p>Clear, transparent and results-driven—from day one.</p>
            <ArrowLink outline>Let&apos;s Talk</ArrowLink>
          </Reveal>
          <div className="steps">
            {steps.map(([number, title, text], index) => (
              <Reveal className="step" key={number} delay={index * 90}>
                <div className="step-circle"><b>{number}</b><span>{title}</span></div>
                <p>{text}</p>
                {index < steps.length - 1 && <i className="step-arrow">→</i>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="stories light-section" id="stories">
        <div className="section-wrap story-layout">
          <Reveal className="section-intro">
            <div className="eyebrow light">Success stories</div>
            <h2>Trusted by Brands Across Industries</h2>
            <p>We&apos;ve helped businesses of all sizes grow and achieve their biggest marketplace goals.</p>
            <a className="text-link blue-link" href="#contact">View case studies <span>→</span></a>
          </Reveal>
          <div className="testimonial-grid">
            {stories.map((story, index) => (
              <Reveal className="testimonial" key={story.name} delay={index * 90}>
                <div className="quote-mark">“</div>
                <p>{story.quote}</p>
                <div className="person"><span>{story.initials}</span><div><strong>{story.name}</strong><small>{story.role}</small></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="cta-orbit one" /><div className="cta-orbit two" />
        <div className="section-wrap cta-inner">
          <Reveal>
            <div className="eyebrow">Ready when you are</div>
            <h2>Let&apos;s Turn Your Marketplace Presence Into Real Growth.</h2>
            <p>Tell us where you are today. We&apos;ll show you where your brand can go next.</p>
          </Reveal>
          <Reveal delay={120} className="contact-card">
            <div><small>Email us</small><a href="mailto:hello@evoccommerce.com">hello@evoccommerce.com</a></div>
            <ArrowLink>Start a Conversation</ArrowLink>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="section-wrap footer-main">
          <Logo />
          <nav aria-label="Footer navigation">
            <a href="#services">Services</a><a href="#marketplaces">Marketplaces</a><a href="#why-us">Why Us</a><a href="#stories">Case Studies</a><a href="#contact">Contact</a>
          </nav>
          <div className="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="YouTube">▶</a></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© 2026 EVOC Flocommerce. All rights reserved.</span><span>Your Complete Marketplace Growth Partner.</span></div>
      </footer>
    </main>
  );
}
