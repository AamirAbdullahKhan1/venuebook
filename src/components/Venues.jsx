import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin, Users, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

//mock data for the venues - - - can be added more (img links => unsplash)
const venuesData = [
  { id: 1, name: 'Grand Ballroom', capacity: 500, location: 'Main Building', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1498&ixlib=rb-4.0.3' },
  { id: 2, name: 'Lecture Hall A', capacity: 200, location: 'Science Block', image: 'https://images.unsplash.com/photo-1702763529935-f4f7b4df3380?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Sports Complex', capacity: 1000, location: 'East Campus', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3' },
  { id: 4, name: 'Conference Room 1', capacity: 50, location: 'Admin Building', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3' },
  { id: 5, name: 'Outdoor Amphitheatre', capacity: 300, location: 'Central Garden', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3' },
  { id: 6, name: 'Art Gallery', capacity: 100, location: 'Creative Arts Center', image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3' },
  { id: 7, name: 'Auditorium', capacity: 400, location: 'Main Block East', image: 'https://images.unsplash.com/photo-1533483996897-a8dde9930141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, name: 'Modern Amphitheatre', capacity: 300, location: 'West Park Main', image: 'https://images.unsplash.com/photo-1583062434105-9bef71509685?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, name: 'Lecture Hall B', capacity: 150, location: 'Techno Block', image: 'https://images.unsplash.com/photo-1603239230811-72ce793c4393?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

const VenueCard = ({ venue }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{venue.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span>Capacity: {venue.capacity}</span>
        </div>
      </div>
      <div className="px-4 py-2 bg-blue-500 text-white">
        <button className="w-full flex items-center justify-center">
          <Calendar className="w-4 h-4 mr-2" />
          <Link to='/booking'>Book Now</Link>
        </button>
      </div>
    </motion.div>
  )
}

export default function Venues() {
  const [venues, setVenues] = useState(venuesData)
  const [searchTerm, setSearchTerm] = useState('')
  const [capacityFilter, setCapacityFilter] = useState('')

  useEffect(() => {
    const filtered = venuesData.filter(venue => 
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (capacityFilter === '' || venue.capacity >= parseInt(capacityFilter))
    )
    setVenues(filtered)
  }, [searchTerm, capacityFilter])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center uppercase">Explore Our Venues</h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search venues..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border-l-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          
          <div className="relative w-full sm:w-64">
            <select
              className="w-full pl-10 pr-4 py-2 rounded-lg border appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={capacityFilter}
              onChange={(e) => setCapacityFilter(e.target.value)}
            >
              <option value="">All Capacities</option>
              <option value="50">50+</option>
              <option value="100">100+</option>
              <option value="200">200+</option>
              <option value="500">500+</option>
            </select>
            <Filter className="absolute left-3 top-2.5 text-gray-400" />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/*framer is used to make the cards hover*/}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <VenueCard venue={venue} />
            </motion.div>
          ))}
        </motion.div>

        {venues.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-8"
          >
            No venues found matching your criteria.
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}