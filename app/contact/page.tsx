"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  MessageCircle,
  Calendar,
  Car,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "24/7 Customer Service",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@grandpalacehotel.com", "reservations@grandpalacehotel.com"],
      description: "We respond within 2 hours",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Luxury Avenue", "Downtown District, City, State 12345"],
      description: "Prime city location",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Front Desk Hours",
      details: ["24 Hours", "7 Days a Week"],
      description: "Always here to help",
    },
  ]

  const departments = [
    {
      name: "Reservations",
      phone: "+1 (555) 123-4567",
      email: "reservations@grandpalacehotel.com",
      hours: "24/7",
    },
    {
      name: "Concierge",
      phone: "+1 (555) 123-4568",
      email: "concierge@grandpalacehotel.com",
      hours: "24/7",
    },
    {
      name: "Restaurant",
      phone: "+1 (555) 123-4569",
      email: "restaurant@grandpalacehotel.com",
      hours: "6:30 AM - 11:00 PM",
    },
    {
      name: "Spa & Wellness",
      phone: "+1 (555) 123-4570",
      email: "spa@grandpalacehotel.com",
      hours: "8:00 AM - 10:00 PM",
    },
    {
      name: "Events & Meetings",
      phone: "+1 (555) 123-4571",
      email: "events@grandpalacehotel.com",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      name: "Guest Relations",
      phone: "+1 (555) 123-4572",
      email: "guestrelations@grandpalacehotel.com",
      hours: "24/7",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/contact-hero.jpg" alt="Contact Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help make your stay exceptional. Reach out to us anytime for assistance, reservations, or
            inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us - choose what's most convenient for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-500">{info.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="animate-on-scroll">
              <div className="h-full min-h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Grand Palace Hotel</p>
                  <p className="text-gray-600">123 Luxury Avenue</p>
                  <p className="text-gray-600">Downtown District</p>
                  <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                    <Car className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect directly with the right department for faster, more personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{dept.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700 text-sm">{dept.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700">{dept.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need immediate assistance? Use these quick action buttons for instant help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Make Reservation",
                description: "Book your stay online",
                action: "Book Now",
              },
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "Live Chat",
                description: "Chat with our team",
                action: "Start Chat",
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Call Direct",
                description: "Speak to our staff",
                action: "Call Now",
              },
              {
                icon: <Car className="h-8 w-8" />,
                title: "Airport Transfer",
                description: "Book transportation",
                action: "Book Transfer",
              },
            ].map((action, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-500">{action.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <Button className="bg-blue-500 hover:bg-blue-600">{action.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Follow Us</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with Grand Palace Hotel on social media for updates, special offers, and behind-the-scenes
              content.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <Facebook className="h-6 w-6" />, name: "Facebook" },
                { icon: <Twitter className="h-6 w-6" />, name: "Twitter" },
                { icon: <Instagram className="h-6 w-6" />, name: "Instagram" },
                { icon: <Youtube className="h-6 w-6" />, name: "YouTube" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="w-16 h-16 rounded-full bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                >
                  <div className="text-gray-600 hover:text-blue-500">{social.icon}</div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
