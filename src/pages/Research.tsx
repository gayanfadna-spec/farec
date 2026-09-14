
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";






const EXPERTISE = [
  "Ayurveda-inspired innovations",
  "Herbal product development",
  "Nutraceutical formulation",
  "Cosmeceutical research",
  "Functional food innovation",
  "Wellness product development",
  "Scientific validation of traditional medicine",
  "Research commercialization",
  "Natural ingredient applications",
  "Functional beverage development",
];

const FACILITIES = [
  "Small-scale and large-scale homogenizers",
  "Mechanical stirrers and advanced mixing systems",
  "Viscosity measurement equipment",
  "Skin analysis equipment",
  "Laboratory formulation and stability testing facilities",
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-foreground/20 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
            <span>Innovation Core</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-balance mx-auto">
            Research & Facilities
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed max-w-2xl mx-auto text-balance">
            FAREC is equipped with advanced technical facilities that support research, formulation development, product optimization, testing, and pilot-scale manufacturing activities.
          </p>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXPERTISE.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Facilities & Laboratory Equipment */}
      <section className="py-20 bg-muted/50" id="facilities">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">Technical Facilities & Laboratory Equipment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our advanced technical facilities and laboratory equipment form the backbone of our scientific research. These facilities support everything from initial product development to pilot-scale manufacturing and commercialization activities.
              </p>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Our Technical Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {FACILITIES.map((facility, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-secondary mr-3 shrink-0" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-[url('/images/research_img1.jpg')] bg-cover bg-center rounded-lg min-h-[250px]" />
              <div className="bg-[url('/images/research_img2.jpg')] bg-cover bg-center rounded-lg min-h-[250px] mt-8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
