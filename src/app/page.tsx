"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin, Users, Globe } from "lucide-react"

export default function Home() {
  const carouselImages = [
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Athletes competing in a tournament",
      title: "Building Champions",
      description: "Supporting athletes at every level of competition",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Community sports event",
      title: "Community Impact",
      description: "Creating positive change through sports",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "International sports competition",
      title: "Global Excellence",
      description: "Representing our nation on the world stage",
    },
  ]

  // Carousel state and functions
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }, [carouselImages.length])

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }, [carouselImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [next])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Carousel Section */}
        <section className="relative">
          <div className="relative w-full overflow-hidden">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-10">
                    <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 animate-fade-up">{image.title}</h2>
                    <p className="text-white/90 max-w-xl text-sm md:text-base animate-fade-up">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background/80 backdrop-blur-sm hover:bg-background/90 hover:scale-110 h-10 w-10"
              onClick={prev}
            >
              <ChevronRight className="h-6 w-6 rotate-180" />
              <span className="sr-only">Previous slide</span>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background/80 backdrop-blur-sm hover:bg-background/90 hover:scale-110 h-10 w-10"
              onClick={next}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-sport-gold" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="organization" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="section-title">The Organization</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 1985, our Sports Federation has been dedicated to promoting excellence in sports, fostering
                  talent development, and creating opportunities for athletes at all levels. We are committed to the
                  highest standards of integrity, inclusivity, and sportsmanship.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2 hover-scale">
                    <div className="mt-1 bg-sport-blue/10 p-2 rounded-full">
                      <Users className="h-4 w-4 text-sport-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Leadership</h3>
                      <p className="text-sm text-muted-foreground">
                        Guided by experienced professionals and former athletes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 hover-scale">
                    <div className="mt-1 bg-sport-green/10 p-2 rounded-full">
                      <Globe className="h-4 w-4 text-sport-green" />
                    </div>
                    <div>
                      <h3 className="font-medium">Global Network</h3>
                      <p className="text-sm text-muted-foreground">
                        Connected with international sports bodies and federations
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/organization">
                  <button className="mt-6 btn-primary bg-sport-blue hover:bg-sport-blue/90 group">
                    Learn More <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg animate-on-scroll hover-glow">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Sports Federation headquarters"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="py-16 md:py-24 bg-gradient-to-b from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="section-title">What We Do</h2>
              <p className="section-description">
                Our federation works across multiple domains to promote sports excellence, community development, and
                international representation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
              <div className="bg-background p-6 rounded-lg shadow-sm card-hover border border-transparent hover:border-sport-blue/20">
                <div className="bg-sport-blue/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sport-blue"
                  >
                    <path d="M18 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                    <path d="m17 13-3.9 3.9c-.9.9-2.4.9-3.3 0l-3.82-3.82c-.38-.38-.38-1 0-1.38l.41-.42c.38-.38 1.02-.38 1.4 0l2.79 2.79c.2.2.51.2.71 0L17 9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Athlete Development</h3>
                <p className="text-muted-foreground">
                  Comprehensive training programs, scholarships, and support systems for athletes at all levels.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm card-hover border border-transparent hover:border-sport-green/20">
                <div className="bg-sport-green/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sport-green"
                  >
                    <path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                    <path d="M12 17a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" />
                    <line x1="12" x2="12" y1="2" y2="9" />
                    <line x1="4.93" x2="7.76" y1="7.93" y2="10.76" />
                    <line x1="19.07" x2="16.24" y1="7.93" y2="10.76" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Event Organization</h3>
                <p className="text-muted-foreground">
                  Hosting national and international competitions, tournaments, and exhibition matches.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm card-hover border border-transparent hover:border-sport-purple/20">
                <div className="bg-sport-purple/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sport-purple"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Programs</h3>
                <p className="text-muted-foreground">
                  Grassroots initiatives, youth engagement, and sports for development projects.
                </p>
              </div>
            </div>
            <div className="text-center mt-10 animate-on-scroll">
              <Link href="/what-we-do">
                <button className="btn-secondary group">
                  View All Programs{" "}
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="footprint" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="section-title">Our Footprint</h2>
              <p className="section-description">
                With a presence across the country and international connections, our impact extends far beyond local
                communities.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden mb-8 shadow-xl animate-on-scroll hover-glow">
              <Image
                src="/placeholder.svg?height=1000&width=2000"
                alt="Map showing federation's presence"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2 animate-fade-up">Global Reach</h3>
                  <p className="max-w-xl animate-fade-up">
                    Present in 45 cities nationwide with international partnerships in 20 countries
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover-scale">
                <div className="bg-sport-red/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-sport-red" />
                </div>
                <div>
                  <h4 className="font-medium text-xl">45</h4>
                  <p className="text-sm text-muted-foreground">Cities with active programs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover-scale">
                <div className="bg-sport-blue/10 p-3 rounded-full">
                  <Users className="h-5 w-5 text-sport-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-xl">100,000+</h4>
                  <p className="text-sm text-muted-foreground">Athletes supported annually</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover-scale">
                <div className="bg-sport-green/10 p-3 rounded-full">
                  <Globe className="h-5 w-5 text-sport-green" />
                </div>
                <div>
                  <h4 className="font-medium text-xl">20</h4>
                  <p className="text-sm text-muted-foreground">International partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="get-involved" className="py-16 md:py-24 bg-gradient-to-b from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="section-title">Get Involved</h2>
                <p className="text-muted-foreground mb-6">
                  There are many ways to be part of our sports community, whether you're an athlete, coach, volunteer,
                  or supporter.
                </p>
                <div className="space-y-4 stagger-children">
                  <div className="bg-white p-4 rounded-lg shadow-sm card-hover border border-transparent hover:border-sport-blue/20">
                    <h3 className="font-medium mb-2 text-sport-blue">Athletes</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Join training programs, register for competitions, and access resources.
                    </p>
                    <button className="btn-secondary bg-sport-blue/10 hover:bg-sport-blue/20 text-sport-blue">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm card-hover border border-transparent hover:border-sport-green/20">
                    <h3 className="font-medium mb-2 text-sport-green">Coaches & Officials</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Certification programs, professional development, and job opportunities.
                    </p>
                    <button className="btn-secondary bg-sport-green/10 hover:bg-sport-green/20 text-sport-green">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm card-hover border border-transparent hover:border-sport-purple/20">
                    <h3 className="font-medium mb-2 text-sport-purple">Volunteers & Supporters</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Event volunteering, community programs, and donation opportunities.
                    </p>
                    <button className="btn-secondary bg-sport-purple/10 hover:bg-sport-purple/20 text-sport-purple">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-on-scroll">
                <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md hover-scale">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Athlete training"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md hover-scale">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Coach with team"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md hover-scale">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Volunteers at event"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md hover-scale">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Community program"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="section-title">Resources</h2>
              <p className="section-description">Access tools, guides, and materials to support your sports journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
              <div className="bg-muted p-6 rounded-lg shadow-sm card-hover">
                <h3 className="text-xl font-bold mb-3 text-sport-blue">Training Materials</h3>
                <p className="text-muted-foreground mb-4">
                  Coaching guides, training plans, and technical resources for athletes and coaches.
                </p>
                <button className="btn-primary bg-sport-blue hover:bg-sport-blue/90 w-full">Access Library</button>
              </div>
              <div className="bg-muted p-6 rounded-lg shadow-sm card-hover">
                <h3 className="text-xl font-bold mb-3 text-sport-green">Event Calendar</h3>
                <p className="text-muted-foreground mb-4">
                  Upcoming competitions, training camps, workshops, and community events.
                </p>
                <button className="btn-primary bg-sport-green hover:bg-sport-green/90 w-full">View Calendar</button>
              </div>
              <div className="bg-muted p-6 rounded-lg shadow-sm card-hover">
                <h3 className="text-xl font-bold mb-3 text-sport-purple">Publications</h3>
                <p className="text-muted-foreground mb-4">
                  Research papers, annual reports, newsletters, and sports science publications.
                </p>
                <button className="btn-primary bg-sport-purple hover:bg-sport-purple/90 w-full">
                  Browse Publications
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="section-title">Contact Us</h2>
              <p className="section-description">Have questions or need assistance? Our team is here to help you.</p>
              <div className="mt-6">
                <Link href="/contact">
                  <button className="btn-primary bg-sport-blue hover:bg-sport-blue/90 h-11 px-8 group">
                    Get in Touch{" "}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="section-title">Our Partners</h2>
              <p className="section-description">
                We collaborate with leading organizations to enhance our impact and reach.
              </p>
              <div className="mt-6">
                <Link href="/partners">
                  <button className="btn-primary bg-sport-blue hover:bg-sport-blue/90 h-11 px-8 group">
                    View All Partners{" "}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center stagger-children">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-muted rounded-lg p-6 flex items-center justify-center h-32 hover-scale">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner ${i}`}
                    alt={`Partner ${i}`}
                    width={150}
                    height={75}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

