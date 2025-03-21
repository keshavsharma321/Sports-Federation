import Link from "next/link"
import { Clock } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1 flex items-center justify-center">
        <div className="container py-16 md:py-24 text-center">
          <div className="max-w-md mx-auto">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
            <p className="text-muted-foreground mb-8">
              We're currently working on this page. Check back soon for resources, guides, and materials to support your
              sports journey.
            </p>
            <Link href="/">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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

