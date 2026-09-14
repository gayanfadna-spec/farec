
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Beaker, Factory, GraduationCap, Lightbulb, FileSearch } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary/5 py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-10" />
          <div className="w-full h-full bg-[url('/images/hero_bg.jpg')] bg-cover bg-center opacity-40" />
        </div>
        
        <div className="container relative z-20 px-4 md:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span>FAREC: Fadna Research Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
              Transforming traditional <span className="text-primary italic">Ayurvedic</span> knowledge into scientifically validated <span className="text-secondary">wellness solutions</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Operating at the intersection of nature, science, technology, and commercialization to develop innovative products for the nutraceutical, cosmeceutical, and healthcare industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-base">
                <Link to="/research" className="flex items-center">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm">
                <Link to="/contact">Collaborate With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section (What We Do) */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">What We Do</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              FAREC is actively involved in research, product innovation, scientific validation, education, and industrial collaboration related to natural health and wellness products. Our primary focus is on developing scientifically supported herbal and nutraceutical formulations that combine traditional medicinal wisdom with modern research methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-muted/30 transition-all hover:bg-muted/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <FileSearch className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Contract Research (CRO)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Services including formulation optimization, new business concept development, scientific validation, laboratory testing, and product efficacy studies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-muted/30 transition-all hover:bg-muted/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Factory className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Contract Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Private-label product development support for herbal, nutraceutical, cosmetic, wellness, and health supplement products.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-muted/30 transition-all hover:bg-muted/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Education & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Programs including workshops, scientific seminars, industrial training, research mentorship, and product development training.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-muted/30 transition-all hover:bg-muted/50 lg:col-span-3">
              <CardHeader className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4 md:mb-0">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">Scientific Consultancy</CardTitle>
                  <CardDescription className="text-base max-w-4xl">
                    End-to-end technical and scientific support for researchers, entrepreneurs, manufacturers, and wellness brands to transform innovative concepts into commercially viable, science-backed products.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats / CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Ready to Innovate?</h2>
          <p className="text-lg text-primary-foreground/80">
            Partner with FAREC to bring your innovative wellness concepts to life with rigorous scientific backing.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
