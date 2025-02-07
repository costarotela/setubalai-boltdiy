import React from 'react'

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">Dashboard</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to your dashboard</h2>
        <p className="text-gray-600">
          This is your personal dashboard where you can manage your AI services and track implementation progress.
        </p>
      </div>
    </div>
  )
}
