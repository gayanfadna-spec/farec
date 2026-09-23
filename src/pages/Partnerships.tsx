
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Factory, HeartPulse, Sparkles, Sprout, TestTube2, Network } from "lucide-react";






const INDUSTRIES = [
  { name: "Wellness Brands", icon: HeartPulse },
  { name: "Nutraceutical Companies", icon: TestTube2 },
  { name: "Cosmetic Companies", icon: Sparkles },
  { name: "Herbal Product Manufacturers", icon: Sprout },
  { name: "Pharmaceutical Support Sectors", icon: Factory },
  { name: "Startups", icon: Lightbulb },
  { name: "Universities", icon: GraduationCap },
  { name: "Research Organizations", icon: Microscope },
  { name: "Healthcare Innovators", icon: Network },
  { name: "Export-Oriented Businesses", icon: Globe },
];

import { Globe, GraduationCap, Lightbulb } from "lucide-react";

const WHY_PARTNER = [
  "Scientific Expertise",
  "End-to-End Solutions",
  "Innovation-Driven Approach",
  "Research Collaboration Network",
  "Flexible Service Models",
  "Commitment to Quality",
];

const COLLABORATIONS = [
  "Clinical research",
  "Scientific validation",
  "Joint innovation projects",
  "Academic partnerships",
  "Product efficacy studies",
  "Knowledge transfer",
];

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Dark/Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/partnerships_hero.jpg" 
            alt="Collaborations and Partnerships" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-950/20 to-slate-950/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 text-amber-300">
            <span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
            <span>Global Network</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg text-balance mx-auto">
            Collaborations & Partnerships
          </h1>
          <p className="text-lg md:text-xl text-white/95 drop-shadow-md font-light leading-relaxed max-w-2xl mx-auto text-balance">
            FAREC collaborates with leading universities and research institutions to strengthen scientific validation and innovation.
          </p>
        </div>
      </section>

      {/* Research Collaborations */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Research Collaborations</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                These collaborations help ensure scientific credibility, safety, and innovation excellence. Our collaborative activities include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {COLLABORATIONS.map((collab, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-medium text-foreground">{collab}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="bg-secondary/10 border-none shadow-none text-center p-6">
                  <h3 className="font-serif font-bold text-4xl text-secondary mb-2">10+</h3>
                  <p className="text-sm text-muted-foreground">University Partners</p>
                </Card>
                <div className="h-40 rounded-xl bg-[url('/images/partnership_img1.jpg')] bg-cover bg-center" />
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-40 rounded-xl bg-[url('/images/partnership_img2.jpg')] bg-cover bg-center" />
                <Card className="bg-primary/10 border-none shadow-none text-center p-6">
                  <h3 className="font-serif font-bold text-4xl text-primary mb-2">50+</h3>
                  <p className="text-sm text-muted-foreground">Joint Projects</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {INDUSTRIES.map((industry, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <industry.icon className="h-8 w-8 text-primary" />
                  <span className="font-medium text-sm">{industry.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with FAREC */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-12">Why Partner with FAREC?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {WHY_PARTNER.map((reason, index) => (
              <div key={index} className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-sm">
                {reason}
              </div>
            ))}
          </div>
          <Button size="lg" className="h-12 px-8">
            <Link to="/contact" className="flex items-center">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
