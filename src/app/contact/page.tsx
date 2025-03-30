"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react"
import Map from "../../../public/Pasted image.png"

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
      <section className="bg-gradient-to-b from-[#003366] to-[#004488] text-white py-16 md:py-20 text-center">
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
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
  {/* Left Section: Contact Information */}
  <div
    className="w-full md:w-1/2 opacity-0 transform translate-y-5 animate-[fadeUp_0.6s_ease-out_forwards]"
    style={{ animationDelay: "0.3s" }}
  >
    <h2 className="text-2xl font-bold mb-6 inline-block relative">
      Contact Information
      <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0056b3]"></span>
    </h2>
    <div className="space-y-8">
      {/* Contact Info Cards */}
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
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
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
        <div className="bg-[#2a9d8f]/10 p-3 rounded-full">
          <Phone className="h-6 w-6 text-[#2a9d8f]" />
        </div>
        <div>
          <h3 className="font-medium text-lg">Phone</h3>
          <p className="text-gray-500">Main: 9557960056</p>
          {/* <p className="text-gray-500">Support: +1 (555) 987-6543</p> */}
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
        <div className="bg-[#6a0dad]/10 p-3 rounded-full">
          <Mail className="h-6 w-6 text-[#6a0dad]" />
        </div>
        <div>
          <h3 className="font-medium text-lg">Email</h3>
          <p className="text-gray-500">General: ParwahSports@gmail.com</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
        <div className="bg-[#e63946]/10 p-3 rounded-full">
          <Globe className="h-6 w-6 text-[#e63946]" />
        </div>
        <div>
          <h3 className="font-medium text-lg">Social Media</h3>
          <div className="flex gap-4 mt-2">
  <Link href="https://www.facebook.com/share/18r2xWUuhF/" className="text-gray-500 hover:text-[#0056b3] transition-colors">
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
  <Link href="https://www.instagram.com/parwahsports?igsh=dGI4N2s2OHBqOHVw" className="text-gray-500 hover:text-[#6a0dad] transition-colors">
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
  <Link href="https://youtube.com/@parwahsports?si=wEYn4rUYIlsLPT_m" className="text-gray-500 hover:text-[#FF0000] transition-colors">
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

  {/* Right Section: Map */}
  <div className="w-full md:w-1/2 rounded-lg overflow-hidden mt-20 h-[450px] relative shadow-lg transition-all duration-300 hover:shadow-xl">
    <Image
      src={Map}
      alt="Office location map"
      fill
      className="object-cover transition-transform duration-700 hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                  contacting our membership department directly at ParwahSports@gmail.com.
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

