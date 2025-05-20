import Link from "next/link"
import { HandHeart, Dumbbell, UserCheck, Users, Cpu } from "lucide-react"
import { ReactNode } from "react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1 bg-gradient-to-b from-white to-muted py-16 md:py-24">
<div className="w-full max-w-7xl px-4 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Our Resources – The Heartbeat of Every Athlete’s Journey
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            At Parwah Sports Trust, we know that it’s not just about providing resources—it’s about investing in people. Every piece of equipment, every coach, every dollar raised is a step toward helping a young athlete dream bigger, push harder, and achieve the impossible.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <ResourceCard
              icon={<HandHeart className="w-8 h-8 text-sport-red" />}
              title="Your Generosity – Financial Support"
              description="From scholarships to competition fees, your contribution helps us break barriers and make dreams possible."
              callToAction="Be a part of their journey."
            />
            <ResourceCard
              icon={<Dumbbell className="w-8 h-8 text-sport-blue" />}
              title="The Right Tools – Facilities & Equipment"
              description="We provide athletes access to world-class training and tools they need to perform at their best."
              callToAction="Help them train like champions."
            />
            <ResourceCard
              icon={<UserCheck className="w-8 h-8 text-sport-green" />}
              title="Guiding Lights – Coaches & Mentors"
              description="Our expert mentors go beyond training—they become the backbone of every athlete’s journey."
              callToAction="Become a guiding light."
            />
            <ResourceCard
              icon={<Users className="w-8 h-8 text-sport-purple" />}
              title="Stronger Together – Collaborations"
              description="We work with schools and organizations to build a powerful support network."
              callToAction="Join our network and be the change."
            />
            <ResourceCard
              icon={<Cpu className="w-8 h-8 text-sport-yellow" />}
              title="Smart Training – Tech & Data Tools"
              description="From apps to video analysis, we equip athletes with tools to track and improve performance."
              callToAction="Empower them with knowledge and tech."
            />
          </section>

          <h2 className="text-2xl font-bold text-center mb-6">How You Can Be Part of This Change</h2>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <SupportCard
              title="Donate & Support"
              description="Every penny you contribute supports an athlete’s growth—from travel to equipment."
              action="Donate today, change a life forever."
            />
            <SupportCard
              title="Give the Gift of Equipment"
              description="Even a pair of shoes or a new racket can make a difference in someone’s journey."
              action="Help them play, help them win."
            />
            <SupportCard
              title="Volunteer Your Expertise"
              description="Your time and knowledge can help shape the future of an aspiring athlete."
              action="Become a mentor, change a life."
            />
          </section>

          <div className="text-center">
            <p className="text-lg font-medium mb-4">
              Because at Parwah Sports Trust, we don’t just provide resources—we create opportunities and build futures.
            </p>
            <Link href="/">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 transition-colors">
                Return to Home
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-muted py-6 border-t">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Sports Federation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

type CardProps = {
  icon?: ReactNode
  title: string
  description: string
  callToAction?: string
  action?: string
}

function ResourceCard({ icon, title, description, callToAction }: CardProps) {
  return (
    <div className="bg-white border border-muted rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-center">
      <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      {callToAction && <p className="text-sm font-medium text-primary">{callToAction}</p>}
    </div>
  )
}

function SupportCard({ title, description, action }: CardProps) {
  return (
    <div className="bg-white border border-muted rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-center">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-sm font-medium text-primary">{action}</p>
    </div>
  )
}
