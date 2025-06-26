"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Wifi, Car, Utensils, Waves, Dumbbell, Coffee } from "lucide-react"

export default function HomePage() {
  useEffect(() => {
    // Simple scroll animation
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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hotel-hero.jpg" alt="Grand Palace Hotel" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Welcome to
            <span className="block text-blue-400">Grand Palace Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Experience luxury, comfort, and exceptional service in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-3">
              Book Your Stay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
              onClick={() => {
                const roomsSection = document.getElementById("rooms-section")
                if (roomsSection) {
                  roomsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Grand Palace Hotel</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 1985, Grand Palace Hotel has been synonymous with luxury and elegance. Located in the heart of the
                city, we offer world-class accommodations and unparalleled service to make your stay unforgettable.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence has earned us numerous awards and the loyalty of guests from around the
                world. Experience the perfect blend of traditional hospitality and modern amenities.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">39</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">150</div>
                  <div className="text-gray-600">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">24/7</div>
                  <div className="text-gray-600">Concierge Service</div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <Image
                src="/images/hotel-lobby.jpg"
                alt="Hotel Lobby"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Luxury Rooms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of elegantly appointed rooms and suites, each designed to provide the ultimate
              in comfort and style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Deluxe Room",
                price: "$299",
                image: "/images/deluxe-room.jpg",
                features: ["King Size Bed", "City View", "Free Wi-Fi", "Mini Bar"],
              },
              {
                name: "Executive Suite",
                price: "$499",
                image: "/images/executive-suite.jpg",
                features: ["Separate Living Area", "Ocean View", "Premium Amenities", "Butler Service"],
              },
              {
                name: "Presidential Suite",
                price: "$899",
                image: "/images/presidential-suite.jpg",
                features: ["Private Terrace", "Panoramic Views", "Personal Chef", "Luxury Spa"],
              },
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-on-scroll">
                <div className="relative h-64">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{room.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-500">{room.price}</div>
                      <div className="text-sm text-gray-600">per night</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Star className="h-4 w-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Amenities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy our comprehensive range of facilities and services designed to make your stay exceptional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wifi, title: "Free Wi-Fi", description: "High-speed internet throughout the hotel" },
              { icon: Car, title: "Valet Parking", description: "Complimentary valet parking service" },
              { icon: Utensils, title: "Fine Dining", description: "Award-winning restaurant and bar" },
              { icon: Waves, title: "Swimming Pool", description: "Rooftop infinity pool with city views" },
              { icon: Dumbbell, title: "Fitness Center", description: "24/7 state-of-the-art gym facilities" },
              { icon: Coffee, title: "Room Service", description: "24-hour in-room dining service" },
            ].map((service, index) => (
              <div key={index} className="text-center p-6 animate-on-scroll">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Ready for an Unforgettable Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your stay at Grand Palace Hotel and discover why we're the preferred choice for discerning travelers
              worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-500 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500 text-lg px-8 py-3"
              >
                Call Us: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
