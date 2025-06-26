"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageCircle } from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")

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

  const categories = ["All", "Reservations", "Check-in/Check-out", "Amenities", "Dining", "Policies", "Services"]

  const faqs = [
    {
      id: 1,
      category: "Reservations",
      question: "How can I make a reservation?",
      answer:
        "You can make a reservation through our website, by calling our reservations team at +1 (555) 123-4567, or by visiting the hotel directly. We recommend booking in advance, especially during peak seasons.",
    },
    {
      id: 2,
      category: "Reservations",
      question: "What is your cancellation policy?",
      answer:
        "Reservations can be cancelled up to 24 hours before your arrival date without penalty. Cancellations made within 24 hours of arrival will be charged one night's room rate. Special rates and packages may have different cancellation policies.",
    },
    {
      id: 3,
      category: "Check-in/Check-out",
      question: "What are your check-in and check-out times?",
      answer:
        "Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability. Additional charges may apply for late check-out.",
    },
    {
      id: 4,
      category: "Check-in/Check-out",
      question: "Do you offer early check-in or late check-out?",
      answer:
        "Yes, we offer early check-in from 1:00 PM and late check-out until 2:00 PM based on availability. Early check-in is complimentary, while late check-out may incur a fee of $50. Please contact the front desk to arrange.",
    },
    {
      id: 5,
      category: "Amenities",
      question: "Is Wi-Fi available throughout the hotel?",
      answer:
        "Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms, public areas, restaurants, and meeting facilities. The network name is 'GrandPalace-Guest' and no password is required.",
    },
    {
      id: 6,
      category: "Amenities",
      question: "Do you have a fitness center and spa?",
      answer:
        "Yes, we have a 24-hour state-of-the-art fitness center and a full-service luxury spa. The fitness center is complimentary for all guests. Spa services require advance booking and additional charges apply.",
    },
    {
      id: 7,
      category: "Amenities",
      question: "Is parking available at the hotel?",
      answer:
        "Yes, we offer complimentary valet parking for all hotel guests. Self-parking is also available in our secure underground garage. Electric vehicle charging stations are available upon request.",
    },
    {
      id: 8,
      category: "Dining",
      question: "What dining options are available?",
      answer:
        "We have Le Grand Restaurant offering fine dining, a casual café, room service available 24/7, and a rooftop bar. Our restaurant serves breakfast (6:30 AM - 10:30 AM), lunch (12:00 PM - 3:00 PM), and dinner (6:00 PM - 11:00 PM).",
    },
    {
      id: 9,
      category: "Dining",
      question: "Do you accommodate special dietary requirements?",
      answer:
        "Our chefs can accommodate various dietary restrictions including vegetarian, vegan, gluten-free, kosher, and halal options. Please inform us of any dietary requirements when making your reservation or upon arrival.",
    },
    {
      id: 10,
      category: "Policies",
      question: "What is your pet policy?",
      answer:
        "We are a pet-friendly hotel! We welcome dogs and cats under 50 pounds with a one-time pet fee of $75. Pet amenities include beds, bowls, and treats. Please inform us when booking if you'll be traveling with a pet.",
    },
    {
      id: 11,
      category: "Policies",
      question: "Do you allow smoking in the hotel?",
      answer:
        "Grand Palace Hotel is a non-smoking property. Smoking is prohibited in all guest rooms and indoor areas. Designated smoking areas are available on the outdoor terrace. A cleaning fee of $250 applies for smoking violations.",
    },
    {
      id: 12,
      category: "Services",
      question: "Do you provide airport transportation?",
      answer:
        "Yes, we offer complimentary airport shuttle service every 30 minutes from 5:00 AM to 12:00 AM. Luxury car transfers are also available for an additional fee. Please contact the concierge to arrange transportation.",
    },
    {
      id: 13,
      category: "Services",
      question: "Is there a business center available?",
      answer:
        "Yes, our 24-hour business center offers computers, printers, fax machines, and high-speed internet. We also have meeting rooms available for rent and provide secretarial services upon request.",
    },
    {
      id: 14,
      category: "Amenities",
      question: "What are the pool hours?",
      answer:
        "Our rooftop infinity pool is open daily from 6:00 AM to 11:00 PM. Pool towels are provided, and poolside food and beverage service is available from 10:00 AM to 8:00 PM.",
    },
    {
      id: 15,
      category: "Reservations",
      question: "Can I modify my reservation?",
      answer:
        "Yes, reservations can be modified subject to availability. Changes to dates, room type, or number of guests can be made up to 24 hours before arrival. Some rate restrictions may apply.",
    },
    {
      id: 16,
      category: "Services",
      question: "Do you offer laundry and dry cleaning services?",
      answer:
        "Yes, we provide same-day laundry and dry cleaning services Monday through Friday. Weekend service is available with next-day delivery. A detailed price list is available in your room.",
    },
    {
      id: 17,
      category: "Policies",
      question: "What forms of payment do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), cash, and traveler's checks. A valid credit card is required at check-in for incidental charges.",
    },
    {
      id: 18,
      category: "Check-in/Check-out",
      question: "Can I store my luggage before check-in or after check-out?",
      answer:
        "Yes, complimentary luggage storage is available at the front desk before check-in and after check-out. Our bell staff will be happy to assist you with your luggage.",
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/faq-hero.jpg" alt="FAQ" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about Grand Palace Hotel. Can't find what you're looking for? Contact us
            directly.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8 animate-on-scroll">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12 animate-on-scroll">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No FAQs Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any FAQs matching your search criteria. Try adjusting your search or category filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden animate-on-scroll">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                        </div>
                        <div className="ml-4">
                          {openItems.includes(faq.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </button>
                      {openItems.includes(faq.id) && (
                        <div className="px-6 pb-6">
                          <div className="border-t pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our friendly staff is available 24/7 to help you with any questions or concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <p className="font-semibold text-blue-500">+1 (555) 123-4567</p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed answers via email</p>
                <p className="font-semibold text-blue-500">info@grandpalacehotel.com</p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Send Email</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with us in real-time</p>
                <p className="font-semibold text-blue-500">Available 24/7</p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600">Start Chat</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick access to our most frequently asked questions by category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.slice(1).map((category, index) => {
              const categoryCount = faqs.filter((faq) => faq.category === category).length
              return (
                <Card
                  key={category}
                  className="hover:shadow-lg transition-shadow cursor-pointer animate-on-scroll"
                  onClick={() => setSelectedCategory(category)}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {categoryCount} question{categoryCount !== 1 ? "s" : ""} available
                    </p>
                    <Button variant="outline" className="w-full">
                      View Questions
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Now that you have all the information you need, book your perfect stay at Grand Palace Hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-500 hover:bg-gray-100">
                Book Now
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
