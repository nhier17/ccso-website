"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Clock, Award, Shield } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
import { leaders, history } from "@/constants";
import { Card, CardContent } from "@/components/ui/card"; 

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const sectionRef = useRef<HTMLElement[]>([]);

  sectionRef.current = [];

  const addToRefs = (el:HTMLElement) => {
    if(el && !sectionRef.current.includes(el)) {
      sectionRef.current.push(el);
    }
  }

  useGSAP(() => {
    sectionRef.current.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
    gsap.from(".about-heading", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-heading",
        start: "top 80%",
      },
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 85%",
      },
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
      },
    });

  }, []);

  return (
    <div>
      <section className="relative py-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="absolute inset-0 bg-[url('/images/relief.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">About CCSO</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Learn how CCSO is restoring dignity, rebuilding communities, and responding to urgent humanitarian needs across South Sudan.
            </p>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-16">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
            <div ref={imgRef} className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
              <Image 
                src="/images/leader2.jpg"
                alt="CCSO founder" 
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
            <div ref={textRef} className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Who We Are
                </h3>
                <p>
                  CCSO was founded in response to the pressing humanitarian and development
                  needs of communities in Lakes State, South Sudan. Despite the establishment
                  of the Republic of South Sudan, many regions continue to face limited access
                  to basic services due to fragile institutions and prolonged hardship.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Why We Began
                </h3>
                <p>
                  Recognizing these challenges, CCSO was initiated by Bishop Joseph Maker Atot,
                  Bishop of Pacong Diocese and a respected community leader in Rumbek East
                  County. His vision was to establish a locally rooted organization capable of
                  driving sustainable development and empowering underserved communities in
                  partnership with local authorities.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Our Commitment Today
                </h3>
                <p>
                  Following extensive consultations with county authorities, community
                  leaders, and the South Sudanese diaspora, CCSO was formally established as a
                  non-governmental organization. Today, we implement programs in agriculture,
                  education, health, and peacebuilding—guided by Christian values of
                  compassion, service, and dignity for all.
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>

      <section ref={addToRefs} className="bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Foundation</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Our work is guided by clear principles that shape every program and partnership.
            </p>
          </div>

          <Tabs defaultValue="mission" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <HeartHandshake className="mb-6 h-16 w-16 text-primary/80" />
                <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
                <p className="max-w-2xl text-lg text-muted-foreground">
                  To empower vulnerable communities in South Sudan through sustainable, faith-driven initiatives that promote dignity, self-reliance, and hope for a better future.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="vision" className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <Award className="mb-6 h-16 w-16 text-primary/80" />
                <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>
                <p className="max-w-2xl text-lg text-muted-foreground">
                To realize democratic, peaceful and progressive South Sudan wherein all people have equal and 
                just opportunities to realize all-round human development without any form of discrimination. 
                </p>
              </div>
            </TabsContent>

            <TabsContent value="values" className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-muted/50 p-6">
                  <h4 className="mb-2 text-lg font-medium">Equality</h4>
                  <p className="text-muted-foreground">
                    We intend to promote a society in which everyone is treated equally without any 
                    discrimination on grounds of ethnicity, age, religion or disability. 
                  </p>
                </div>
                
                <div className="rounded-lg bg-muted/50 p-6">
                  <h4 className="mb-2 text-lg font-medium">Transparency and Accountability</h4>
                  <p className="text-muted-foreground">
                  CCSO believes in a society wherein people conduct themselves in a transparent, honest, 
                  straightforward and truthful way to ensure accountability.  To this extent, CCSO will incorporate 
                  these values in its own functioning and will operate in a transparent manner and will be totally 
                  accountable to the community with which it works and to all other stakeholders. 
                  </p>
                </div>
                
                <div className="rounded-lg bg-muted/50 p-6">
                  <h4 className="mb-2 text-lg font-medium">Grassroots participation</h4>
                  <p className="text-muted-foreground">
                    We believe in facilitating the promotion of a society wherein the values of dignity and self-respect of the 
                    people are restored.  CCSO will attain this by encouraging community participation and 
                    involvement of all people at the grassroots level in the decision-making processes.
                  </p>
                </div>
                
                <div className="rounded-lg bg-muted/50 p-6">
                  <h4 className="mb-2 text-lg font-medium">Indigenous wisdom </h4>
                  <p className="text-muted-foreground">
                  CCSO believes that the local people, although they may be vulnerable due to loss of some 
                  livelihood assets, have very valuable experience and wisdom that needs to be recognised and 
                  complemented to further enhance their use.  The existing skills and technologies could be 
                  mobilised and used as a base for any further sustainable development people may think to be 
                  disseminated or transferred through the community members 
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
      </section>
      
      <section ref={addToRefs} className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Meet the dedicated individuals leading our mission in South Sudan.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
            {leaders.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image}
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="mb-3 text-sm text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>

     <section ref={addToRefs} className="bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-primary"></div>
            <p className="mb-12 text-lg text-muted-foreground">
              Key milestones in our organization's history.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative after:absolute after:left-1/2 after:top-0 after:h-full after:w-0.5 after:-translate-x-1/2 after:bg-border">
              {history.map((event, index) => (
                <div key={index} className={`relative mb-8 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-1/2 top-0 z-10 -mt-1 -translate-x-1/2 transform">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                  <Card className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    <CardContent className="p-6">
                      <span className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-sm font-semibold text-primary">
                        {event.year}
                      </span>
                      <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section ref={addToRefs} className="py-16">
      <div className="rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Accountability & Transparency
            </h2>
            <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
              We are committed to accountability, integrity, and responsible stewardship. Our financial records are independently reviewed, and we share regular impact updates so donors and communities clearly understand how resources are used.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Programs & Community Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Operations & Administration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">5%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Fundraising & Outreach</div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-center mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-primary text-white hover:bg-white hover:text-primary transition-all">
              <Link href="/donate">Support Our Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary border-[2px] text-primary hover:bg-primary hover:text-white transition-all">
              <Link href="/get-involved">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
