import { Target, Eye, ShieldCheck, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      {/* Multidisciplinary Team */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <Users className="h-4 w-4" />
              <span>Our Experts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Multidisciplinary Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
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
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/60 hover:border-primary/40 flex flex-col justify-between">
                  <CardHeader className="space-y-3 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-base border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                        {initials}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/25 flex items-center gap-1.5 text-right">
                        <Award className="h-3.5 w-3.5 text-primary shrink-0" />
                        {member.role}
                      </span>
                    </div>
                    <CardTitle className="text-xl pt-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
