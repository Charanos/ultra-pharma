"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Activity,
  Target,
  Zap,
  Shield,
  Globe,
  Award,
  Users,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  FileCheck,
  Brain,
  Microscope,
  Heart,
} from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const stats = [
    {
      value: "500+",
      label: "Successful Approvals",
      icon: <Award className="w-5 h-5" />,
    },
    {
      value: "98%",
      label: "First-Time Success",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      value: "25+",
      label: "Global Markets",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      value: "15yr",
      label: "Industry Leadership",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Ultra Pharma transformed our global expansion timeline from years to months.",
      author: "Dr. Sarah Chen",
      role: "CEO, BioNext Therapeutics",
      rating: 5,
    },
    {
      quote: "Their regulatory intelligence saved us $2M in avoided delays.",
      author: "Marcus Johnson",
      role: "VP Regulatory, MedTech Innovations",
      rating: 5,
    },
  ];

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
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-10"></div>
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
              Africa's healthcare sector—ensuring safety, quality standards, and
              faster market access for innovators and care providers.
            </h2>

            {/* CTA Buttons with premium interactions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="group cursor-pointer text-small relative bg-gradient-to-r from-cyan-600 to-teal-400 group-hover:opacity-100 px-8 py-2.5 text-white dark:text-gray-900 rounded-2xl text-medium font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-brand-primary/30">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group cursor-pointer text-small px-8 py-2.5 shadow-md hover:border-brand-primary text-foreground hover:text-brand-primary rounded-2xl text-medium font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-primary/10">
                <span className="flex items-center justify-center">
                  Get in Touch
                  <Mail className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Services Section - Interactive showcase */}
        <section id="services" className="py-22 relative bg-background">
          {/* Subtle accent background fade from top */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#30d5c8]/5 dark:from-[#30d5c8]/8 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-semibold mb-6 text-foreground">
                Services That Define Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From regulatory foresight to post-approval optimization, our
                services are designed to guide healthcare organizations through
                every stage of the product journey with precision and
                confidence.
              </p>
            </div>

            {/* Staggered Timeline service cards */}
            <div className="max-w-7xl mx-auto relative">
              {/* Central timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-black/10"></div>

              <div className="space-y-16">
                {services.map((service, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`group relative flex items-center ${
                        isEven ? "justify-start" : "justify-end"
                      }`}
                      onMouseEnter={() => setActiveService(index)}
                    >
                      {/* Timeline icon - always centered */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-lg z-10 group-hover:scale-110 transition-transform`}
                      >
                        {service.icon}
                      </div>

                      {/* Card content - staggered left/right */}
                      <div
                        className={`w-5/12 relative p-8 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden ${
                          isEven ? "mr-auto" : "ml-auto"
                        }`}
                      >
                        {/* Animated background pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                        {/* Connecting line to center - made more visible */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-1 bg-brand-primary/50 ${
                            isEven ? "-right-12" : "-left-12"
                          }`}
                        ></div>

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
                                className="flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors"
                              >
                                <CheckCircle2 className="w-3 h-3 text-brand-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators - Social proof with style */}
        <section className="py-32 bg-white dark:bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
                <Users className="w-4 h-4 text-brand-primary" />
                <span className="text-small text-brand-primary font-semibold">
                  Trusted Globally
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Why Industry Leaders Choose Ultra Pharma
              </h2>
            </div>

            {/* Testimonial cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-primary to-cyan-600 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-medium text-gray-900 dark:text-gray-100 mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.author}
                    </p>
                    <p className="text-small text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership logos placeholder */}
            <div className="text-center">
              <p className="text-small text-gray-600 dark:text-gray-300 mb-8">
                Trusted by leading pharmaceutical innovators worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Compelling close */}
        <section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-gray-800">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-cyan-600 to-teal-500 opacity-90" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          />

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 mb-8">
              <Heart className="w-4 h-4 text-white" />
              <span className="text-small text-white font-semibold">
                Your Success Is Our Mission
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform Your
              <br />
              Regulatory Journey?
            </h2>

            <p className="text-medium text-white/90 mb-12 max-w-3xl mx-auto">
              Join 500+ companies that have accelerated their path to market
              with Ultra Pharma's expertise. Your breakthrough therapy deserves
              breakthrough regulatory support.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="group px-10 py-4 bg-white text-brand-primary rounded-2xl text-medium font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center">
                  Schedule Expert Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-primary rounded-2xl text-medium font-bold transition-all duration-300 backdrop-blur-sm">
                Download Success Guide
              </button>
            </div>

            {/* Contact info cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Direct Line</h3>
                <p className="text-white/90">+254 020 5618353</p>
              </div>

              <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Priority Email</h3>
                <p className="text-white/90">j.k@ultrapharma.co.ke</p>
              </div>

              <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Headquarters</h3>
                <p className="text-white/90">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>
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
