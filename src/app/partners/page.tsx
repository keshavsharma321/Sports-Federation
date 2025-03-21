"use client"

import Link from "next/link"
import Image from "next/image"
import { Handshake, ExternalLink, ChevronRight } from "lucide-react"

export default function PartnersPage() {
  // Sample partner data
  const partners = [
    {
      id: 1,
      name: "Global Sports Equipment",
      category: "Equipment Supplier",
      description: "Leading provider of high-quality sports equipment for professional athletes and teams worldwide.",
      logo: "/placeholder.svg?height=200&width=400&text=Global Sports",
      website: "#",
      featured: true,
    },
    {
      id: 2,
      name: "Health First Medical",
      category: "Healthcare Partner",
      description:
        "Specialized medical services for athletes, focusing on sports medicine, injury prevention, and rehabilitation.",
      logo: "/placeholder.svg?height=200&width=400&text=Health First",
      website: "#",
      featured: true,
    },
    {
      id: 3,
      name: "Elite Training Academy",
      category: "Training Partner",
      description:
        "State-of-the-art training facilities and programs designed to develop athletic performance at all levels.",
      logo: "/placeholder.svg?height=200&width=400&text=Elite Training",
      website: "#",
      featured: false,
    },
    {
      id: 4,
      name: "SportsTech Innovations",
      category: "Technology Partner",
      description:
        "Cutting-edge technology solutions for performance tracking, analysis, and enhancement in competitive sports.",
      logo: "/placeholder.svg?height=200&width=400&text=SportsTech",
      website: "#",
      featured: false,
    },
    {
      id: 5,
      name: "National University",
      category: "Educational Partner",
      description:
        "Academic programs and scholarships for athletes, combining educational excellence with athletic development.",
      logo: "/placeholder.svg?height=200&width=400&text=National University",
      website: "#",
      featured: false,
    },
    {
      id: 6,
      name: "Community Sports Foundation",
      category: "Community Partner",
      description:
        "Non-profit organization dedicated to making sports accessible to underserved communities and youth programs.",
      logo: "/placeholder.svg?height=200&width=400&text=Community Sports",
      website: "#",
      featured: true,
    },
    {
      id: 7,
      name: "Global Broadcasting Network",
      category: "Media Partner",
      description:
        "Worldwide coverage of sporting events, athlete stories, and federation activities across multiple platforms.",
      logo: "/placeholder.svg?height=200&width=400&text=Global Broadcasting",
      website: "#",
      featured: false,
    },
    {
      id: 8,
      name: "Sports Nutrition Pro",
      category: "Nutrition Partner",
      description:
        "Specialized nutrition products and consultation services designed for optimal athletic performance and recovery.",
      logo: "/placeholder.svg?height=200&width=400&text=Sports Nutrition",
      website: "#",
      featured: false,
    },
  ]

  // Get unique categories for filter
  const categories = ["All", ...new Set(partners.map((partner) => partner.category))]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-sport-blue to-sport-blue/80 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Our Partners</h1>
              <p className="text-white/90 text-lg mb-6">
                We collaborate with leading organizations across various sectors to enhance our impact and provide the
                best support for athletes and sports development.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Featured Partners */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                Featured Partners
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-sport-gold"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partners
                  .filter((p) => p.featured)
                  .map((partner) => (
                    <div
                      key={partner.id}
                      className="bg-white border rounded-lg overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="h-48 bg-gradient-to-r from-sport-blue/5 to-sport-blue/10 flex items-center justify-center p-6">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          width={200}
                          height={100}
                          className="max-h-full object-contain"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-2">
                          <span className="inline-block bg-sport-blue/10 text-sport-blue text-xs font-medium px-2.5 py-0.5 rounded">
                            {partner.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">{partner.name}</h2>
                        <p className="text-muted-foreground mb-4 flex-1">{partner.description}</p>
                        <Link
                          href={partner.website}
                          className="inline-flex items-center text-sm font-medium text-sport-blue hover:underline"
                        >
                          Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* All Partners */}
            <div>
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                All Partners
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-sport-blue"></span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white border rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-48 bg-gradient-to-r from-sport-blue/5 to-sport-blue/10 flex items-center justify-center p-6">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        width={200}
                        height={100}
                        className="max-h-full object-contain"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block bg-sport-blue/10 text-sport-blue text-xs font-medium px-2.5 py-0.5 rounded">
                          {partner.category}
                        </span>
                        {partner.featured && (
                          <span className="inline-block bg-sport-gold/10 text-sport-gold text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                            Featured
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-bold mb-2">{partner.name}</h2>
                      <p className="text-muted-foreground mb-4 flex-1">{partner.description}</p>
                      <Link
                        href={partner.website}
                        className="inline-flex items-center text-sm font-medium text-sport-blue hover:underline"
                      >
                        Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gradient-to-b from-muted to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Become a Partner</h2>
                <p className="text-muted-foreground mb-6">
                  Join our network of partners and contribute to the development of sports excellence. We offer various
                  partnership opportunities tailored to your organization's goals and values.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <div className="mt-1 bg-sport-blue/10 p-2 rounded-full">
                      <Handshake className="h-4 w-4 text-sport-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Strategic Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        Long-term collaborations aligned with our strategic objectives and mission
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <div className="mt-1 bg-sport-green/10 p-2 rounded-full">
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
                        className="h-4 w-4 text-sport-green"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Event Sponsorships</h3>
                      <p className="text-sm text-muted-foreground">
                        Opportunities to sponsor tournaments, championships, and special events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <div className="mt-1 bg-sport-purple/10 p-2 rounded-full">
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
                        className="h-4 w-4 text-sport-purple"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m14.5 9-5 5" />
                        <path d="m9.5 9 5 5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Technical Partnerships</h3>
                      <p className="text-sm text-muted-foreground">
                        Collaboration on equipment, technology, and infrastructure development
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <button className="mt-6 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sport-blue text-white hover:bg-sport-blue/90 h-10 px-4 py-2">
                    Contact Our Partnership Team <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Partnership"
                  alt="Partnership handshake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Partner Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear what our partners have to say about working with the Sports Federation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-sport-blue/5 to-sport-blue/10 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-sport-blue/10 flex items-center justify-center">
                      <span className="text-sport-blue font-bold">GS</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">CEO, Global Sports Equipment</p>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground">
                  "Our partnership with the Sports Federation has been instrumental in developing new equipment
                  standards that benefit athletes at all levels. The collaboration has opened new markets and helped us
                  better understand the needs of elite competitors."
                </blockquote>
              </div>
              <div className="bg-gradient-to-br from-sport-green/5 to-sport-green/10 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-sport-green/10 flex items-center justify-center">
                      <span className="text-sport-green font-bold">NU</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Dr. Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Director of Athletics, National University</p>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground">
                  "The scholarship program we've developed with the Sports Federation has transformed the lives of
                  countless student-athletes. Together, we're creating pathways for young people to excel both
                  academically and athletically."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

