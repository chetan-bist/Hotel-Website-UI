"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, MapPin, Calendar, Star, Heart, Shield, Leaf } from "lucide-react"

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "James Wellington",
      position: "General Manager",
      image: "/images/hotel-lobby.jpg",
      bio: "With over 20 years in luxury hospitality, James leads our team with passion and dedication to excellence.",
    },
    {
      name: "Maria Rodriguez",
      position: "Executive Chef",
      image: "/images/restaurant-interior.jpg",
      bio: "Award-winning chef with Michelin experience, Maria creates culinary masterpieces that delight our guests.",
    },
    {
      name: "David Chen",
      position: "Head Concierge",
      image: "/images/hotel-lobby.jpg",
      bio: "David's local expertise and attention to detail ensure every guest experience is perfectly tailored.",
    },
    {
      name: "Sarah Thompson",
      position: "Spa Director",
      image: "/images/spa-treatment.jpg",
      bio: "Wellness expert Sarah oversees our spa services, creating rejuvenating experiences for mind and body.",
    },
  ]

  const achievements = [
    { icon: <Award className="h-8 w-8" />, title: "AAA Five Diamond Award", year: "2020-2024" },
    { icon: <Star className="h-8 w-8" />, title: "Forbes Five-Star Rating", year: "2019-2024" },
    { icon: <Heart className="h-8 w-8" />, title: "Best Luxury Hotel", year: "2023" },
    { icon: <Leaf className="h-8 w-8" />, title: "Green Key Certification", year: "2022" },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hotel-hero.jpg" alt="Hotel History" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Grand Palace Hotel</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our rich heritage, commitment to excellence, and the passionate team behind your unforgettable
            experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1985 by the Wellington family, Grand Palace Hotel began as a vision to create an oasis of
                luxury and comfort in the heart of the city. What started as a boutique property has evolved into one of
                the most prestigious hotels in the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over nearly four decades, we have maintained our commitment to exceptional service, elegant
                accommodations, and memorable experiences. Our dedication to excellence has earned us numerous awards
                and the loyalty of guests from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, Grand Palace Hotel stands as a testament to timeless elegance, combining traditional hospitality
                values with modern luxury amenities to create an unparalleled guest experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">39</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">500K+</div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <Image
                src="/images/hotel-lobby.jpg"
                alt="Hotel History"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide exceptional hospitality experiences that exceed our guests' expectations through personalized
                service, luxurious accommodations, and attention to every detail. We strive to create lasting memories
                and build relationships that extend far beyond a single stay.
              </p>
            </div>
            <div className="animate-on-scroll">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be recognized as the premier luxury hotel destination, setting the standard for excellence in
                hospitality. We envision a future where Grand Palace Hotel continues to evolve while maintaining our
                core values of elegance, service, and genuine care for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the exceptional experience we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Genuine Care",
                description: "We treat every guest as family, with warmth and personal attention.",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Excellence",
                description: "We pursue perfection in every detail, from service to amenities.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical practices.",
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Sustainability",
                description: "We are committed to environmental responsibility and community support.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-500">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of hospitality expertise and passion for service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-on-scroll">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by prestigious organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-500">{achievement.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-blue-500 font-medium">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Prime Location</h2>
              <p className="text-lg text-gray-600 mb-6">
                Strategically located in the heart of the city's business and cultural district, Grand Palace Hotel
                offers unparalleled access to major attractions, shopping, dining, and entertainment venues.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">123 Luxury Avenue, Downtown District</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">5 minutes to Financial District</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Walking distance to cultural attractions</span>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-blue-500 hover:bg-blue-600">Get Directions</Button>
              </div>
            </div>
            <div className="animate-on-scroll">
              {/* Google Maps Embed Placeholder */}
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Grand Palace Hotel Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Experience Our Legacy</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the thousands of guests who have made Grand Palace Hotel their home away from home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-500 hover:bg-gray-100">
                Book Your Stay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
