import React from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Your Perfect Venue
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Discover and book amazing spaces for your next event
        </motion.p>
        
        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for venues..."
              className="w-full px-4 py-3 rounded-full text-gray-900 bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a 
            href="/venue" 
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Explore Venues
          </a>
          <a            
            className="inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <Link to='/howitworks'>How It Works</Link>
          </a>
        </motion.div>
      </div>
    </div>
  )
}