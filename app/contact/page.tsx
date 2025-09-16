import { PageTransition } from "@/components/page-transition"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <PageTransition>
        <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center py-20 bg-white dark:bg-black">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 bg-gradient-to-r from-brand-green to-brand-purple bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for partnerships, inquiries, or support
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 py-20 bg-gray-50 dark:bg-gray-800">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border">
            <h2 className="text-2xl font-bold font-montserrat mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium font-montserrat mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium font-montserrat mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium font-montserrat mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium font-montserrat mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>Product Information</option>
                  <option>Support Request</option>
                  <option>Media Relations</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium font-montserrat mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-brand-green to-brand-purple text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border">
              <h2 className="text-2xl font-bold font-montserrat mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-brand-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold font-montserrat mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Pharma Plaza<br />
                      Medical District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold font-montserrat mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +254 020 5618353<br />
                      Mon-Fri, 9AM-6PM EAT
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-brand-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold font-montserrat mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      j.k@ultrapharma.co.ke
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-green/10 to-brand-purple/10 p-8 rounded-2xl py-12 bg-white dark:bg-black">
              <h3 className="text-xl font-bold font-montserrat mb-4">Emergency Contact</h3>
              <p className="text-muted-foreground mb-4">
                For urgent medical inquiries or adverse event reporting:
              </p>
              <div className="space-y-2">
                <p className="font-semibold">24/7 Hotline: +1 (555) 999-HELP</p>
                <p className="font-semibold">Email: emergency@ultrapharma.com</p>
              </div>
            </div>
          </div>
        </div>
        </main>
      </PageTransition>
    </div>
  )
}
