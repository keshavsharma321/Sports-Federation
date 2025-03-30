"use client"

import Image from "next/image"
import E1 from "../../../public/E1.jpeg"
import E2 from "../../../public/E2.jpeg"
import E3 from "../../../public/E3.jpeg"

export default function PartnersPage() {
  // Sample partner data
  const partners = [
    {
      id: 1,
      name: "Global Sports Equipment",
      category: "Equipment Supplier",
      description: "Leading provider of high-quality sports equipment for professional athletes and teams worldwide.",
      logo: E1,
      website: "#",
      featured: true,
    },
    {
      id: 2,
      name: "Health First Medical",
      category: "Healthcare Partner",
      description:
        "Specialized medical services for athletes, focusing on sports medicine, injury prevention, and rehabilitation.",
      logo: E2,
      website: "#",
      featured: true,
    },
    {
      id: 3,
      name: "Elite Training Academy",
      category: "Training Partner",
      description:
        "State-of-the-art training facilities and programs designed to develop athletic performance at all levels.",
      logo: E3,
      website: "#",
      featured: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[#003366] to-[#004488] text-white py-16 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6">Image Gallery</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A showcase of our partners and contributors who help us achieve greatness in the world of sports.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 relative inline-block">
              Unleashing Passion, Showcasing Glory! 🏆📸
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#ffd700]"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="bg-white border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] flex flex-col items-center text-center"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                <div className="h-48 w-full relative">
  <Image
    src={partner.logo || "/placeholder.svg"}
    alt={`${partner.name} logo`}
    layout="fill"
    // objectFit="cover"
    className="rounded-t-lg"
  />
</div>

                  <div className="p-6 flex-1 flex flex-col items-center">
                    <span className="bg-[#003366]/10 text-[#003366] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {partner.category}
                    </span>
                    <h2 className="text-xl font-bold mb-2">{partner.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
