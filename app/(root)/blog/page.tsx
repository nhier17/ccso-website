import { stories } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  CalendarIcon, 
  Clock, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Filter,
  BookOpen
} from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

const categories = [
  { value: "all", label: "All Stories" },
  { value: "Emergency", label: "Emergency" },
  { value: "Education", label: "Education" },
  { value: "Peace", label: "Peace" },
  { value: "Agriculture", label: "Agriculture" },
  { value: "Evangelism", label: "Evangelism" },
]

export default async function BlogPage() {
  const selectedCategory = "all";
  const searchQuery = "";


  // Calculate category counts
  const categoryCounts = categories.map(cat => {
    if (cat.value === "all") return { ...cat, count: stories.length };
    const count = stories.filter(story => story.category === cat.value).length;
    return { ...cat, count };
  });

  const storyList = stories
    .filter(story => selectedCategory === "all" || story.category === selectedCategory)
    .filter(story =>
      story.title.toLowerCase().includes(searchQuery) ||
      story.excerpt.toLowerCase().includes(searchQuery) ||
      story.location?.toLowerCase().includes(searchQuery)
    );

  const featuredStory = storyList[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-48 -translate-x-48" />
        
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <Badge className="mb-6 px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
            Impact Stories
          </Badge>
          <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
            Stories of Impact
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 leading-relaxed">
            Discover the transformative journeys, challenges overcome, and lives changed through our humanitarian work in South Sudan.
          </p>
          
          <div className="mx-auto max-w-2xl">
            <form className="relative">
              <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                name="q"
                placeholder="Search stories by title, location, or keywords..."
                className="h-14 pl-14 pr-4 text-lg rounded-2xl border-gray-300 shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                defaultValue={searchQuery}
              />
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-xl"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {featuredStory && (
        <section className="section-padding">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Story</h2>
              </div>
              <Badge variant="outline" className="px-3 py-1.5 text-primary border-primary/30">
                Latest Report
              </Badge>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 " />
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={featuredStory.coverImage}
                    alt={featuredStory.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative z-20 flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-white to-gray-50">
                  <Badge className="mb-4 w-fit px-4 py-1.5 bg-primary/10 text-primary border-0">
                    {featuredStory.category}
                  </Badge>
                  <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {featuredStory.title}
                  </h2>
                  <p className="mb-6 text-gray-600 leading-relaxed line-clamp-3">
                    {featuredStory.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {featuredStory.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {format(new Date(featuredStory.date), "MMMM d, yyyy")}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredStory.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button 
                      asChild 
                      className="group/btn px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      <Link href={`/blog/${featuredStory.slug}`} className="flex items-center gap-2">
                        Read Full Story
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    {featuredStory.impact?.beneficiaries && (
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Direct Impact</div>
                        <div className="text-2xl font-bold text-primary">
                          {featuredStory.impact.beneficiaries.toLocaleString()}+
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse Categories</h2>
              <p className="text-gray-600">Filter stories by program area</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="h-4 w-4" />
              <span>{stories.length} stories found</span>
            </div>
          </div>

          <div className="mb-12">
          <Tabs value={selectedCategory} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
              {categories.map((cat) => (
                <TabsTrigger
                    key={cat.value}
                    value={cat.value}
                    asChild
                    className={`px-6 py-3 rounded-xl border data-[state=active]:shadow-lg transition-all duration-300 ${
                      selectedCategory === cat.value 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-white border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                    }`}>
                  <Link href={`/blog?category=${cat.value}`}>
                    {cat.label}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <Card 
                key={story.slug} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-white to-gray-50 p-0"
              >
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 border-0 shadow-sm">
                    {story.category}
                  </Badge>
                </div>
                
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
              
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon className="h-3 w-3" />
                      {format(new Date(story.date), "MMM d, yyyy")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {story.readTime}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="mb-6 text-gray-600 line-clamp-3 text-sm leading-relaxed">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{story.location}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${story.slug}`}
                      className="group/link flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {stories.length === 0 && (
            <div className="section-padding text-center">
              <BookOpen className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No stories found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-xl"
              >
                <Link href="/blog">
                  Clear Filters
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}