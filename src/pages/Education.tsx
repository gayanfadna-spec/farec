
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Presentation, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";






export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-foreground/20 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
            <span>Knowledge Sharing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-balance mx-auto">
            Education & Training
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed max-w-2xl mx-auto text-balance">
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
