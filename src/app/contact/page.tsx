"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[#0056b3] to-[#0056b3]/80 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
              <p className="text-white/90 text-lg mb-6">
                Have questions or need assistance? Our team is here to help you with any inquiries about our programs,
                events, or services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div
                className="opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-2xl font-bold mb-6 inline-block relative">
                  Get in Touch
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0056b3]"></span>
                </h2>
                {isSubmitted ? (
                  <div className="bg-[#2a9d8f]/10 p-8 rounded-lg border border-[#2a9d8f]/20 text-center animate-[fadeIn_0.5s_ease-out_forwards]">
                    <CheckCircle className="h-16 w-16 text-[#2a9d8f] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#2a9d8f] mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for contacting us. We&apos;ve received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2a9d8f]/10 hover:bg-[#2a9d8f]/20 text-[#2a9d8f] h-10 px-4 py-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium leading-none">
                          First name
                        </label>
                        <input
                          id="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium leading-none">
                          Last name
                        </label>
                        <input
                          id="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium leading-none">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none">
                        Subject
                      </label>
                      <input
                        id="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="flex min-h-[150px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        placeholder="Tell us how we can assist you..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0056b3] text-white hover:bg-[#0056b3]/90 h-10 px-4 py-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              <div
                className="opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="text-2xl font-bold mb-6 inline-block relative">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0056b3]"></span>
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="bg-[#0056b3]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#0056b3]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Headquarters</h3>
                      <address className="not-italic text-gray-500">
                        123 Sports Avenue
                        <br />
                        Metropolis, NY 10001
                        <br />
                        United States
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="bg-[#2a9d8f]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#2a9d8f]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-500">Main: +1 (555) 123-4567</p>
                      <p className="text-gray-500">Support: +1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="bg-[#6a0dad]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#6a0dad]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-500">General: info@sportsfederation.org</p>
                      <p className="text-gray-500">Support: support@sportsfederation.org</p>
                      <p className="text-gray-500">Media: media@sportsfederation.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="bg-[#e63946]/10 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-[#e63946]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Social Media</h3>
                      <div className="flex gap-4 mt-2">
                        <Link href="#" className="text-gray-500 hover:text-[#0056b3] transition-colors">
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
                        <Link href="#" className="text-gray-500 hover:text-[#6a0dad] transition-colors">
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
                        <Link href="#" className="text-gray-500 hover:text-[#0056b3] transition-colors">
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
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-[#0056b3] transition-colors">
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
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 rounded-lg overflow-hidden h-[300px] relative shadow-lg transition-all duration-300 hover:shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Map"
                    alt="Office location map"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4">
            <div
              className="text-center max-w-3xl mx-auto opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8">Find quick answers to common questions about our federation.</p>
            </div>
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <div
                className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[#0056b3]/20 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: "0.5s" }}
              >
                <h3 className="font-medium text-lg mb-2 text-[#0056b3]">What are your office hours?</h3>
                <p className="text-gray-500">
                  Our offices are open Monday through Friday from 9:00 AM to 5:00 PM Eastern Time. We are closed on
                  weekends and major holidays.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[#2a9d8f]/20 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="font-medium text-lg mb-2 text-[#2a9d8f]">How can I join the federation?</h3>
                <p className="text-gray-500">
                  Athletes, coaches, and organizations can apply for membership through our online portal or by
                  contacting our membership department directly at membership@sportsfederation.org.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[#6a0dad]/20 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: "0.7s" }}
              >
                <h3 className="font-medium text-lg mb-2 text-[#6a0dad]">How long does it take to get a response?</h3>
                <p className="text-gray-500">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please call our
                  main office number.
                </p>
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

