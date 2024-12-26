import React from 'react'
import { Search, Calendar, CheckCircle, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

//basic steps to make the user understand abt the site
const steps = [
  { icon: <Search className="w-8 h-8 text-blue-500" />, text: "Search for venues based on your requirements" },
  { icon: <Calendar className="w-8 h-8 text-green-500" />, text: "Choose a date and book your preferred venue" },
  { icon: <CheckCircle className="w-8 h-8 text-purple-500" />, text: "Confirm booking details and make payment" },
  { icon: <MessageCircle className="w-8 h-8 text-orange-500" />, text: "Communicate with the venue for specific needs" }
]

//fake user testimonials lol
const testimonials = [
  { quote: "Found the perfect venue for my wedding in no time!", author: "Sarah J." },
  { quote: "Great selection of venues for corporate events. Highly recommended!", author: "Michael T." },
]

//fake reasons even more lol
const reasons = [
  "Wide variety of venues for all types of events",
  "Real-time availability and instant booking",
  "Secure payment processing",
  "24/7 customer support"
]

//the main function
export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-gray-900">How It Works</h1>

        {/* Explanation about how the site works */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Booking Your Venue</h2>
          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-4">{step.icon}</div>
                <span>{step.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* User Testimonials */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">What Our Users Say</h2>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <p className="italic">"{testimonial.quote}"</p>
                <p className="text-right font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us content goes here */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-2">
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <a
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <Link to='/venue'>Start Booking Now!</Link>
          </a>
        </div>
      </div>
    </div>
  )
}