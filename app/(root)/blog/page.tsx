"use client";

import { useState } from "react";
import { blogPosts } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search,CalendarIcon, Clock, } from "lucide-react";

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredPosts = blogPosts.filter((post) => {
        const isCategoryMatch = selectedCategory === "all" || post.category === selectedCategory;
        const isSearchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        return isCategoryMatch && isSearchMatch;
    });

    const featuredPost = blogPosts.find((post) => post.featured);
  
    return (
        <div>
        <section className="relative py-16">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          </div>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Our Stories</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                News, updates, and stories from our work in South Sudan.
              </p>
            </div>
        </section>
  
        {featuredPost && (
          <section className="py-16">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-xl">
                <div className="grid gap-6 md:grid-cols-5 md:gap-12">
                  <div className="relative aspect-video md:col-span-3 md:aspect-auto md:h-full">
                    <Image 
                      src={featuredPost.image}
                      alt={featuredPost.title} 
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center md:col-span-2">
                    <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium capitalize text-primary">
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-4 line-clamp-3 text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                      <Button asChild className="bg-primary text-white hover:bg-primary/90">
                        <Link href={`/blog/${featuredPost.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
          </section>
        )}
  
        <section className="py-16">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
              <Tabs 
                value={selectedCategory} 
                onValueChange={setSelectedCategory}
                className="w-full md:w-auto"
              >
                <TabsList className="grid w-full grid-cols-2 gap-2 md:flex md:w-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="health">Health</TabsTrigger>
                  <TabsTrigger value="peace">Peace</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search"
                  placeholder="Search posts..." 
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
        </section>
  
        <section className="py-16">
            {filteredPosts.length > 0 ? (
              <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image 
                        src={post.image}
                        alt={post.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium capitalize text-primary">
                          {post.category}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="mb-2 line-clamp-2 text-xl font-semibold">
                        {post.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {post.readTime}
                        </div>
                        <Button asChild variant="link" className="h-auto p-0 text-primary">
                          <Link href={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-3xl rounded-lg bg-muted p-8 text-center">
                <h3 className="mb-2 text-xl font-semibold">No posts found</h3>
                <p className="text-muted-foreground">
                  No posts match your current search criteria. Try adjusting your search or filter.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchQuery('')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
        </section>
  
        <section className="bg-muted/30 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Stay updated with our latest news, stories, and opportunities to get involved.
              </p>
              <div className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1"
                />
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
        </section>
      </div>
    )
}


