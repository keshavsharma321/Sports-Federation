"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Twitter, ExternalLink } from "lucide-react"

export default function CommitteePage() {
  // Committee members data
  const committeeMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "President",
      image: "/placeholder.svg?height=400&width=400&text=SJ",
      bio: "Dr. Johnson is a former Olympic athlete with over 20 years of experience in sports administration. She has led the federation since 2018 and has been instrumental in expanding our international presence.",
      email: "president@sportsfederation.org",
      linkedin: "#",
      twitter: "#",
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Vice President",
      image: "/placeholder.svg?height=400&width=400&text=MC",
      bio: "With a background in sports medicine and business administration, Michael oversees our athlete development programs and strategic partnerships.",
      email: "vp@sportsfederation.org",
      linkedin: "#",
      twitter: "#",
      featured: true,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Secretary General",
      image: "/placeholder.svg?height=400&width=400&text=ER",
      bio: "Elena brings extensive experience in international sports governance and has represented our federation at global sporting events for over a decade.",
      email: "secretary@sportsfederation.org",
      linkedin: "#",
      twitter: "#",
      featured: true,
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Treasurer",
      image: "/placeholder.svg?height=400&width=400&text=JW",
      bio: "A certified accountant with a passion for sports, James manages our financial operations and ensures transparency in all our financial dealings.",
      email: "treasurer@sportsfederation.org",
      linkedin: "#",
      featured: false,
    },
    {
      id: 5,
      name: "Dr. Amara Okafor",
      role: "Medical Director",
      image: "/placeholder.svg?height=400&width=400&text=AO",
      bio: "Dr. Okafor leads our medical team, focusing on athlete health, injury prevention, and developing sports medicine protocols.",
      email: "medical@sportsfederation.org",
      linkedin: "#",
      featured: false,
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Technical Director",
      image: "/placeholder.svg?height=400&width=400&text=RK",
      bio: "Robert oversees competition rules, technical standards, and equipment regulations across all our sporting disciplines.",
      email: "technical@sportsfederation.org",
      linkedin: "#",
      twitter: "#",
      featured: false,
    },
    {
      id: 7,
      name: "Sophia Patel",
      role: "Youth Development Director",
      image: "/placeholder.svg?height=400&width=400&text=SP",
      bio: "Sophia leads our initiatives to discover and nurture young talent, creating pathways from grassroots to elite competition.",
      email: "youth@sportsfederation.org",
      twitter: "#",
      featured: false,
    },
    {
      id: 8,
      name: "David Thompson",
      role: "Communications Director",
      image: "/placeholder.svg?height=400&width=400&text=DT",
      bio: "With a background in sports journalism, David manages our media relations, public communications, and digital presence.",
      email: "communications@sportsfederation.org",
      linkedin: "#",
      twitter: "#",
      featured: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-sport-blue to-sport-blue/80 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Our Committee</h1>
              <p className="text-white/90 text-lg mb-6">
                Meet the dedicated team of professionals who lead our federation and drive our mission forward.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Executive Committee */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                Executive Committee
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-sport-gold"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {committeeMembers
                  .filter((m) => m.featured)
                  .map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sport-blue font-medium mb-4">{member.role}</p>
                        <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.email && (
                            <Link
                              href={`mailto:${member.email}`}
                              className="text-muted-foreground hover:text-sport-blue transition-colors"
                            >
                              <Mail className="h-5 w-5" />
                              <span className="sr-only">Email</span>
                            </Link>
                          )}
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              className="text-muted-foreground hover:text-sport-blue transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                              <span className="sr-only">LinkedIn</span>
                            </Link>
                          )}
                          {member.twitter && (
                            <Link
                              href={member.twitter}
                              className="text-muted-foreground hover:text-sport-blue transition-colors"
                            >
                              <Twitter className="h-5 w-5" />
                              <span className="sr-only">Twitter</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Board Members */}
            <div>
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                Board Members
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-sport-blue"></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {committeeMembers
                  .filter((m) => !m.featured)
                  .map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                        <p className="text-sport-blue font-medium text-sm mb-3">{member.role}</p>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.email && (
                            <Link
                              href={`mailto:${member.email}`}
                              className="text-muted-foreground hover:text-sport-blue transition-colors"
                            >
                              <Mail className="h-4 w-4" />
                              <span className="sr-only">Email</span>
                            </Link>
                          )}
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              className="text-muted-foreground hover:text-sport-blue transition-colors"
                            >
                              <Linkedin className="h-4 w-4" />
                              <span className="sr-only">LinkedIn</span>
                            </Link>
                          )}
                          {member.twitter && (
                            <Link
                              href={member.twitter}
                              className="text-muted-foreground hover:text-sport-blue transition-colors"
                            >
                              <Twitter className="h-4 w-4" />
                              <span className="sr-only">Twitter</span>
                            </Link>
                          )}
                        </div>
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
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Governance</h2>
                <p className="text-muted-foreground mb-6">
                  The Sports Federation is governed by a dedicated committee of professionals who bring diverse
                  expertise and experience to our organization.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 text-sport-blue">Transparent Leadership</h3>
                    <p className="text-sm text-muted-foreground">
                      Our committee operates with full transparency, publishing meeting minutes and financial reports
                      regularly.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 text-sport-green">Democratic Elections</h3>
                    <p className="text-sm text-muted-foreground">
                      Committee members are elected through a democratic process involving all member organizations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2 text-sport-purple">Ethical Standards</h3>
                    <p className="text-sm text-muted-foreground">
                      We adhere to the highest ethical standards in sports governance, with strict conflict of interest
                      policies.
                    </p>
                  </div>
                </div>
                <Link href="/organization">
                  <button className="mt-6 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sport-blue text-white hover:bg-sport-blue/90 h-10 px-4 py-2">
                    Learn More About Our Organization <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Committee Meeting"
                  alt="Committee meeting"
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Committee</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're always looking for passionate individuals to contribute to our mission. Learn about upcoming
                committee elections and opportunities to serve.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sport-blue text-white hover:bg-sport-blue/90 h-11 px-8">
                    Contact Us For Information <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

