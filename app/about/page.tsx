import { PageTransition } from "@/components/page-transition"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <PageTransition>
        <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center py-20 bg-white dark:bg-black">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 bg-gradient-to-r from-brand-green to-brand-purple bg-clip-text text-transparent">
            About Ultra Pharma
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering pharmaceutical excellence through innovation, research, and unwavering commitment to patient care
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 py-20 bg-gray-50 dark:bg-gray-800">
          <div className="bg-card p-8 rounded-2xl border">
            <h2 className="text-3xl font-bold font-montserrat mb-4 text-brand-green">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To develop and deliver innovative pharmaceutical solutions that improve patient outcomes and enhance quality of life. 
              We are committed to advancing healthcare through cutting-edge research, rigorous testing, and ethical practices.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border">
            <h2 className="text-3xl font-bold font-montserrat mb-4 text-brand-purple">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the global leader in pharmaceutical innovation, setting new standards for drug development and patient care. 
              We envision a world where breakthrough treatments are accessible to all who need them.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white dark:bg-black">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-green to-brand-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Upholding the highest ethical standards in all our operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-purple to-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Pursuing perfection in research, development, and manufacturing
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-green to-brand-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">Compassion</h3>
              <p className="text-muted-foreground">
                Putting patient needs at the heart of everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-purple to-brand-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously pushing the boundaries of medical science
              </p>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="bg-gradient-to-r from-brand-green/10 to-brand-purple/10 rounded-2xl p-12 py-20 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat text-brand-green mb-2">25+</div>
              <p className="text-lg text-muted-foreground">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat text-brand-purple mb-2">100M+</div>
              <p className="text-lg text-muted-foreground">Patients Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat text-brand-green mb-2">50+</div>
              <p className="text-lg text-muted-foreground">Countries Reached</p>
            </div>
          </div>
        </section>
        </main>
      </PageTransition>
    </div>
  )
}
