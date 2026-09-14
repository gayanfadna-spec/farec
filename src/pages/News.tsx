
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";






const MOCK_NEWS = [
  {
    id: "1",
  
    date: "September 10, 2026",
    excerpt: "We are thrilled to announce a comprehensive MOU with the University of Ruhuna to expand our clinical trials on metabolic syndromes...",
    category: "Press Release"
  },
  {
    id: "2",
  
    date: "August 24, 2026",
    excerpt: "Our recent lab results show a 40% higher yield of asiaticoside using our proprietary new extraction protocol...",
    category: "Research Update"
  },
  {
    id: "3",
  
    date: "August 05, 2026",
    excerpt: "Join our lead researchers for a deep dive into the methodology of standardizing complex polyherbal formulations.",
    category: "Event"
  }
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-foreground/20 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
            <span>Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-balance mx-auto">
            News & Insights
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Stay updated with the latest breakthroughs, publications, and events from our research center.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_NEWS.map((news) => (
              <Card key={news.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    {news.category}
                  </div>
                  <CardTitle className="line-clamp-2 leading-snug">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-3 text-sm">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mt-4">
                    <Calendar className="h-3 w-3 mr-1" /> {news.date}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between" asChild>
                    <Link to={`/news/${news.id}`}>
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
