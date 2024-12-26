import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Calendar, MapPin, User, Bell, LogIn } from 'lucide-react';
import { auth, signOut, onAuthStateChanged } from './firebase';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); //hamburger menu toggle function in smaller screens
  const [user, setUser] = useState(null);

  const toggleMenu = () => { //the toggle menu
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; 
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null); 
    }).catch(error => console.error('Logout error:', error));
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-semibold"><Link to='/'>VenueBook</Link></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
                <Link to='/venue' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Venues
                </Link>
                <Link to='/mybookings' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  My Bookings
                </Link>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <>
                  <span className="text-gray-300 mr-4">Hello, {user.name || user.email}</span>
                  <button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <LogIn className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <Link to='/venue' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Venues
            </Link>
            <Link to='/bookings' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              My Bookings
            </Link>
          </div>

          <div className="pt-4 pb-3 border-t border-gray-700">
            {user ? (
              <>
                <div className="flex items-center px-5">
                  <User className="h-10 w-10 rounded-full text-gray-400" />
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.displayName || "User Name"}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <button onClick={handleLogout} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Logout</button>
                </div>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
