"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function CommitteePage() {
  // Committee members data
  const committeeMembers = [
    {
      id: 1,
      name: "Dr. Sarah ",
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
      <section className="bg-gradient-to-b from-[#003366] to-[#004488] text-white py-16 md:py-20 text-center">
      <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: "0.1s" }}
            >
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
            <div
              className="mb-16 opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                Executive Committee
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#ffd700]"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {committeeMembers
                  .filter((m) => m.featured)
                  .map((member, index) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-[#0056b3] font-medium mb-4">{member.role}</p>
                        <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.email && (
                            <Link
                              href={`mailto:${member.email}`}
                              className="text-gray-500 hover:text-[#0056b3] transition-colors"
                            >
                              <Mail className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
                              <span className="sr-only">Email</span>
                            </Link>
                          )}
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              className="text-gray-500 hover:text-[#0056b3] transition-colors"
                            >
                              <Linkedin className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
                              <span className="sr-only">LinkedIn</span>
                            </Link>
                          )}
                          {member.twitter && (
                            <Link
                              href={member.twitter}
                              className="text-gray-500 hover:text-[#0056b3] transition-colors"
                            >
                              <Twitter className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
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
            <div
              className="opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-2xl font-bold mb-8 inline-block relative">
                Board Members
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0056b3]"></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {committeeMembers
                  .filter((m) => !m.featured)
                  .map((member, index) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                        <p className="text-[#0056b3] font-medium text-sm mb-3">{member.role}</p>
                        <p className="text-gray-500 text-sm mb-3 line-clamp-3">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.email && (
                            <Link
                              href={`mailto:${member.email}`}
                              className="text-gray-500 hover:text-[#0056b3] transition-colors"
                            >
                              <Mail className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
                              <span className="sr-only">Email</span>
                            </Link>
                          )}
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              className="text-gray-500 hover:text-[#0056b3] transition-colors"
                            >
                              <Linkedin className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
                              <span className="sr-only">LinkedIn</span>
                            </Link>
                          )}
                          {member.twitter && (
                            <Link
                              href={member.twitter}
                              className="text-gray-500 hover:text-[#0056b3] transition-colors"
                            >
                              <Twitter className="h-4 w-4 transition-transform duration-300 hover:scale-110" />
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

