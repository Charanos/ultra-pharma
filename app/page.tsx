"use client";

import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle,
  FileCheck,
  Brain,
  Microscope,
  Zap,
  Target,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please provide your name, email, and message.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const error = await response.json();
        alert(`Error: ${error.error || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Strategic Regulatory Intelligence",
      description:
        "Anticipate policy changes and emerging requirements with data-driven insights that support smarter decision-making.",
      features: [
        "Predictive analytics",
        "Risk assessment",
        "Opportunity mapping",
      ],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Accelerated Submission Excellence",
      description:
        "Precision documentation and proactive agency engagement to cut approval timelines and reduce costly delays.",
      features: ["eCTD mastery", "Real-time tracking", "Agency liaison"],
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Market Access",
      description:
        "Coordinated strategies and localized expertise that simplify expansion into multiple jurisdictions.",
      features: [
        "Harmonized dossiers",
        "Local expertise",
        "Fast-track pathways",
      ],
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Innovation",
      description:
        "Modern quality frameworks and digital tools that keep you inspection-ready and adaptable to evolving standards.",
      features: ["GxP excellence", "Audit readiness", "Digital QMS"],
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lifecycle Optimization",
      description:
        "Sustaining long-term product value through continuous monitoring, label enhancements, and strategic portfolio support.",
      features: ["Label expansion", "Patent extension", "Value maximization"],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Specialized Therapeutics",
      description:
        "Tailored regulatory pathways for advanced treatments, including rare diseases and next-generation therapies.",
      features: [
        "Rare disease focus",
        "Cell & gene therapy",
        "Expedited programs",
      ],
      gradient: "from-pink-400 to-rose-500",
    },
  ];

  const differentiators = [
    {
      title: "Outcome-Driven Submissions",
      description:
        "We build dossiers around approval triggers: pre-submission audits, agency-ready narratives, and checklist-driven gap closure.",
      why: "Fewer questions from regulators, shorter review cycles.",
    },
    {
      title: "Rapid-Response Regulatory Unit",
      description:
        "A dedicated team that activates for urgent filings, regulatory queries, or inspection support — available to jumpstart time-critical matters.",
      why: "Reduces stoppages and protects launch windows.",
    },
    {
      title: "Local Architects, Regional Reach",
      description:
        "In-country specialists translate global standards into locally acceptable strategies, coordinating with partners and stakeholders on the ground.",
      why: "Smoother market entry with fewer reworks.",
    },
    {
      title: "Compliance-by-Design",
      description:
        "Quality systems, SOPs, and traceable records are integrated from the outset—digital-first, audit-ready, and scalable.",
      why: "Inspection resilience and lower remediation costs over the product lifecycle.",
    },
    {
      title: "Client-Aligned Commercial Models",
      description:
        "Choose what works: milestone fees, retainer+milestone hybrids, or outcome-linked engagements tailored to project risk.",
      why: "Aligns incentives and reduces upfront budget friction.",
    },
    {
      title: "Capacity & Knowledge Transfer",
      description:
        "Practical workshops, SOP handovers, and on-the-job mentoring so your team gains autonomy fast.",
      why: "Long-term capability, less reliance on external support.",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Dynamic gradient orb that follows mouse */}
      <div
        className="fixed pointer-events-none z-0 w-[600px] h-[600px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(48,213,200,0.3) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x - 300}px, ${
            mousePosition.y - 300
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Navigation moved to components/navigation and injected in layout */}

      <main className="relative z-10">
        {/* Hero Section - Cinematic entrance */}
        <section className="min-h-screen flex items-center justify-center relative pt-20">
          {/* Subtle accent background fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#30d5c8]/5 dark:from-[#30d5c8]/8 via-transparent to-transparent"></div>

          {/* Animated background mesh */}
          <div className="absolute inset-0">
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10"></div>
            <div className="absolute bottom-0 right-20 w-96 h-96 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative">
            {/* Eyebrow/Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 mb-6">
              <span className="text-small text-brand-primary font-semibold uppercase">
                Healthcare Regulatory Experts
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-black mb-8 leading-[0.9] tracking-loose">
              <span className="block text-foreground mb-3 drop-shadow-sm">
                Precision in Healthcare.
              </span>
              <span className="block bg-gradient-to-r from-brand-primary via-cyan-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                Confidence in Regulation.
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-md md:text-lg text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              We deliver regulatory and compliance expertise across Kenya and
              Africa&apos;s healthcare sector—ensuring safety, quality
              standards, and faster market access for innovators and care
              providers.
            </h2>

            {/* CTA Buttons with premium interactions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <a
                href="#services"
                className="group cursor-pointer text-small relative bg-gradient-to-r from-cyan-600 to-teal-400 group-hover:opacity-100 px-8 py-2.5 text-white dark:text-gray-900 rounded-2xl text-medium font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-brand-primary/30"
              >
                <span className="relative z-10 flex items-center text-foreground justify-center">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#contact"
                className="group cursor-pointer text-small px-8 py-2.5 shadow-md hover:border-brand-primary text-foreground hover:text-brand-primary rounded-2xl text-medium font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-primary/10"
              >
                <span className="flex items-center text-foreground justify-center">
                  Get in Touch
                  <Mail className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                </span>
              </a>
            </div>
          </div>
          {/* Scroll Indicator - Animated Arrow */}
          <a
            href="#services"
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 group hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <div className="scroll-arrow animate-bounce">
              <ChevronRight className="w-6 h-6 text-foreground rotate-90" />
            </div>
          </a>
        </section>

        {/* Services Section - Interactive showcase */}
        <section
          id="services"
          className="py-22 relative bg-background scroll-mt-28"
        >
          {/* Subtle accent background fade from top */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#30d5c8]/5 dark:from-[#30d5c8]/8 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-semibold mb-6 text-foreground">
                Services That Define Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto my-6">
                From regulatory foresight to post-approval optimization, our
                services are designed to guide healthcare organizations through
                every stage of the product journey with confidence.
              </p>
            </div>

            {/* Mobile-responsive stacked service cards */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl bg-black/10 dark:bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                    onMouseEnter={() => setActiveService(index)}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                    {/* Service icon */}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>

                    <div className="relative">
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand-primary transition-all">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {service.description}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors font-semibold uppercase"
                          >
                            <CheckCircle className="w-3 h-3 text-brand-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Ultra Pharma - Differentiators */}
        <section className="py-22 relative bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-foreground">
                Why Partners Choose Ultra Pharma
              </h2>
              <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full mt-4"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto my-6">
                Clear advantages you’ll feel from day one. Practical systems,
                local know-how, and delivery models built to move healthcare
                products forward in Kenya and across Africa.
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
              {differentiators.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-[1px] bg-cyan-500/10 my-5 hover:from-brand-primary/40 hover:to-cyan-500/40 transition-all overflow-visible"
                >
                  <div className="relative rounded-2xl bg-black/5 dark:bg-white/5 p-6 md:p-7 hover:shadow-xl hover:shadow-brand-primary/10 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-cyan-500 text-white shadow-lg flex items-center justify-center text-xs font-bold">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="absolute -top-6 -right-6 w-24 h-24 shadow-md rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-md text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 p-3 rounded-xl shadow-md backdrop-blur-lg bg-white/15">
                      <div className="flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-wide text-small monty">
                        <Target className="w-4 h-4" />
                        Why it matters
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {item.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Unified CTAs and Form */}
        <section
          id="contact"
          className="py-10 relative bg-background scroll-mt-28"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#30d5c8]/5 dark:from-[#30d5c8]/8 via-transparent to-transparent pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-semibold text-foreground">
                Get In Touch
              </h2>
              <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full mt-4"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto my-6">
                Connect with our regulatory team for guidance, proposals, or
                rapid-response support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#contact-form"
                className="group cursor-pointer text-small relative bg-gradient-to-r from-cyan-600 to-teal-400 px-8 py-2.5 text-white rounded-2xl font-semibold transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-brand-primary/30"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Schedule Expert Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="mailto:j.k@ultrapharma.co.ke"
                className="group cursor-pointer text-small px-8 py-2.5 shadow-md hover:border-brand-primary text-foreground hover:text-brand-primary rounded-2xl font-semibold transition-all backdrop-blur-sm hover:shadow-xl hover:shadow-brand-primary/10"
              >
                <span className="flex items-center justify-center">
                  Email Us Directly
                  <Mail className="w-5 h-5 ml-2" />
                </span>
              </a>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
              id="contact-form"
            >
              {/* Left: Contact information */}
              <div className="p-6 md:p-8 rounded-2xl bg-black/5 dark:bg-white/5 shadow-md">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-small font-semibold text-foreground">
                        Address
                      </p>
                      <p className="text-small text-muted-foreground">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-small font-semibold text-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:j.k@ultrapharma.co.ke"
                        className="text-small text-muted-foreground hover:text-brand-primary"
                      >
                        j.k@ultrapharma.co.ke
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-small font-semibold text-foreground">
                        Phone
                      </p>
                      <a
                        href="tel:+2540205618353"
                        className="text-small text-muted-foreground hover:text-brand-primary"
                      >
                        +254 020 5618353
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                      <FaLinkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-small font-semibold text-foreground">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/ultra-pharma-kenya/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-small text-muted-foreground hover:text-brand-primary"
                      >
                        Connect with us
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right: Contact form */}
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-black/5 dark:bg-white/5 shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl bg-background shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full rounded-xl bg-background shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full rounded-xl bg-background shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="w-full rounded-xl bg-background shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group cursor-pointer inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-400 text-white font-semibold px-6 py-3 hover:shadow-lg hover:shadow-brand-primary/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {submitted && (
                    <p className="text-small text-brand-primary">
                      Thanks! We’ll get back to you shortly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer - Brand, Links, Contact */}
        <footer className="relative pt-10 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-[#30d5c8]/5 dark:from-[#30d5c8]/8 via-transparent to-transparent"></div>

          <div className="container mx-auto px-6 py-12 relative">
            <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
              {/* Brand */}
              <div>
                <div className="flex items-center justify-start">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-12 h-12 rounded-xl flex items-center gap-0">
                      <Image
                        src="/logo.png"
                        alt="Ultra Pharma Logo"
                        width={48}
                        height={48}
                      />
                    </div>
                    <span className="-ml-1.5 font-semibold uppercase">
                      Ultra <span className="text-[#30d5c8]">Pharma</span>
                    </span>
                  </Link>
                </div>
                <p className="text-small text-muted-foreground mt-4">
                  Precision in healthcare. Confidence in regulation.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-small font-semibold text-foreground mb-3">
                  Navigation
                </h4>
                <ul className="space-y-2 text-md">
                  <li>
                    <Link href="/" className="hover:text-brand-primary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-brand-primary">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-brand-primary">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-brand-primary">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="text-small font-semibold text-foreground mb-3">
                  Services
                </h4>
                <ul className="space-y-2 text-md">
                  <li>Regulatory Strategy</li>
                  <li>Regulatory Submissions</li>
                  <li>Global Regulatory Affairs</li>
                  <li>Compliance & Quality</li>
                  <li>Lifecycle Management</li>
                  <li>Specialized Services</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-small font-semibold text-foreground mb-3">
                  Contact
                </h4>
                <ul className="space-y-3 text-md">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-brand-primary" />{" "}
                    Nairobi, Kenya
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="w-4 h-4 mt-0.5 text-brand-primary" />{" "}
                    <a
                      href="mailto:j.k@ultrapharma.co.ke"
                      className="hover:text-brand-primary"
                    >
                      j.k@ultrapharma.co.ke
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-0.5 text-brand-primary" />{" "}
                    <a
                      href="tel:+2540205618353"
                      className="hover:text-brand-primary"
                    >
                      +254 020 5618353
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaLinkedin className="w-4 h-4 mt-0.5 text-brand-primary" />{" "}
                    <a
                      href="https://www.linkedin.com/in/ultra-pharma-kenya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-primary"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground monty uppercase">
                © {year} Ultra Pharma. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-brand-primary">
                  Privacy
                </a>
                <a href="#" className="hover:text-brand-primary">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
