"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import C1 from "../../public/C1.jpeg"
import C2 from  "../../public/C2.jpg"
import QR from "../../public/QR.png"
import M1 from "../../public/M1.jpeg"
import M2 from "../../public/M2.jpeg"
import M3 from "../../public/M3.jpeg"
import M4 from "../../public/M4.jpeg"


import { ChevronRight } from "lucide-react"

export default function Home() {
  const members = [
    { id: 1, image: M1, name: "John Doe" },
    { id: 2, image: M2, name: "Jane Smith" },
    { id: 3, image: M3, name: "Alice Brown" },
    { id: 4, image: M4, name: "Ritik Saini" },
  ];
  const carouselImages = [
    {
      src: C1,
      alt: "Athletes competing in a tournament",
      title: "Building Champions",
      description: "Supporting athletes at every level of competition",
    },
    {
      src: C2,
      alt: "Community sports event",
      title: "Community Impact",
      description: "Creating positive change through sports",
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

        

        <section id="what-we-do" className="py-16 md:py-24 bg-gradient-to-b from-white to-muted">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 animate-on-scroll">
      <h2 className="section-title text-4xl font-bold text-sport-blue">What We Do</h2>
      <p className="section-description text-lg text-muted-foreground mt-2">
        Our federation works across multiple domains to promote sports excellence, community development, and international representation.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
      <div className="bg-background p-8 rounded-xl shadow-lg card-hover border border-transparent hover:border-sport-blue/40 transition-transform hover:scale-105">
        <div className="bg-sport-blue/20 w-14 h-14 flex items-center justify-center rounded-full mb-4">
          <svg className="text-sport-blue" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
            <path d="m17 13-3.9 3.9c-.9.9-2.4.9-3.3 0l-3.82-3.82c-.38-.38-.38-1 0-1.38l.41-.42c.38-.38 1.02-.38 1.4 0l2.79 2.79c.2.2.51.2.71 0L17 9" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-sport-blue">Athlete Development</h3>
        <p className="text-muted-foreground">
          Comprehensive training programs, scholarships, and support systems for athletes at all levels.
        </p>
      </div>
      <div className="bg-background p-8 rounded-xl shadow-lg card-hover border border-transparent hover:border-sport-green/40 transition-transform hover:scale-105">
        <div className="bg-sport-green/20 w-14 h-14 flex items-center justify-center rounded-full mb-4">
          <svg className="text-sport-green" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
            <path d="M12 17a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" />
            <line x1="12" x2="12" y1="2" y2="9" />
            <line x1="4.93" x2="7.76" y1="7.93" y2="10.76" />
            <line x1="19.07" x2="16.24" y1="7.93" y2="10.76" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-sport-green">Event Organization</h3>
        <p className="text-muted-foreground">
          Hosting national and international competitions, tournaments, and exhibition matches.
        </p>
      </div>
      <div className="bg-background p-8 rounded-xl shadow-lg card-hover border border-transparent hover:border-sport-purple/40 transition-transform hover:scale-105">
        <div className="bg-sport-purple/20 w-14 h-14 flex items-center justify-center rounded-full mb-4">
          <svg className="text-sport-purple" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-sport-purple">Community Programs</h3>
        <p className="text-muted-foreground">
          Grassroots initiatives, youth engagement, and sports for development projects.
        </p>
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
                  There are many ways to be part of our sports community, whether you&apos;re an athlete, coach, volunteer,
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
              <div className="grid grid-cols-1 animate-on-scroll text-center">
  <h2 className="text-2xl font-bold mb-4">Extend a Helping Hand—Donate Today!</h2>
  <div className="relative h-[400px] w-[600px] rounded-lg overflow-hidden shadow-md hover-scale mx-auto">
    <Image
      src={QR}
      alt="Athlete training"
      fill
      className=" transition-transform duration-500 hover:scale-110"
    />
  </div>
</div>

            </div>
          </div>
        </section>

        <section id="resources" className="py-16 md:py-0 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 animate-on-scroll">
      <h2 className="section-title text-3xl font-extrabold text-gray-900">Resources</h2>
      <p className="section-description mt-2 text-gray-600">
        Access tools, guides, and materials to support your sports journey.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
      {[
        {
          title: "Training Materials",
          description:
            "Coaching guides, training plans, and technical resources for athletes and coaches.",
          color: "from-blue-500 to-blue-700",
          btnColor: "bg-blue-600 hover:bg-blue-700",
        },
        {
          title: "Event Calendar",
          description:
            "Upcoming competitions, training camps, workshops, and community events.",
          color: "from-green-500 to-green-700",
          btnColor: "bg-green-600 hover:bg-green-700",
        },
        {
          title: "Publications",
          description:
            "Research papers, annual reports, newsletters, and sports science publications.",
          color: "from-purple-500 to-purple-700",
          btnColor: "bg-purple-600 hover:bg-purple-700",
        },
      ].map((resource, index) => (
        <div
          key={index}
          className={`relative p-6 rounded-xl shadow-lg bg-white/70 backdrop-blur-md border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
        >
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${resource.color} opacity-20`}
          ></div>
          <h3 className="relative text-xl font-extrabold mb-3 text-gray-900">
            {resource.title}
          </h3>
          <p className="relative text-gray-700 mb-4">{resource.description}</p>
          <button
            className={`relative ${resource.btnColor} text-white font-semibold py-2 px-4 rounded-md w-full transition-all duration-300`}
          >
            {resource.title === "Training Materials"
              ? "Access Library"
              : resource.title === "Event Calendar"
              ? "View Calendar"
              : "Browse Publications"}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


        

<section id="committee" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="section-title text-3xl font-bold text-gray-900">Committee Members</h2>
          <p className="section-description mt-2 text-gray-600">
            Meet our dedicated committee members who drive our mission forward.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform border border-gray-200"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
      </main>
    </div>
  )
}

