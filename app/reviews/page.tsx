"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ThumbsUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReviewsPage() {
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

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar: "/images/hotel-lobby.jpg",
      rating: 5,
      date: "2024-01-15",
      title: "Absolutely Perfect Stay",
      review:
        "From the moment we arrived, the service was impeccable. The staff went above and beyond to make our anniversary celebration special. The room was stunning with breathtaking city views, and the restaurant exceeded all expectations. We will definitely be returning!",
      helpful: 24,
      verified: true,
      stayType: "Romantic Getaway",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, USA",
      avatar: "/images/business-meeting.jpg",
      rating: 5,
      date: "2024-01-10",
      title: "Business Trip Excellence",
      review:
        "Perfect for business travelers. The business center is well-equipped, WiFi is lightning fast, and the concierge helped arrange all my meetings. The executive lounge access was a great perk. Highly recommend for corporate stays.",
      helpful: 18,
      verified: true,
      stayType: "Business",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Miami, USA",
      avatar: "/images/spa-treatment.jpg",
      rating: 5,
      date: "2024-01-08",
      title: "Luxury at Its Finest",
      review:
        "The spa services were incredible - I felt completely rejuvenated. The infinity pool with city views is absolutely stunning, especially at sunset. Every detail was perfect, from the Egyptian cotton sheets to the personalized service.",
      helpful: 31,
      verified: true,
      stayType: "Leisure",
    },
    {
      id: 4,
      name: "James Wilson",
      location: "London, UK",
      avatar: "/images/deluxe-room.jpg",
      rating: 5,
      date: "2024-01-05",
      title: "Exceptional Family Experience",
      review:
        "Traveled with my family including two young children. The staff was incredibly accommodating, providing cribs, high chairs, and even arranged babysitting so my wife and I could enjoy a romantic dinner. The kids loved the pool!",
      helpful: 22,
      verified: true,
      stayType: "Family",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Toronto, Canada",
      avatar: "/images/hotel-exterior.jpg",
      rating: 5,
      date: "2024-01-03",
      title: "Wedding Weekend Perfection",
      review:
        "Hosted our wedding weekend here and it was absolutely magical. The event coordinator was phenomenal, handling every detail flawlessly. Our guests are still raving about the experience. Thank you for making our special day perfect!",
      helpful: 45,
      verified: true,
      stayType: "Special Event",
    },
    {
      id: 6,
      name: "Robert Davis",
      location: "Chicago, USA",
      avatar: "/images/restaurant-interior.jpg",
      rating: 4,
      date: "2023-12-28",
      title: "Great Stay with Minor Issues",
      review:
        "Overall excellent experience. The room was beautiful and the location perfect. Only minor issue was the elevator wait times during peak hours. The restaurant food was outstanding and the staff very professional.",
      helpful: 12,
      verified: true,
      stayType: "Leisure",
    },
  ]

  const stats = [
    { label: "Overall Rating", value: "4.9", icon: <Star className="h-6 w-6" /> },
    { label: "Total Reviews", value: "2,847", icon: <Quote className="h-6 w-6" /> },
    { label: "Recommend Rate", value: "98%", icon: <ThumbsUp className="h-6 w-6" /> },
    { label: "Return Guests", value: "76%", icon: <Award className="h-6 w-6" /> },
  ]

  const ratingBreakdown = [
    { stars: 5, count: 2456, percentage: 86 },
    { stars: 4, count: 312, percentage: 11 },
    { stars: 3, count: 58, percentage: 2 },
    { stars: 2, count: 15, percentage: 1 },
    { stars: 1, count: 6, percentage: 0 },
  ]

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-blue-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/reviews-hero.jpg" alt="Guest Reviews" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Guest Reviews</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover what our guests are saying about their experiences at Grand Palace Hotel.
          </p>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guest Satisfaction</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the outstanding feedback from our valued guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-on-scroll">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-500">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rating Breakdown */}
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Rating Breakdown</h3>
                <div className="space-y-4">
                  {ratingBreakdown.map((rating) => (
                    <div key={rating.stars} className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 w-16">
                        <span className="text-sm font-medium">{rating.stars}</span>
                        <Star className="h-4 w-4 text-blue-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${rating.percentage}%` }} />
                      </div>
                      <div className="text-sm text-gray-600 w-16 text-right">
                        {rating.count} ({rating.percentage}%)
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read authentic reviews from guests who have experienced the Grand Palace Hotel difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow animate-on-scroll">
                <CardContent className="p-8">
                  {/* Guest Review Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      {review.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">{renderStars(review.rating)}</div>
                          <p className="text-xs text-gray-500">{formatDate(review.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {review.stayType}
                        </span>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Verified Stay
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{review.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{review.review}</p>
                  </div>

                  {/* Review Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{review.helpful} found this helpful</span>
                    </div>
                    <div className="text-xs text-gray-400">Stayed in {formatDate(review.date).split(",")[0]}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We'd love to hear about your stay at Grand Palace Hotel. Your feedback helps us continue to provide
              exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-500 hover:bg-gray-100">
                Write a Review
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-500"
              >
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
