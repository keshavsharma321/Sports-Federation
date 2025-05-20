import Link from "next/link";
import { Users, HeartHandshake, Handshake, Megaphone } from "lucide-react";
import { ReactNode } from "react";

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col  min-h-[calc(100vh-4rem)]">
      <main className="flex-1 bg-gradient-to-b from-white to-muted py-16 md:py-24">
        <div className="w-full max-w-7xl px-4 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Get Involved – Be the Reason Someone Never Gives Up</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            At Parwah Sports Trust, we believe it takes a village to build a champion. You don’t need to be an athlete to
            change the game—you just need to care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GetInvolvedCard
              icon={<Users className="w-8 h-8 text-sport-blue" />}
              title="Give Your Time"
              description="Be a mentor. Be a coach. Or just be someone who shows up. Your presence could inspire a young athlete to keep going."
            />
            <GetInvolvedCard
              icon={<HeartHandshake className="w-8 h-8 text-sport-green" />}
              title="Support a Dream"
              description="Every donation—big or small—helps an athlete get closer to their goal. Sponsor equipment, training, travel, or just a simple meal before a match."
            />
            <GetInvolvedCard
              icon={<Handshake className="w-8 h-8 text-sport-purple" />}
              title="Partner With Purpose"
              description="Are you a school, academy, or organization that believes in grassroots sports? Let’s join hands and build something meaningful together."
            />
            <GetInvolvedCard
              icon={<Megaphone className="w-8 h-8 text-sport-red" />}
              title="Be a Voice"
              description="Follow us. Talk about us. Share our stories. You never know who might see it—and who might be inspired."
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

type GetInvolvedCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function GetInvolvedCard({ icon, title, description }: GetInvolvedCardProps) {
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
