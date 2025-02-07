import React from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <nav className="bg-secondary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl tracking-wider">SETUBALAI</Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <Link to="/login" className="hover:text-accent transition-colors">Login</Link>
            <button onClick={handleLogout} className="hover:text-accent transition-colors">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
