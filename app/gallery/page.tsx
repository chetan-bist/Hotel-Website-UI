"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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

  const categories = ["All", "Rooms", "Restaurant", "Spa", "Pool", "Events", "Exterior"]

  const galleryImages = [
    {
      id: 1,
      src: "/images/presidential-suite.jpg",
      category: "Rooms",
      title: "Presidential Suite Living Room",
      description: "Elegant living space with panoramic city views",
    },
    {
      id: 2,
      src: "/images/restaurant-interior.jpg",
      category: "Restaurant",
      title: "Le Grand Restaurant",
      description: "Fine dining experience with exquisite ambiance",
    },
    {
      id: 3,
      src: "/images/infinity-pool.jpg",
      category: "Pool",
      title: "Rooftop Infinity Pool",
      description: "Stunning rooftop pool with city skyline views",
    },
    {
      id: 4,
      src: "/images/spa-treatment.jpg",
      category: "Spa",
      title: "Luxury Spa Treatment Room",
      description: "Tranquil space for ultimate relaxation",
    },
    {
      id: 5,
      src: "/images/executive-suite.jpg",
      category: "Rooms",
      title: "Executive Suite Bedroom",
      description: "Comfortable and elegant sleeping quarters",
    },
    {
      id: 6,
      src: "/images/business-meeting.jpg",
      category: "Events",
      title: "Grand Ballroom",
      description: "Perfect venue for weddings and corporate events",
    },
    {
      id: 7,
      src: "/images/hotel-exterior.jpg",
      category: "Exterior",
      title: "Hotel Facade at Night",
      description: "Stunning architectural beauty illuminated",
    },
    {
      id: 8,
      src: "/images/fine-dining.jpg",
      category: "Restaurant",
      title: "Chef's Table Experience",
      description: "Exclusive dining with the executive chef",
    },
    {
      id: 9,
      src: "/images/deluxe-room.jpg",
      category: "Rooms",
      title: "Deluxe Room Bathroom",
      description: "Marble bathroom with luxury amenities",
    },
    {
      id: 10,
      src: "/images/infinity-pool.jpg",
      category: "Pool",
      title: "Pool Deck Lounge",
      description: "Relaxing poolside cabanas and seating",
    },
    {
      id: 11,
      src: "/images/spa-treatment.jpg",
      category: "Spa",
      title: "Spa Reception Area",
      description: "Welcoming entrance to our wellness sanctuary",
    },
    {
      id: 12,
      src: "/images/business-meeting.jpg",
      category: "Events",
      title: "Business Meeting Room",
      description: "Modern facilities for corporate gatherings",
    },
    {
      id: 13,
      src: "/images/hotel-exterior.jpg",
      category: "Exterior",
      title: "Hotel Garden Terrace",
      description: "Beautiful landscaped outdoor spaces",
    },
    {
      id: 14,
      src: "/images/restaurant-interior.jpg",
      category: "Restaurant",
      title: "Wine Cellar",
      description: "Extensive collection of fine wines",
    },
    {
      id: 15,
      src: "/images/executive-suite.jpg",
      category: "Rooms",
      title: "Honeymoon Suite",
      description: "Romantic setting for special occasions",
    },
    {
      id: 16,
      src: "/images/hotel-exterior.jpg",
      category: "Events",
      title: "Rooftop Event Space",
      description: "Open-air venue with spectacular views",
    },
  ]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? filteredImages.find((img) => img.id === selectedImage) : null

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/gallery-hero.jpg" alt="Hotel Gallery" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore the beauty and elegance of Grand Palace Hotel through our curated collection of images.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Photo Gallery</h2>
            <div className="flex flex-wrap justify-center gap-3">
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-on-scroll"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-blue-500 text-white">{image.category}</Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 animate-on-scroll">
            <Button
              variant="outline"
              className="bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
            >
              Load More Images
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.title}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{selectedImageData.title}</h3>
                    <p className="text-gray-300">{selectedImageData.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">Experience It Yourself</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              These images only capture a glimpse of the Grand Palace Hotel experience. Book your stay to discover the
              full luxury.
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
                Take a Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
