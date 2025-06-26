"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Star, Utensils, Coffee } from "lucide-react"

export default function RestaurantPage() {
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

  const menuCategories = [
    {
      name: "Appetizers",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        { name: "Truffle Arancini", description: "Crispy risotto balls with black truffle and parmesan", price: "$18" },
        {
          name: "Seared Scallops",
          description: "Pan-seared scallops with cauliflower puree and pancetta",
          price: "$24",
        },
        { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil oil", price: "$16" },
        { name: "Tuna Tartare", description: "Yellowfin tuna with avocado, citrus, and sesame", price: "$22" },
      ],
    },
    {
      name: "Main Courses",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "Grilled wagyu with roasted vegetables and red wine jus",
          price: "$65",
        },
        { name: "Lobster Thermidor", description: "Classic preparation with cognac cream sauce", price: "$48" },
        {
          name: "Duck Confit",
          description: "Slow-cooked duck leg with cherry gastrique and potato gratin",
          price: "$38",
        },
        { name: "Seafood Risotto", description: "Arborio rice with mixed seafood and saffron", price: "$32" },
      ],
    },
    {
      name: "Desserts",
      icon: <Coffee className="h-6 w-6" />,
      items: [
        { name: "Chocolate Soufflé", description: "Warm chocolate soufflé with vanilla ice cream", price: "$14" },
        { name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar", price: "$12" },
        { name: "Tiramisu", description: "Traditional Italian dessert with espresso and mascarpone", price: "$13" },
        { name: "Seasonal Fruit Tart", description: "Fresh seasonal fruits with pastry cream", price: "$11" },
      ],
    },
  ]

  const specialDishes = [
    {
      name: "Chef's Tasting Menu",
      description: "A curated 7-course journey featuring seasonal ingredients and innovative techniques",
      price: "$125",
      image: "/images/fine-dining.jpg",
      badge: "Chef's Special",
    },
    {
      name: "Surf & Turf Deluxe",
      description: "Premium lobster tail and wagyu steak with truffle butter and seasonal vegetables",
      price: "$85",
      image: "/images/fine-dining.jpg",
      badge: "Signature Dish",
    },
    {
      name: "Vegetarian Tasting",
      description: "Plant-based 5-course menu showcasing local organic produce and creative preparations",
      price: "$75",
      image: "/images/fine-dining.jpg",
      badge: "Vegetarian",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/restaurant-interior.jpg" alt="Restaurant Interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Le Grand Restaurant</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Experience culinary excellence with our award-winning cuisine and exceptional service.
          </p>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Award-Winning Dining Experience</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our executive chef brings over 20 years of culinary expertise to create innovative dishes that blend
                international flavors with local ingredients. Every meal is a celebration of taste, presentation, and
                hospitality.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-semibold">Breakfast: 6:30 AM - 10:30 AM</div>
                    <div className="font-semibold">Lunch: 12:00 PM - 3:00 PM</div>
                    <div className="font-semibold">Dinner: 6:00 PM - 11:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Ground Floor, Grand Palace Hotel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>+1 (555) 123-4567 ext. 2</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-blue-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">Michelin Recommended</span>
              </div>
            </div>
            <div className="animate-on-scroll">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Restaurant Interior"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Signature Dishes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most celebrated creations, crafted with the finest ingredients and innovative techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialDishes.map((dish, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-on-scroll">
                <div className="relative h-64">
                  <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500 text-white">{dish.badge}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{dish.name}</h3>
                    <div className="text-2xl font-bold text-blue-500">{dish.price}</div>
                  </div>
                  <p className="text-gray-600 mb-6">{dish.description}</p>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    onClick={() => alert("Order functionality will be implemented")}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of dishes, each prepared with passion and precision.
            </p>
          </div>

          <div className="space-y-12">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-on-scroll">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                        <span className="text-xl font-bold text-blue-500">{item.price}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dining Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our elegant dining spaces and exquisite culinary creations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative h-64 animate-on-scroll">
                <Image
                  src={index % 2 === 0 ? "/images/restaurant-interior.jpg" : "/images/fine-dining.jpg"}
                  alt={`Restaurant Gallery ${index + 1}`}
                  fill
                  className="object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Ready to Dine With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Reserve your table now and experience culinary excellence at Le Grand Restaurant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-500 hover:bg-gray-100"
                onClick={() => alert("Reservation system will be implemented")}
              >
                Make Reservation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500"
              >
                Call: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
