import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Grand Palace</h3>
                <p className="text-xs text-gray-400">HOTEL</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Experience luxury and comfort at Grand Palace Hotel. Your perfect getaway awaits.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-white transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="text-gray-400 hover:text-white transition-colors">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Free Wi-Fi</li>
              <li className="text-gray-400">Swimming Pool</li>
              <li className="text-gray-400">Spa & Wellness</li>
              <li className="text-gray-400">Fitness Center</li>
              <li className="text-gray-400">24/7 Room Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">123 Luxury Ave, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">info@grandpalacehotel.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Grand Palace Hotel. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
