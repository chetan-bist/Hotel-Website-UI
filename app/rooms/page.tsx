"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Tv, Coffee, Bath, Utensils, Star, Users, Bed } from "lucide-react"

export default function RoomsPage() {
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

  const rooms = [
    {
      id: 1,
      name: "Standard Single Room",
      type: "Single",
      price: 199,
      originalPrice: 249,
      image: "/images/deluxe-room.jpg",
      capacity: 1,
      beds: "1 Single Bed",
      size: "25 sqm",
      amenities: [
        "Free Wi-Fi",
        "Air Conditioning",
        "Flat-screen TV",
        "Mini Fridge",
        "Private Bathroom",
        "Room Service",
      ],
      features: ["City View", "Work Desk", "Safe", "Hair Dryer"],
      description:
        "Perfect for solo travelers, our Standard Single Room offers comfort and convenience with modern amenities.",
    },
    {
      id: 2,
      name: "Deluxe Double Room",
      type: "Double",
      price: 299,
      originalPrice: 349,
      image: "/images/deluxe-room.jpg",
      capacity: 2,
      beds: "1 King Bed",
      size: "35 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Mini Bar", "Private Bathroom", "24/7 Room Service"],
      features: ["City View", "Seating Area", "Safe", "Bathrobe & Slippers", "Premium Toiletries"],
      description: "Spacious and elegant, our Deluxe Double Room provides the perfect retreat for couples.",
    },
    {
      id: 3,
      name: "Executive Suite",
      type: "Suite",
      price: 499,
      originalPrice: 599,
      image: "/images/executive-suite.jpg",
      capacity: 4,
      beds: "1 King Bed + Sofa Bed",
      size: "55 sqm",
      amenities: [
        "Free Wi-Fi",
        "Air Conditioning",
        '55" Smart TV',
        "Premium Mini Bar",
        "Marble Bathroom",
        "Butler Service",
      ],
      features: [
        "Ocean View",
        "Separate Living Area",
        "Executive Lounge Access",
        "Nespresso Machine",
        "Premium Amenities",
      ],
      description: "Experience luxury in our Executive Suite with separate living area and premium amenities.",
    },
    {
      id: 4,
      name: "Family Deluxe Room",
      type: "Family",
      price: 399,
      originalPrice: 449,
      image: "/images/deluxe-room.jpg",
      capacity: 4,
      beds: "2 Double Beds",
      size: "45 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Mini Fridge", "Family Bathroom", "Kids Amenities"],
      features: ["Garden View", "Extra Space", "Safe", "Welcome Treats for Kids", "Connecting Rooms Available"],
      description: "Ideal for families, this spacious room offers comfort and convenience for all ages.",
    },
    {
      id: 5,
      name: "Presidential Suite",
      type: "Presidential",
      price: 899,
      originalPrice: 1099,
      image: "/images/presidential-suite.jpg",
      capacity: 6,
      beds: "1 King Bed + 2 Single Beds",
      size: "85 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", '65" Smart TV', "Full Bar", "Jacuzzi", "Personal Chef Available"],
      features: ["Panoramic View", "Private Terrace", "VIP Services", "Premium Everything", "Helicopter Transfer"],
      description: "The ultimate in luxury, our Presidential Suite offers unparalleled comfort and exclusive services.",
    },
    {
      id: 6,
      name: "Honeymoon Suite",
      type: "Romantic",
      price: 599,
      originalPrice: 699,
      image: "/images/executive-suite.jpg",
      capacity: 2,
      beds: "1 King Bed",
      size: "50 sqm",
      amenities: ["Free Wi-Fi", "Air Conditioning", "Smart TV", "Champagne Bar", "Spa Bathroom", "Romantic Turndown"],
      features: ["Sunset View", "Private Balcony", "Rose Petals", "Couples Massage", "Late Checkout"],
      description:
        "Romance awaits in our specially designed Honeymoon Suite with intimate ambiance and luxury touches.",
    },
  ]

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("Wi-Fi")) return <Wifi className="h-4 w-4" />
    if (amenity.includes("TV")) return <Tv className="h-4 w-4" />
    if (amenity.includes("Coffee") || amenity.includes("Bar")) return <Coffee className="h-4 w-4" />
    if (amenity.includes("Bathroom")) return <Bath className="h-4 w-4" />
    if (amenity.includes("Service")) return <Utensils className="h-4 w-4" />
    return <Star className="h-4 w-4" />
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hotel-hero.jpg" alt="Hotel Rooms" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Rooms & Suites</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our collection of elegantly appointed accommodations, each designed for your comfort and luxury.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {rooms.map((room, index) => (
              <Card
                key={room.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-300 animate-on-scroll ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:flex">
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative h-80 lg:h-full">
                      <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-500 text-white">{room.type}</Badge>
                      </div>
                      {room.originalPrice > room.price && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="destructive">Save ${room.originalPrice - room.price}</Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="lg:w-1/2 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h2>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {room.capacity} Guests
                          </div>
                          <div className="flex items-center">
                            <Bed className="h-4 w-4 mr-1" />
                            {room.beds}
                          </div>
                          <div>{room.size}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        {room.originalPrice > room.price && (
                          <div className="text-lg text-gray-500 line-through">${room.originalPrice}</div>
                        )}
                        <div className="text-3xl font-bold text-blue-500">${room.price}</div>
                        <div className="text-sm text-gray-600">per night</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{room.description}</p>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            {getAmenityIcon(amenity)}
                            <span className="ml-2">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Special Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {room.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="flex-1 bg-blue-500 hover:bg-blue-600"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        Book Now
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        onClick={() => alert("Room details will be shown here")}
                      >
                        More Details
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our concierge team is available 24/7 to help you find the perfect room for your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-500 hover:bg-gray-100">
              Call Us: (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-500">
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
