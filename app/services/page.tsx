"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wifi,
  Car,
  Waves,
  Dumbbell,
  Coffee,
  SpadeIcon as Spa,
  Shield,
  Clock,
  Users,
  Baby,
  Briefcase,
  Plane,
  Gift,
  Heart,
  Camera,
} from "lucide-react"

export default function ServicesPage() {
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

  const services = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Free High-Speed Wi-Fi",
      description:
        "Complimentary high-speed internet access throughout the hotel, perfect for business and leisure travelers.",
      features: ["Unlimited bandwidth", "Secure connection", "Available in all areas", "24/7 technical support"],
      image: "/images/hotel-lobby.jpg",
      category: "Essential",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Valet Parking Service",
      description: "Professional valet parking with secure underground garage and 24-hour vehicle protection.",
      features: ["Complimentary service", "Secure garage", "Car wash available", "Electric vehicle charging"],
      image: "/images/hotel-exterior.jpg",
      category: "Transportation",
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Rooftop Infinity Pool",
      description: "Stunning rooftop infinity pool with panoramic city views, poolside bar, and luxury cabanas.",
      features: ["Heated pool", "City views", "Poolside service", "Private cabanas"],
      image: "/images/infinity-pool.jpg",
      category: "Recreation",
    },
    {
      icon: <Spa className="h-8 w-8" />,
      title: "Luxury Spa & Wellness",
      description: "Full-service spa offering massages, facials, body treatments, and wellness therapies.",
      features: ["Professional therapists", "Couples treatments", "Sauna & steam room", "Wellness packages"],
      image: "/images/spa-treatment.jpg",
      category: "Wellness",
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "24/7 Fitness Center",
      description: "State-of-the-art fitness facility with modern equipment, personal training, and group classes.",
      features: ["Latest equipment", "Personal trainers", "Group classes", "Yoga studio"],
      image: "/images/fitness-center.jpg",
      category: "Fitness",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "24-Hour Room Service",
      description: "Round-the-clock in-room dining service with extensive menu and premium beverage selection.",
      features: ["24/7 availability", "Extensive menu", "Premium beverages", "Special dietary options"],
      image: "/images/deluxe-room.jpg",
      category: "Dining",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Safety",
      description: "Comprehensive security system with 24-hour surveillance, keycard access, and safety protocols.",
      features: ["24/7 security", "CCTV monitoring", "Keycard access", "Emergency procedures"],
      image: "/images/hotel-lobby.jpg",
      category: "Security",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Concierge Services",
      description:
        "Professional concierge team available 24/7 to assist with reservations, tours, and special requests.",
      features: ["24/7 availability", "Local expertise", "Reservation assistance", "Tour arrangements"],
      image: "/images/hotel-lobby.jpg",
      category: "Service",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Event & Meeting Facilities",
      description:
        "Versatile event spaces with modern AV equipment, catering services, and professional event planning.",
      features: ["Multiple venues", "AV equipment", "Catering services", "Event planning"],
      image: "/images/business-meeting.jpg",
      category: "Business",
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Family Services",
      description: "Family-friendly amenities including babysitting, kids club, playground, and family activities.",
      features: ["Babysitting service", "Kids club", "Family activities", "Child-safe facilities"],
      image: "/images/deluxe-room.jpg",
      category: "Family",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business Center",
      description: "Fully equipped business center with computers, printers, meeting rooms, and secretarial services.",
      features: ["Computer access", "Printing services", "Meeting rooms", "Secretarial support"],
      image: "/images/business-meeting.jpg",
      category: "Business",
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Airport Transfer",
      description: "Complimentary airport shuttle service and luxury car transfers available upon request.",
      features: ["Complimentary shuttle", "Luxury transfers", "Flight tracking", "Meet & greet service"],
      image: "/images/hotel-exterior.jpg",
      category: "Transportation",
    },
  ]

  const premiumServices = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Romance Package",
      description: "Special romantic experiences including couples spa, private dining, and room decoration.",
      price: "From $299",
      image: "/images/executive-suite.jpg",
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Personal Shopping",
      description: "Professional personal shopping service with local boutiques and luxury brands.",
      price: "From $150",
      image: "/images/hotel-lobby.jpg",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography Service",
      description: "Professional photography for special occasions, events, and memorable moments.",
      price: "From $200",
      image: "/images/hotel-exterior.jpg",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Essential: "bg-blue-100 text-blue-800",
      Transportation: "bg-green-100 text-green-800",
      Recreation: "bg-purple-100 text-purple-800",
      Wellness: "bg-pink-100 text-pink-800",
      Fitness: "bg-orange-100 text-orange-800",
      Dining: "bg-red-100 text-red-800",
      Security: "bg-gray-100 text-gray-800",
      Service: "bg-blue-100 text-blue-800",
      Business: "bg-indigo-100 text-indigo-800",
      Family: "bg-teal-100 text-teal-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hotel-hero.jpg" alt="Hotel Services" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Services & Facilities</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our comprehensive range of world-class amenities and personalized services designed for your
            comfort and convenience.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Hotel Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From essential amenities to luxury experiences, we provide everything you need for an exceptional stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-on-scroll"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(service.category)}>{service.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elevate your experience with our exclusive premium services, tailored for discerning guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumServices.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-on-scroll"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white">Premium</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <div className="text-lg font-bold text-blue-500">{service.price}</div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    onClick={() => alert("Service booking will be implemented")}
                  >
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Hours</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most of our services are available 24/7, while some have specific operating hours for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { service: "Front Desk & Concierge", hours: "24 Hours" },
              { service: "Room Service", hours: "24 Hours" },
              { service: "Fitness Center", hours: "24 Hours" },
              { service: "Swimming Pool", hours: "6:00 AM - 11:00 PM" },
              { service: "Spa & Wellness", hours: "8:00 AM - 10:00 PM" },
              { service: "Business Center", hours: "24 Hours" },
              { service: "Restaurant", hours: "6:30 AM - 11:00 PM" },
              { service: "Valet Parking", hours: "24 Hours" },
              { service: "Airport Shuttle", hours: "5:00 AM - 12:00 AM" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">{item.service}</h3>
                  <span className="text-blue-500 font-medium">{item.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our dedicated team is available 24/7 to help you with any service requests or special arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-500 hover:bg-gray-100">
                Call Concierge: (555) 123-4567
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500"
              >
                Request Service
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
