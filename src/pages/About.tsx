import { Target, Eye, ShieldCheck } from "lucide-react";






export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-foreground/20 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-balance mx-auto">
            About FAREC
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed max-w-2xl mx-auto text-balance">
            The dedicated research, innovation, education, and product development arm of FADNA.
          </p>
        </div>
      </section>

      {/* Introduction & Who We Are */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">Introduction</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FAREC (Fadna Research Center) is the dedicated research, innovation, education, and product development arm of FADNA. Established with the vision of transforming traditional Sri Lankan herbal and Ayurvedic knowledge into scientifically validated modern wellness solutions, FAREC operates at the intersection of nature, science, technology, and commercialization.
                </p>
                <p>
                  Our organization combines traditional medicinal wisdom with advanced scientific methodologies to develop innovative products and research solutions for the nutraceutical, cosmeceutical, herbal, wellness, and healthcare industries.
                </p>
                <p>
                  FAREC collaborates with universities, researchers, healthcare professionals, scientists, entrepreneurs, and commercial partners to create safe, effective, evidence-based natural products with global potential.
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold pt-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FAREC serves as a Research & Development Center, Product Innovation Hub, Contract Research Organization (CRO), Product Development Partner, Contract Manufacturing Partner, Educational & Training Institute, and Scientific Consultancy Center.
                </p>
                <p>
                  Our multidisciplinary team includes scientists, Ayurveda physicians, product developers, biologists, clinical researchers, marketing strategists, regulatory advisors, and academic collaborators. By integrating scientific research with industry expertise, we help transform innovative concepts into commercially successful products.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] md:min-h-[600px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/about_img.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center justify-center p-4 bg-primary-foreground/10 rounded-full mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold">Our Vision</h3>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                To become a globally recognized center for natural product innovation by bridging traditional knowledge with modern scientific excellence.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center justify-center p-4 bg-primary-foreground/10 rounded-full mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold">Our Mission</h3>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                To develop scientifically validated, nature-inspired health and wellness solutions that improve quality of life while promoting sustainable innovation, education, and research excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Scientific Standards */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto text-center max-w-4xl space-y-8">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-4">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Quality & Scientific Standards</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FAREC emphasizes scientific accuracy, product safety, quality assurance, research integrity, evidence-based innovation, process standardization, ethical research practices, and continuous improvement.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are committed to developing reliable, scientifically validated products that meet both local and international expectations.
          </p>
        </div>
      </section>

      {/* Future Direction */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <h2 className="text-3xl font-serif font-bold">Future Direction</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FAREC aims to expand its capabilities in advanced natural product research, clinical research, biotechnology integration, AI-assisted product innovation, global collaborations, educational initiatives, sustainable wellness innovation, and export-oriented scientific product development.
          </p>
          <p className="text-lg text-muted-foreground font-medium">
            Our long-term goal is to position Sri Lanka as a globally recognized center for scientifically validated natural product innovation.
          </p>
        </div>
      </section>
    </div>
  );
}
