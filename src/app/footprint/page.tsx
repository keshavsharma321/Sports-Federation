import Link from "next/link";
import { Medal, School, MapPin, Flag, Calendar } from "lucide-react";
import { ReactNode } from "react";
import React from "react";


export default function FootprintPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1 bg-gradient-to-b from-white to-muted">
        <div className="w-full max-w-7xl px-4 mx-auto">
          <h1 className="text-4xl font-bold text-center mt-10 mb-4">Our Footprint</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We’re proud of the growing impact we’ve made in the world of sports. Through consistent efforts and strategic partnerships, we’re transforming athletic dreams into reality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FootprintCard
              icon={<Medal className="w-8 h-8 text-sport-blue" />}
              title="150+ Athletes Supported"
              description="Empowered through financial aid, training, and mentorship."
            />
            <FootprintCard
              icon={<School className="w-8 h-8 text-sport-green" />}
              title="25+ Schools & Academies Partnered"
              description="Providing expert coaches and building strong sports programs."
            />
            <FootprintCard
              icon={<MapPin className="w-8 h-8 text-sport-purple" />}
              title="10+ Districts Reached"
              description="Actively working across Uttarakhand and surrounding regions."
            />
            <FootprintCard
              icon={<Flag className="w-8 h-8 text-sport-red" />}
              title="National-Level Athletes Guided"
              description="Helped multiple athletes reach state and national platforms."
            />
            <FootprintCard
              icon={<Calendar className="w-8 h-8 text-sport-yellow" />}
              title="Annual Sports Camps & Workshops"
              description="Regular talent trials, awareness events, and training camps."
            />
          </div>

          <div className="text-center mt-16">
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
  );
}

type FootprintCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function FootprintCard({ icon, title, description }: FootprintCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-muted p-6 text-center hover:shadow-md transition-shadow">
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
