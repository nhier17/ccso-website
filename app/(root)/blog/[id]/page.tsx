import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarIcon, Clock, Facebook, Linkedin, Twitter, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { blogPosts } from "@/constants";


const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const postId = Number(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div>
    <section className="relative py-16">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-black/60 to-black/30"></div>
        <Image 
          src={post.image}
          alt={post.title} 
          fill
          className="-z-10 object-cover"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <Link 
            href="/blog" 
            className="mb-6 inline-flex items-center text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
          <div className="mb-4 flex items-center justify-center space-x-2 text-sm text-white/80">
            <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium capitalize">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        </div>
      </div>
    </section>

    <section className="py-12">
        <div className="mx-auto max-w-3xl">
          <div className="sticky top-24 float-left hidden -translate-x-16 flex-col space-y-4 pr-8 md:flex">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Copy link</span>
            </Button>
          </div>
          
          <div className="mb-8 flex space-x-2 md:hidden">
            <Button variant="outline" size="sm" className="flex-1">
              <Facebook className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Twitter className="mr-2 h-4 w-4" />
              Tweet
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          <div className="mt-12 flex flex-wrap items-center space-x-2">
            <span className="text-sm font-medium">Tags:</span>
            <Link 
              href={`/blog?category=${post.category}`}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium capitalize transition-colors hover:bg-muted/80"
            >
              {post.category}
            </Link>
            <Link 
              href="/blog?tag=south-sudan"
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium transition-colors hover:bg-muted/80"
            >
              South Sudan
            </Link>
            <Link 
              href="/blog?tag=community"
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium transition-colors hover:bg-muted/80"
            >
              Community
            </Link>
          </div>
        </div>
    </section>

    <section className="py-12">
        <div className="mx-auto max-w-3xl rounded-xl bg-primary p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Support Our Mission</h2>
          <p className="mb-8 text-lg opacity-90">
            Help us continue bringing positive change to communities across South Sudan.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-primary-foreground/10">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
    </section>
  </div>
  )
}

export default BlogDetailsPage