/*
  EduSpace style reminder: Indigo Civic OS — a Swiss/civic-tech rail-and-canvas layout,
  warm ivory canvas, deep ink navigation, signal indigo actions, calm status cues,
  and purposeful asymmetry. Keep copy direct and interactions utility-like.
*/
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  House,
  Map,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  QrCode,
  ScanLine,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Wifi,
  WifiOff,
} from "lucide-react";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";

export const APK_DOWNLOAD_URL = "/manus-storage/eduspace-real_3314a64e.apk";
const APK_SHA256 = "50f031df8aeabde9458e7c636ea31583c04a8bee5261d7d132102adc9ae3651a";

const regions = [
  { name: "Khomas", code: "KH", schools: "148", seats: "1,284", tone: "indigo" },
  { name: "Erongo", code: "ER", schools: "92", seats: "648", tone: "teal" },
  { name: "Oshana", code: "OS", schools: "76", seats: "391", tone: "violet" },
  { name: "Omusati", code: "OM", schools: "84", seats: "526", tone: "sand" },
];

const features = [
  {
    icon: House,
    eyebrow: "Availability first",
    title: "Real-time grade space tracker",
    body: "See open seats by grade before you apply, with a clearer signal for the next step.",
    tint: "indigo",
  },
  {
    icon: Map,
    eyebrow: "One national view",
    title: "All 14 Namibian regions",
    body: "Filter schools across Khomas, Erongo, Oshana, Omusati, Zambezi, and beyond.",
    tint: "sand",
  },
  {
    icon: Bell,
    eyebrow: "Stay in the loop",
    title: "Instant school broadcasts",
    body: "Receive alerts for admissions, document deadlines, and placement updates.",
    tint: "violet",
  },
  {
    icon: Moon,
    eyebrow: "More than a day school",
    title: "Boarding & hostel filters",
    body: "Find schools with hostel accommodation and facilities that fit your family.",
    tint: "teal",
  },
  {
    icon: FileText,
    eyebrow: "Actionable details",
    title: "Direct applications & contact",
    body: "Reach verified school emails, phone numbers, and placement forms without the chase.",
    tint: "ink",
  },
];

const faqs = [
  {
    question: "Why am I downloading an APK instead of using the Google Play Store?",
    answer:
      "EduSpace is currently distributed as the official direct Android build. This lets the school placement service share updates directly while the Play Store listing is prepared.",
  },
  {
    question: "Is this APK safe to install?",
    answer:
      "The release is prepared as an official EduSpace build and follows standard Android and Expo security practices. Always verify the checksum shown on this page before installing a copy from another source.",
  },
  {
    question: "What Android version is required?",
    answer: "EduSpace supports Android 8.0 and above, including most current entry-level and mid-range Android devices.",
  },
  {
    question: "Is EduSpace free to use?",
    answer: "Yes. EduSpace is free for parents, learners, and educators to use when checking school places and contacting schools.",
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`}>
      <div className="brand-mark" aria-hidden="true">
        <img src="/manus-storage/eduspace-real-logo_7c8af88d.jpg" alt="" />
      </div>
      <div className="brand-copy">
        <span className="brand-name">EduSpace</span>
        {!compact && <span className="brand-subtitle">Namibia school portal</span>}
      </div>
    </div>
  );
}

function DownloadButton({ compact = false }: { compact?: boolean }) {
  const handleDownload = () => {
    if (APK_DOWNLOAD_URL.includes("your-domain.com")) {
      toast.info("Your APK link is ready to connect.", {
        description: "Replace APK_DOWNLOAD_URL when you upload the final EduSpace build.",
      });
      return;
    }
    window.location.href = APK_DOWNLOAD_URL;
  };

  return (
    <button className={`download-button ${compact ? "download-button--compact" : ""}`} onClick={handleDownload}>
      <Download size={compact ? 15 : 18} strokeWidth={2.4} />
      <span>{compact ? "Download APK" : "Download Android APK"}</span>
      {!compact && <ArrowRight className="download-button__arrow" size={16} />}
    </button>
  );
}

function MiniQr() {
  return (
    <div className="qr-code-svg" aria-label="QR code for the EduSpace APK download" role="img">
      <QRCodeSVG value={new URL(APK_DOWNLOAD_URL, window.location.origin).toString()} size={105} bgColor="#ffffff" fgColor="#151b2e" level="M" includeMargin={false} />
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="device-stage" aria-label="EduSpace app preview">
      <div className="device-render device-render--texture" aria-hidden="true" />
      <div className="device-glow device-glow--one" />
      <div className="device-glow device-glow--two" />
      <div className="device-folio device-folio--top">
        <span className="folio-dot folio-dot--teal" />
        <span>Live availability</span>
        <strong>Updated now</strong>
      </div>
      <div className="device-folio device-folio--bottom">
        <div className="folio-icon"><ShieldCheck size={15} /></div>
        <span><strong>Verified schools</strong><br />Across 14 regions</span>
      </div>
      <div className="phone-shell phone-shell--real">
        <img className="phone-homepage" src="/manus-storage/eduspace-real-homepage_d5da0a0a.jpeg" alt="EduSpace app homepage showing school regions and navigation" />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [isMobileBrowser, setIsMobileBrowser] = useState(false);

  useEffect(() => {
    setIsMobileBrowser(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${menuOpen ? "site-header--open" : ""}`}>
        <div className="header-inner">
          <a className="header-brand" href="#top" onClick={() => scrollTo("top")}><Logo /></a>
          <span className="header-badge"><span className="header-badge__dot" /> Namibia school portal</span>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <button onClick={() => scrollTo("features")}>Features</button>
            <button onClick={() => scrollTo("install")}>How to install</button>
            <button onClick={() => scrollTo("regions")}>Regions</button>
            <button onClick={() => scrollTo("faqs")}>FAQs</button>
          </nav>
          <div className="header-actions"><DownloadButton compact /><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><button onClick={() => scrollTo("features")}>Features <ArrowRight size={16} /></button><button onClick={() => scrollTo("install")}>How to install <ArrowRight size={16} /></button><button onClick={() => scrollTo("regions")}>Regions <ArrowRight size={16} /></button><button onClick={() => scrollTo("faqs")}>FAQs <ArrowRight size={16} /></button></nav>}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-atmosphere" />
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow eyebrow--light"><span className="eyebrow-mark"><ScanLine size={13} /></span> Namibia's official school placement signal</div>
              <h1>Find school places <em>in real time.</em></h1>
              <p className="hero-lede">Check available seats across all 14 regions from Grade 1 to 12, explore hostel &amp; boarding facilities, and receive instant school broadcast alerts directly on your phone.</p>
              <div className="hero-cta-row"><DownloadButton /><div className="safe-note"><ShieldCheck size={16} /><span><strong>Verified safe &amp; secure</strong><small>Built for Android 8.0+</small></span></div></div>
              <div className="hero-meta"><span><strong>v1.0.4</strong> current release</span><i /> <span><strong>77 MB</strong> download size</span><i /> <span>{isMobileBrowser ? "Optimized for your phone" : "Mobile-first experience"}</span></div>
            </div>
            <div className="hero-visual"><PhonePreview /></div>
          </div>
          <div className="hero-bottomline container"><div className="scroll-cue"><span className="scroll-cue__line" /> Scroll to explore</div><div className="hero-stat"><span className="hero-stat__number">14</span><span><strong>regions</strong><small>one shared view</small></span></div><div className="hero-stat"><span className="hero-stat__number">1–12</span><span><strong>grade levels</strong><small>from primary to senior</small></span></div></div>
        </section>

        <section className="trust-strip"><div className="container trust-strip__inner"><span className="trust-label">A clearer next step for every learner</span><div className="trust-items"><span><Check size={15} /> Official distribution build</span><span><Check size={15} /> Free for families</span><span><Check size={15} /> Built for Namibia</span></div></div></section>

        <section className="features-section section-space" id="features">
          <div className="container">
            <div className="section-heading section-heading--split"><div><div className="eyebrow"><span className="eyebrow-mark"><Sparkles size={13} /></span> Everything in one signal</div><h2>Less guesswork.<br /><span>More direction.</span></h2></div><p>EduSpace gives families and educators the live context to make school placement decisions with more confidence and fewer dead ends.</p></div>
            <div className="feature-grid">{features.map((feature, index) => { const Icon = feature.icon; return <article className={`feature-card feature-card--${feature.tint} ${index === 4 ? "feature-card--wide" : ""}`} key={feature.title}><div className="feature-card__top"><div className="feature-icon"><Icon size={19} /></div><span className="feature-index">0{index + 1}</span></div><div><div className="feature-eyebrow">{feature.eyebrow}</div><h3>{feature.title}</h3><p>{feature.body}</p></div><span className="feature-arrow"><ArrowDownRight size={18} /></span></article>; })}</div>
          </div>
        </section>

        <section className="install-section section-space" id="install"><div className="container install-layout"><div className="install-intro"><div className="eyebrow"><span className="eyebrow-mark"><Download size={13} /></span> Ready in under a minute</div><h2>Three steps to a<br /><span>clearer search.</span></h2><p>Keep the process simple. Download the official build, give Android permission once, and start exploring open spaces.</p><a className="text-link" href="#faqs" onClick={(event) => { event.preventDefault(); scrollTo("faqs"); }}>Questions about the APK? <ArrowRight size={15} /></a></div><div className="steps-list"><div className="step-item step-item--active"><div className="step-number">01</div><div className="step-copy"><h3>Download APK</h3><p>Tap the download button and wait for the <code>.apk</code> file to save on your phone.</p></div><Download size={18} /></div><div className="step-item"><div className="step-number">02</div><div className="step-copy"><h3>Allow installation</h3><p>If prompted, tap <strong>Settings</strong> and toggle “Allow from this source”.</p></div><ShieldCheck size={18} /></div><div className="step-item"><div className="step-number">03</div><div className="step-copy"><h3>Open &amp; explore</h3><p>Launch EduSpace, choose your region, and start tracking open school spaces.</p></div><ArrowRight size={18} /></div></div><div className="install-card"><div className="install-card__copy"><div className="install-card__tag"><span /><span /> Direct download</div><h3>Have your phone<br />ready?</h3><p>Scan the code to keep the download moving on your mobile.</p><div className="install-card__hint"><QrCode size={15} /> Works best on Android Chrome</div></div><div className="qr-wrap"><MiniQr /><span>Scan to download</span></div></div></div></section>

        <section className="regions-section section-space" id="regions"><div className="regions-backdrop" /><div className="container"><div className="section-heading section-heading--regions"><div><div className="eyebrow eyebrow--light"><span className="eyebrow-mark"><Map size={13} /></span> Live availability snapshot</div><h2>See where space<br /><em>is open.</em></h2></div><p>Availability changes as schools update their registers. This snapshot shows the kind of signal EduSpace puts in your hands.</p></div><div className="region-table-wrap"><div className="region-table-head"><span>Region</span><span>Schools listed</span><span>Open seats</span><span className="region-table-head__live"><span className="live-dot" /> Live now</span></div>{regions.map((region) => <div className="region-row" key={region.name}><div className="region-name"><span className={`region-code region-code--${region.tone}`}>{region.code}</span><strong>{region.name}</strong></div><span className="region-value">{region.schools}<small> schools</small></span><span className="region-seats"><strong>{region.seats}</strong><span className={`seat-bar seat-bar--${region.tone}`}><i /></span></span><span className="region-status"><span className="live-dot" /> Updating</span></div>)}</div><div className="region-footnote"><span><Clock3 size={14} /> Snapshot refreshed moments ago</span><a href="#download" onClick={(event) => { event.preventDefault(); scrollTo("download"); }}>Download the app for your region <ArrowRight size={14} /></a></div></div></section>

        <section className="proof-section section-space"><div className="container proof-layout"><div className="proof-visual"><img src="/manus-storage/eduspace-campus-collage_c2d652cf.png" alt="Editorial collage showing calm school spaces and campus details" /><div className="proof-stamp"><ShieldCheck size={18} /><span>Official<br /><strong>EduSpace</strong></span></div></div><div className="proof-copy"><div className="eyebrow"><span className="eyebrow-mark"><MessageCircle size={13} /></span> Built around the real question</div><blockquote>“Is there a place for my child — and what do I do next?”</blockquote><p>EduSpace brings the answer closer to home. One service for school availability, regional context, direct contacts, and the updates that matter when placement decisions are moving quickly.</p><div className="proof-signature"><div className="proof-signature__mark"><Logo compact /></div><span>For parents, learners<br />and educators across Namibia</span></div></div></div></section>

        <section className="faq-section section-space" id="faqs"><div className="container faq-layout"><div className="faq-aside"><div className="eyebrow"><span className="eyebrow-mark"><CircleHelp size={13} /></span> Need to know</div><h2>Questions,<br /><span>answered.</span></h2><p>If you are installing an APK for the first time, start here. The essentials are kept simple.</p><a href="#download" className="faq-download-link" onClick={(event) => { event.preventDefault(); scrollTo("download"); }}>Download EduSpace <ArrowRight size={15} /></a></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-row ${openFaq === index ? "faq-row--open" : ""}`} key={faq.question}><button className="faq-trigger" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span className="faq-number">0{index + 1}</span><span>{faq.question}</span><ChevronDown size={18} /></button>{openFaq === index && <div className="faq-answer"><p>{faq.answer}</p></div>}</div>)}</div></div></section>

        <section className="download-section" id="download"><div className="container download-panel"><div className="download-panel__glow" /><div className="download-panel__copy"><div className="eyebrow eyebrow--light"><span className="eyebrow-mark"><Download size={13} /></span> The official direct build</div><h2>Make the next search<br /><em>a little clearer.</em></h2><p>Start with EduSpace and keep school availability, regional context, and essential contacts close at hand.</p><div className="download-panel__actions"><DownloadButton /><span className="download-panel__meta"><span>v1.0.4</span><i /> 77 MB <i /> Android 8.0+</span></div></div><div className="download-panel__side"><div className="side-status"><span className="live-dot" /> Release status <strong>Available now</strong></div><div className="side-divider" /><div className="side-detail"><ShieldCheck size={18} /><span><strong>Verified safe &amp; secure</strong><small>Official EduSpace distribution build</small></span></div><div className="side-detail"><WifiOff size={18} /><span><strong>Need the link later?</strong><small>Keep this page bookmarked</small></span></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div><a className="footer-brand" href="#top" onClick={() => scrollTo("top")}><Logo /></a><p>Namibia's official school placement<br />and grade availability app.</p></div><div className="footer-links"><div><span>Explore</span><a href="#features">Features</a><a href="#install">How to install</a><a href="#regions">Regions</a></div><div><span>Support</span><a href="#faqs">FAQs</a><a href="#download">Download mirror <ExternalLink size={12} /></a><a href="mailto:hello@eduspace.na">Contact team</a></div><div><span>Trust &amp; safety</span><a href="#privacy" onClick={() => toast.info("Privacy policy placeholder", { description: "This link will be connected when the final policy is provided." })}>Privacy policy</a><a href="#terms" onClick={() => toast.info("Terms placeholder", { description: "This link will be connected when the final terms are provided." })}>Terms of service</a><a href="#checksum" onClick={() => toast.info("SHA-256 checksum", { description: APK_SHA256 })}>SHA-256 checksum</a><small className="checksum-value" title={APK_SHA256}>{APK_SHA256}</small></div></div></div><div className="container footer-bottom"><span>© 2026 EduSpace. Built for the Namibian community.</span><span>In acknowledgment of Namibia's education community <span className="footer-heart">◆</span></span></div></footer>
    </div>
  );
}

export default App;
