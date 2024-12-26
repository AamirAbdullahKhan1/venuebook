import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, AlertCircle, BarChart2, Settings,LogIn, Users, Building } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock data for demonstration
const pendingRequests = [
  { id: 1, user: "John Doe", venue: "Grand Ballroom", date: "2024-05-15", time: "18:00-22:00" },
  { id: 2, user: "Jane Smith", venue: "Conference Room A", date: "2024-05-20", time: "09:00-17:00" },
  { id: 3, user: "Bob Johnson", venue: "Outdoor Amphitheater", date: "2024-06-01", time: "19:00-23:00" },
] 

const recentActivity = [
  { id: 1, action: "Booking Approved", user: "Alice Brown", venue: "Lecture Hall 101", date: "2024-05-10" },
  { id: 2, action: "Booking Rejected", user: "Charlie Davis", venue: "Sports Complex", date: "2024-05-09" },
  { id: 3, action: "New Venue Added", user: "Admin", venue: "Rooftop Lounge", date: "2024-05-08" },
]

const TabButton = ({ icon, label, isActive, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 rounded-lg ${
      isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
)

const RequestCard = ({ request, onApprove, onReject }) => (
  <div className="bg-white p-4 rounded-lg shadow mb-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">{request.venue}</h3>
      <span className="text-sm text-gray-500">{request.date}</span>
    </div>
    <p className="text-gray-600 mb-2">Requested by: {request.user}</p>
    <p className="text-gray-600 mb-4">Time: {request.time}</p>
    <div className="flex justify-end space-x-2">
      <button
        onClick={() => onReject(request.id)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
      >
        Reject
      </button>
      <button
        onClick={() => onApprove(request.id)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
      >
        Approve
      </button>
    </div>
  </div>
)

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('requests')
  const [requests, setRequests] = useState(pendingRequests)

  const handleApprove = (id) => {
    setRequests(requests.filter(request => request.id !== id))
    // Here you would typically make an API call to update the request status
  }

  const handleReject = (id) => {
    setRequests(requests.filter(request => request.id !== id))
    // Here you would typically make an API call to update the request status
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-gray-900 uppercase">Admin Panel</h1>
        <h1 className="text-[16px] font-bold font-poppins border-2 border-slate-600 py-2 px-3 rounded-lg  text-black hover:bg-slate-600 duration-300 hover:text-white uppercase ml-auto cursor-pointer">
        <Link to='/'>Logout</Link>
      </h1>
    </div>
  </div>
</div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex space-x-4 mb-6">
            <TabButton
              icon={<AlertCircle className="w-5 h-5" />}
              label="Pending Requests"
              isActive={activeTab === 'requests'}
              onClick={() => setActiveTab('requests')}
            />
            <TabButton
              icon={<BarChart2 className="w-5 h-5" />}
              label="Analytics"
              isActive={activeTab === 'analytics'}
              onClick={() => setActiveTab('analytics')}
            />
            <TabButton
              icon={<Building className="w-5 h-5" />}
              label="Manage Venues"
              isActive={activeTab === 'venues'}
              onClick={() => setActiveTab('venues')}
            />
            <TabButton
              icon={<Users className="w-5 h-5" />}
              label="User Management"
              isActive={activeTab === 'users'}
              onClick={() => setActiveTab('users')}
            />
            <TabButton
              icon={<Settings className="w-5 h-5" />}
              label="Settings"
              isActive={activeTab === 'settings'}
              onClick={() => setActiveTab('settings')}
            />
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            {activeTab === 'requests' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-4">Pending Venue Requests</h2>
                {requests.map(request => (
                  <RequestCard
                    key={request.id}
                    request={request}
                    onApprove={handleApprove}
                    onReject={handleReject}
                  />
                ))}
                {requests.length === 0 && (
                  <p className="text-gray-500 text-center">No pending requests</p>
                )}
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Total Bookings</h3>
                    <p className="text-3xl font-bold">1,234</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                    <p className="text-3xl font-bold">$45,678</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                    <p className="text-3xl font-bold">567</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'venues' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-4">Manage Venues</h2>
                <p className="text-gray-500">Venue management features would go here.</p>
              </motion.div>
            )}

            {activeTab === 'users' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-4">User Management</h2>
                <p className="text-gray-500">User management features would go here.</p>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-4">Admin Settings</h2>
                <p className="text-gray-500">Admin settings and configuration options would go here.</p>
              </motion.div>
            )}
          </div>

          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              {recentActivity.map(activity => (
                <li key={activity.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-semibold">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.user} - {activity.venue}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}