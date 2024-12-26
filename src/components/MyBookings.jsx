import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react'


const mockBookings = [
  { id: 1, venueName: 'Grand Ballroom', date: '2024-03-15', time: '18:00-22:00', status: 'Confirmed', guests: 150, location: 'Main Building' },
  { id: 2, venueName: 'Conference Room A', date: '2024-03-20', time: '09:00-17:00', status: 'Pending', guests: 30, location: 'East Wing' },
  { id: 3, venueName: 'Outdoor Amphitheater', date: '2024-04-05', time: '19:00-23:00', status: 'Confirmed', guests: 500, location: 'Garden Area' },
  { id: 4, venueName: 'Lecture Hall 101', date: '2024-04-10', time: '14:00-16:00', status: 'Cancelled', guests: 80, location: 'Academic Building' },
  { id: 5, venueName: 'Sports Complex', date: '2024-05-01', time: '10:00-18:00', status: 'Confirmed', guests: 200, location: 'North Campus' },
]

const BookingCard = ({ booking, isExpanded, toggleExpand }) => {
  const statusColors = {
    Confirmed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Cancelled: 'bg-red-100 text-red-800',
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
    >
      <div className="p-4 cursor-pointer" onClick={toggleExpand}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{booking.venueName}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[booking.status]}`}>
            {booking.status}
          </span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          {booking.date}
        </div>
        <div className="mt-1 flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          {booking.time}
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <div className="border-t pt-2">
              <div className="mt-2 flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {booking.location}
              </div>
              <div className="mt-1 flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                {booking.guests} guests
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  Modify
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function MyBookings() {
  const [expandedId, setExpandedId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sortBy, setSortBy] = useState('date')

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const filteredAndSortedBookings = mockBookings
    .filter(booking => 
      booking.venueName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'All' || booking.status === statusFilter)
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date) - new Date(b.date)
      } else if (sortBy === 'venue') {
        return a.venueName.localeCompare(b.venueName)
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search venues..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          
          <div className="flex space-x-4 w-full sm:w-auto">
            <select
              className="w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            
            <select
              className="w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="venue">Sort by Venue</option>
            </select>
          </div>
        </div>
        
        <AnimatePresence>
          {filteredAndSortedBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              isExpanded={expandedId === booking.id}
              toggleExpand={() => toggleExpand(booking.id)}
            />
          ))}
        </AnimatePresence>
        
        {filteredAndSortedBookings.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-8"
          >
            No bookings found matching your criteria.
          </motion.p>
        )}
      </div>
    </div>
  )
}