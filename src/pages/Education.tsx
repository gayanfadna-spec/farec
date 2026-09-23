
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Presentation, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";






export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Dark/Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/education_hero.jpg" 
            alt="Education and Training" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-950/20 to-slate-950/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 text-amber-300">
            <span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
            <span>Knowledge Sharing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg text-balance mx-auto">
            Education & Training
          </h1>
          <p className="text-lg md:text-xl text-white/95 drop-shadow-md font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Bridging the knowledge gap through continuous learning, specialized workshops, and academic partnerships.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Academic Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  In collaboration with top universities, we offer specialized short courses on Ayurvedic pharmacology, modern extraction techniques, and clinical trial design for traditional medicine.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Certificate in Botanical Extraction</li>
                  <li>Advanced Diploma in Phytochemistry</li>
                  <li>Clinical Research Methodology for Ayurveda</li>
                </ul>
                <div className="pt-4">
                  <Button variant="outline">View Course Catalog</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Presentation className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Workshops & Seminars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Regular seminars designed for practitioners looking to integrate scientifically validated Ayurvedic solutions into modern practice.
                </p>
                <div className="bg-muted p-4 rounded-md flex items-start gap-4">
                  <Calendar className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h4 className="font-medium text-foreground">Upcoming: Standardizing Herbal Formulations</h4>
                    <p className="text-sm">October 15, 2026 • Virtual</p>
                    <Link to="#" className="text-sm text-primary hover:underline mt-2 inline-block">Register Now</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
