import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";






const MOCK_NEWS = [
  {
    id: "1",
    title: "MOU with University of Ruhuna",
    date: "September 10, 2026",
    excerpt: "We are thrilled to announce a comprehensive MOU with the University of Ruhuna to expand our clinical trials on metabolic syndromes...",
    category: "Press Release"
  },
  {
    id: "2",
    title: "40% Higher Yield in Extraction",
    date: "August 24, 2026",
    excerpt: "Our recent lab results show a 40% higher yield of asiaticoside using our proprietary new extraction protocol...",
    category: "Research Update"
  },
  {
    id: "3",
    title: "Seminar: Standardizing Formulations",
    date: "August 05, 2026",
    excerpt: "Join our lead researchers for a deep dive into the methodology of standardizing complex polyherbal formulations.",
    category: "Event"
  }
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Dark/Navy Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/news_insights.jpg"
            alt="News and Insights"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-950/20 to-slate-950/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 text-amber-300">
            <span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
            <span>Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-lg text-balance mx-auto">
            News & Insights
          </h1>
          <p className="text-lg md:text-xl text-white/95 drop-shadow-md font-light leading-relaxed max-w-2xl mx-auto text-balance">
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
