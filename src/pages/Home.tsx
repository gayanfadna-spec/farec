import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Factory, 
  GraduationCap, 
  Lightbulb, 
  FileSearch, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  FlaskConical, 
  Leaf, 
  TrendingUp 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 py-10 md:py-14">
        <div className="absolute inset-0 z-0">
          {/* Subtle dark tint to harmonize video with luxury UI */}
          <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
          
          {/* YouTube video wrapper simulating object-cover with zero black bars */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <iframe 
              className="absolute top-1/2 left-1/2 pointer-events-none border-0"
              style={{
                width: "177.78vh",
                height: "56.25vw",
                minWidth: "100%",
                minHeight: "100%",
                transform: "translate(-50%, -50%) scale(1.35)",
              }}
              src="https://www.youtube.com/embed/ErD22Fa5MRc?autoplay=1&mute=1&loop=1&controls=0&playlist=ErD22Fa5MRc&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&disablekb=1&fs=0&vq=hd1080" 
              title="Background Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Hero Content with Ambient Glassmorphism */}
        <div className="container relative z-20 px-4 md:px-8 mx-auto">
          <div className="max-w-3xl mx-auto md:mx-0 backdrop-blur-md bg-slate-950/45 border border-white/20 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl text-white space-y-4 sm:space-y-5">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-amber-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>FAREC: Fadna Research Center</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.2] text-balance">
              Transforming traditional{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                Ayurvedic
              </span>{" "}
              knowledge into scientifically validated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
                wellness solutions
              </span>.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
              Operating at the intersection of nature, science, technology, and commercialization to engineer innovative products for the nutraceutical, cosmeceutical, and healthcare industries.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
              <Link
                to="/research"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg shadow-primary/30 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Collaborate With Us
              </Link>
            </div>

            {/* Credibility Metrics Strip */}
            <div className="pt-4 sm:pt-5 border-t border-white/15 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-amber-300">75+</p>
                <p className="text-xs text-white/70">Peer-Reviewed Papers</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-amber-300">20+ Yrs</p>
                <p className="text-xs text-white/70">Scientific Leadership</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-amber-300">100%</p>
                <p className="text-xs text-white/70">Evidence-Backed</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Scientific Pillar Highlights */}
      <section className="py-12 border-b border-border/50 bg-muted/20">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <FlaskConical className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-sm">Clinical Rigor</h4>
              <p className="text-xs text-muted-foreground">Standardized bioassays & safety studies</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="p-3 rounded-2xl bg-secondary/15 text-amber-600">
                <Leaf className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-sm">Indigenous Flora</h4>
              <p className="text-xs text-muted-foreground">Sustainable Ceylon botanical extracts</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-sm">GMP & ISO Ready</h4>
              <p className="text-xs text-muted-foreground">International regulatory compliance</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="p-3 rounded-2xl bg-secondary/15 text-amber-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-sm">Market Commercialization</h4>
              <p className="text-xs text-muted-foreground">From laboratory concept to global shelf</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section (What We Do) */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              What We Do
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FAREC combines traditional medicinal wisdom with cutting-edge analytical tools to develop scientifically supported herbal, nutraceutical, and cosmeceutical formulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: CRO */}
            <div className="group relative rounded-3xl border border-border/60 bg-gradient-to-b from-card to-muted/30 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                <FileSearch className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                Contract Research (CRO)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Formulation optimization, concept development, scientific validation, laboratory assays, and efficacy verification.
              </p>
              <Link 
                to="/research" 
                className="inline-flex items-center text-xs font-semibold text-primary gap-1 group-hover:gap-2 transition-all"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Card 2: Contract Manufacturing */}
            <div className="group relative rounded-3xl border border-border/60 bg-gradient-to-b from-card to-muted/30 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-secondary/40">
              <div className="h-14 w-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 transition-transform duration-300 group-hover:scale-110">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors">
                Contract Manufacturing
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                End-to-end private-label product development support for herbal teas, capsules, functional beverages, and wellness items.
              </p>
              <Link 
                to="/research" 
                className="inline-flex items-center text-xs font-semibold text-secondary gap-1 group-hover:gap-2 transition-all"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Card 3: Education & Training */}
            <div className="group relative rounded-3xl border border-border/60 bg-gradient-to-b from-card to-muted/30 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                Education & Training
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Workshops, scientific seminars, industrial apprenticeships, research mentorship, and botanical formulation masterclasses.
              </p>
              <Link 
                to="/education" 
                className="inline-flex items-center text-xs font-semibold text-primary gap-1 group-hover:gap-2 transition-all"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Full Width Card: Scientific Consultancy */}
            <div className="lg:col-span-3 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/5 via-muted/30 to-secondary/5 p-8 md:p-10 shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>End-to-End Advisory</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Scientific & Regulatory Consultancy
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                      We guide researchers, startups, manufacturers, and wellness brands through clinical validation, IP protection, formulation scaling, and international export certifications.
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow transition-all hover:bg-primary/90"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Luxury CTA Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-indigo-950 to-slate-950 text-primary-foreground p-10 sm:p-16 md:p-20 text-center shadow-2xl border border-white/10">
            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wider uppercase border border-white/15">
                Pioneering Wellness Innovation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                Ready to Bring Your Concept to Market?
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/85 font-light leading-relaxed max-w-2xl mx-auto">
                Partner with FAREC to engineer scientifically backed, commercially viable herbal and nutraceutical breakthroughs.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm shadow-lg shadow-secondary/20 transition-all hover:bg-secondary/90 hover:scale-105"
                >
                  <span>Start a Collaboration</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition-all"
                >
                  Learn About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
