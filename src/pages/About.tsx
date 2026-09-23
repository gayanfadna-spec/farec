import { Target, Eye, ShieldCheck, Users, Award, Sparkles, CheckCircle, Globe2, Cpu, GraduationCap } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Dr. D.B.T. Wijeratne",
    role: "Food Science & Nutrition",
    bio: "PhD, University of Illinois (Food Science & Nutrition). 20+ years in food security leadership including roles at the Ministry of Agriculture and FAO.",
  },
  {
    name: "Prof. Sameera R. Samarakoon",
    role: "Cell & Molecular Biology",
    bio: "Professor of Cell & Molecular Biology, University of Colombo. Pioneer in natural anticancer therapies. 75+ peer-reviewed publications.",
  },
  {
    name: "Prof. Ravi Dissanayaka",
    role: "Marketing & Strategy",
    bio: "Professor of Marketing, University of Kelaniya. PhD from Taylor's University. 120+ research publications. Led the \"Brand Sri Lanka\" initiative.",
  },
  {
    name: "Dr. G.P.L. Supulchandra",
    role: "Ayurveda & Bioinformatics",
    bio: "BAMS (University of Colombo), Masters in Ayurveda Hospital Management. Pursuing PhD & MSc in Bioinformatics. Key driver of product innovation.",
  },
  {
    name: "Dr. Heshani Wathsala",
    role: "Ayurveda & Management",
    bio: "BAMS & Masters in Hospital Management. Bridges traditional Ayurvedic wellness with modern business strategy and HR development.",
  },
  {
    name: "Dr. Srimal Dilmika",
    role: "Integrative Wellness & Exports",
    bio: "Licensed Ayurveda physician with expertise in integrative wellness, yoga, and acupuncture. Manages export operations and international collaborations.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header Section */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Dark/Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about_hero.jpg" 
            alt="About FAREC Botanical Heritage" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-950/20 to-slate-950/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 text-amber-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Our Heritage & Science</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg leading-tight mx-auto">
            About FAREC
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 drop-shadow-md font-light leading-relaxed max-w-2xl mx-auto text-balance">
            The dedicated research, product innovation, and clinical validation arm of FADNA.
          </p>
        </div>
      </section>

      {/* Introduction & Who We Are */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <span>Introduction</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                  Pioneering Evidence-Based Ayurvedic Innovation
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  FAREC (Fadna Research Center) was established with a clear mandate: to transform ancient Sri Lankan herbal wisdom into scientifically validated, globally compliant wellness formulations. We operate seamlessly across natural biology, clinical pharmacology, and commercial product scaling.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-2xl font-serif font-bold text-foreground">Who We Are</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  FAREC serves as a unified innovation ecosystem: Contract Research Organization (CRO), private-label manufacturing partner, postgraduate mentorship hub, and regulatory consultancy.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Clinical bioassay validation</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Private-label contract manufacturing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Ayurvedic bioinformatics & IP</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Global export compliance & GMP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Card Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/60 group">
                <div className="h-[460px] w-full bg-[url('/images/about_img.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-white space-y-1">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Research Integrity</p>
                  <p className="text-sm font-medium">Over 20 years translating botanical knowledge into validated products.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-10 shadow-sm space-y-5 relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized center for natural product innovation by bridging traditional knowledge with modern scientific excellence and clinical proof.
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card to-secondary/5 p-8 md:p-10 shadow-sm space-y-5 relative overflow-hidden group hover:border-secondary/40 transition-colors">
              <div className="h-14 w-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary transition-transform group-hover:scale-110">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To develop scientifically validated, nature-inspired health and wellness solutions that improve quality of life while promoting sustainable innovation, education, and research excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quality, Standards & Future Vision */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto max-w-5xl space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 p-3 bg-primary/10 text-primary rounded-2xl">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Quality, Ethics & Scientific Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FAREC emphasizes scientific accuracy, product safety, quality assurance, research integrity, evidence-based innovation, process standardization, and ethical laboratory practices.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/40 space-y-2">
              <Globe2 className="h-6 w-6 text-primary mx-auto" />
              <h4 className="font-semibold text-sm">Global Standards</h4>
              <p className="text-xs text-muted-foreground">Adhering to international safety & phytomedicine guidelines.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/40 space-y-2">
              <Cpu className="h-6 w-6 text-secondary mx-auto" />
              <h4 className="font-semibold text-sm">Biotech & AI Integration</h4>
              <p className="text-xs text-muted-foreground">Bioinformatics tools for rapid compound screening.</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/40 space-y-2">
              <GraduationCap className="h-6 w-6 text-primary mx-auto" />
              <h4 className="font-semibold text-sm">Academic Collaborations</h4>
              <p className="text-xs text-muted-foreground">Joint clinical research with premier Sri Lankan universities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Team */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Users className="h-4 w-4" />
              <span>Scientific Advisory & Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Multidisciplinary Team
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our multidisciplinary team brings together decades of expertise in Ayurvedic medicine, cell biology, food science, and marketing — ensuring every product is both scientifically sound and deeply rooted in tradition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => {
              const cleaned = member.name.replace(/(Dr\.|Prof\.)\s*/g, "").trim();
              const parts = cleaned.split(/\s+/).filter(Boolean);
              const firstChar = parts[0]?.replace(/[^a-zA-Z]/g, "")[0] || "";
              const lastChar = parts[parts.length - 1]?.replace(/[^a-zA-Z]/g, "")[0] || "";
              const initials = (firstChar + lastChar).toUpperCase() || "DR";

              return (
                <div 
                  key={index} 
                  className="group rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center font-serif font-bold text-lg border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0 shadow-inner">
                        {initials}
                      </div>
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-secondary/15 text-amber-700 border border-secondary/25 flex items-center gap-1 text-right">
                        <Award className="h-3 w-3 text-secondary shrink-0" />
                        <span>{member.role}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
