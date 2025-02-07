import React from 'react'
import { Link } from 'react-router-dom'

export default function Training() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">AI Training & Support</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Our comprehensive training and support services ensure your team has the knowledge and skills needed to effectively utilize AI technologies in your organization.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Training Programs</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                AI Fundamentals Workshop
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Technical Implementation Training
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Best Practices Sessions
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Hands-on Project Training
              </li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Link to="/contact" className="btn-primary">
              Schedule Training
            </Link>
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Support Services</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                24/7 Technical Support
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Regular Maintenance
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Performance Monitoring
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                System Updates
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Training Methods</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• On-site Training</div>
              <div className="text-gray-600">• Virtual Sessions</div>
              <div className="text-gray-600">• Workshops</div>
              <div className="text-gray-600">• Webinars</div>
              <div className="text-gray-600">• Documentation</div>
              <div className="text-gray-600">• Video Tutorials</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
