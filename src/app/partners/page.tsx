"use client"

import Link from "next/link"
import Image from "next/image"
import { Handshake, ExternalLink, Search, Filter, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

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

  // Filter partners based on search term and category
  const filteredPartners = partners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeFilter === "All" || partner.category === activeFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[#0056b3] to-[#0056b3]/80 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: "0.1s" }}
            >
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
            <div
              className="mb-16 opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                Featured Partners
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#ffd700]"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partners
                  .filter((p) => p.featured)
                  .map((partner, index) => (
                    <div
                      key={partner.id}
                      className="bg-white border rounded-lg overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="h-48 bg-gradient-to-r from-[#0056b3]/5 to-[#0056b3]/10 flex items-center justify-center p-6">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          width={200}
                          height={100}
                          className="max-h-full object-contain transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-2">
                          <span className="inline-block bg-[#0056b3]/10 text-[#0056b3] text-xs font-medium px-2.5 py-0.5 rounded">
                            {partner.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">{partner.name}</h2>
                        <p className="text-gray-500 mb-4 flex-1">{partner.description}</p>
                        <Link
                          href={partner.website}
                          className="inline-flex items-center text-sm font-medium text-[#0056b3] hover:underline group"
                        >
                          Visit Website{" "}
                          <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Search and Filter */}
            <div
              className="mb-8 opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search partners..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                  <Filter className="text-gray-500 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm text-gray-500 mr-2 flex-shrink-0">Filter by:</span>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`text-sm px-3 py-1 rounded-full transition-colors whitespace-nowrap ${
                        activeFilter === category
                          ? "bg-[#0056b3] text-white"
                          : "bg-gray-100 hover:bg-[#0056b3]/10 text-gray-500 hover:text-[#0056b3]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* All Partners */}
            <div
              className="opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                All Partners
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0056b3]"></span>
              </h2>

              {filteredPartners.length === 0 ? (
                <div className="text-center py-12 bg-gray-100/30 rounded-lg">
                  <p className="text-gray-500">No partners found matching your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setActiveFilter("All")
                    }}
                    className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filteredPartners.map((partner, index) => (
                    <div
                      key={partner.id}
                      className="bg-white border rounded-lg overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      <div className="h-48 bg-gradient-to-r from-[#0056b3]/5 to-[#0056b3]/10 flex items-center justify-center p-6">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          width={200}
                          height={100}
                          className="max-h-full object-contain transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-2">
                          <span className="inline-block bg-[#0056b3]/10 text-[#0056b3] text-xs font-medium px-2.5 py-0.5 rounded">
                            {partner.category}
                          </span>
                          {partner.featured && (
                            <span className="inline-block bg-[#ffd700]/10 text-[#ffd700] text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                              Featured
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl font-bold mb-2">{partner.name}</h2>
                        <p className="text-gray-500 mb-4 flex-1">{partner.description}</p>
                        <Link
                          href={partner.website}
                          className="inline-flex items-center text-sm font-medium text-[#0056b3] hover:underline group"
                        >
                          Visit Website{" "}
                          <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                className="opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0.7s" }}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Become a Partner</h2>
                <p className="text-gray-500 mb-6">
                  Join our network of partners and contribute to the development of sports excellence. We offer various
                  partnership opportunities tailored to your organization&apos;s goals and values.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="mt-1 bg-[#0056b3]/10 p-2 rounded-full">
                      <Handshake className="h-4 w-4 text-[#0056b3]" />
                    </div>
                    <div>
                      <h3 className="font-medium">Strategic Partnerships</h3>
                      <p className="text-sm text-gray-500">
                        Long-term collaborations aligned with our strategic objectives and mission
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="mt-1 bg-[#2a9d8f]/10 p-2 rounded-full">
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
                        className="h-4 w-4 text-[#2a9d8f]"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Event Sponsorships</h3>
                      <p className="text-sm text-gray-500">
                        Opportunities to sponsor tournaments, championships, and special events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="mt-1 bg-[#6a0dad]/10 p-2 rounded-full">
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
                        className="h-4 w-4 text-[#6a0dad]"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m14.5 9-5 5" />
                        <path d="m9.5 9 5 5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Technical Partnerships</h3>
                      <p className="text-sm text-gray-500">
                        Collaboration on equipment, technology, and infrastructure development
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <button className="mt-6 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0056b3] text-white hover:bg-[#0056b3]/90 h-10 px-4 py-2 group">
                    Contact Our Partnership Team{" "}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <div
                className="relative h-[400px] rounded-lg overflow-hidden shadow-lg opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0.8s" }}
              >
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Partnership"
                  alt="Partnership handshake"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div
              className="text-center mb-12 opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.9s" }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Partner Testimonials</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Hear what our partners have to say about working with the Sports Federation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="bg-gradient-to-br from-[#0056b3]/5 to-[#0056b3]/10 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-[#0056b3]/10 flex items-center justify-center">
                      <span className="text-[#0056b3] font-bold">GS</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">CEO, Global Sports Equipment</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-500">
                &quot;Our partnership with the Sports Federation has been instrumental in developing new equipment
                  standards that benefit athletes at all levels. The collaboration has opened new markets and helped us
                  better understand the needs of elite competitors.&quot;
                </blockquote>
              </div>
              <div
                className="bg-gradient-to-br from-[#2a9d8f]/5 to-[#2a9d8f]/10 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "1.1s" }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-[#2a9d8f]/10 flex items-center justify-center">
                      <span className="text-[#2a9d8f] font-bold">NU</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">Dr. Michael Chen</h3>
                    <p className="text-sm text-gray-500">Director of Athletics, National University</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-500">
                &quot;The scholarship program we&apos;ve developed with the Sports Federation has transformed the lives of
                  countless student-athletes. Together, we&apos;re creating pathways for young people to excel both
                  academically and athletically.&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

