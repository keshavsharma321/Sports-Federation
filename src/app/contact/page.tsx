"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending form data
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-[#003366] to-[#004488] text-white py-16 md:py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-white/90 text-lg mb-6">
              Have questions or need assistance? Our team is here to help you with any inquiries about our
              programs, events, or services.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-6 inline-block relative">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0056b3]"></span>
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#0056b3]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#0056b3]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Headquarters</h3>
                      <address className="not-italic text-gray-500">
                        Mahak Complex
                        <br />
                        Delhi Road , Rampur Maniharan
                        <br />
                        Saharanpur 247451
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#2a9d8f]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#2a9d8f]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-500">Main: 9557960056</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#6a0dad]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#6a0dad]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-500">General: ParwahSports@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                    <div className="bg-[#e63946]/10 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-[#e63946]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Social Media</h3>
                      <div className="flex gap-4 mt-2">
                        <Link
                          href="https://www.facebook.com/share/18r2xWUuhF/"
                          className="text-gray-500 hover:text-[#0056b3] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                            className="h-5 w-5 transition-transform duration-300 hover:scale-110"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                          <span className="sr-only">Facebook</span>
                        </Link>
                        <Link
                          href="https://www.instagram.com/parwahsports?igsh=dGI4N2s2OHBqOHVw"
                          className="text-gray-500 hover:text-[#6a0dad] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                            className="h-5 w-5 transition-transform duration-300 hover:scale-110"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                          <span className="sr-only">Instagram</span>
                        </Link>
                        <Link
                          href="https://youtube.com/@parwahsports?si=wEYn4rUYIlsLPT_m"
                          className="text-gray-500 hover:text-[#FF0000] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                            className="h-5 w-5 transition-transform duration-300 hover:scale-110"
                          >
                            <path d="M22.54 6.42a2.79 2.79 0 0 0-1.96-1.96C18.36 4 12 4 12 4s-6.36 0-8.58.46A2.79 2.79 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.79 2.79 0 0 0 1.96 1.96C5.64 20 12 20 12 20s6.36 0 8.58-.46a2.79 2.79 0 0 0 1.96-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM10 15V9l6 3z" />
                          </svg>
                          <span className="sr-only">YouTube</span>
                        </Link>
                      </div>
                    </div>
                  </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center p-8">
                <CheckCircle className="mx-auto mb-4 text-green-600 w-16 h-16" />
                <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                <p className="text-gray-700">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
                  />
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formState.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
                  />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
                />
                <textarea
                  id="message"
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border border-gray-300 rounded px-3 py-2 mb-4 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-[#0056b3] text-white py-3 px-6 rounded hover:bg-[#004494] disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="group border rounded-lg p-4" open>
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              What are the age requirements for your programs?
              <span className="text-xl transition-transform group-open:rotate-180">+</span>
            </summary>
            <p className="mt-2 text-gray-700">
              Our programs generally cater to children and youth aged 6-18, but some workshops may have specific age
              requirements.
            </p>
          </details>
          <details className="group border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              Do you provide scholarships for sports training?
              <span className="text-xl transition-transform group-open:rotate-180">+</span>
            </summary>
            <p className="mt-2 text-gray-700">
              Yes, we offer scholarships based on talent and financial need. Please contact us to learn more about the
              application process.
            </p>
          </details>
          <details className="group border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              Can I volunteer or mentor through Parwah Sports Trust?
              <span className="text-xl transition-transform group-open:rotate-180">+</span>
            </summary>
            <p className="mt-2 text-gray-700">
              Absolutely! We welcome volunteers and mentors passionate about supporting youth sports development. Reach
              out to get involved.
            </p>
          </details>
          <details className="group border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              How can I donate equipment or funds?
              <span className="text-xl transition-transform group-open:rotate-180">+</span>
            </summary>
            <p className="mt-2 text-gray-700">
              Donations can be made via our website or by contacting our office directly. We appreciate your support!
            </p>
          </details>
        </div>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="bg-[#003366] text-white py-8 text-center">
    <p>&copy; 2024 Parwah Sports Trust. All rights reserved.</p>
  </footer>
</div>
)
}