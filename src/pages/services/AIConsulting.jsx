import React from 'react'
import { Link } from 'react-router-dom'

export default function AIConsulting() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">AI Consulting Services</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Our AI consulting services help businesses navigate the complex landscape of artificial intelligence implementation. We provide expert guidance to ensure your AI initiatives align with your business objectives.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Our Approach</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Comprehensive business process analysis
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                AI readiness assessment
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Strategic implementation roadmap
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                ROI analysis and optimization
              </li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Reduced implementation risks
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Faster time to market
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Optimized resource allocation
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Clear implementation strategy
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Industries We Serve</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• Healthcare</div>
              <div className="text-gray-600">• Finance</div>
              <div className="text-gray-600">• Manufacturing</div>
              <div className="text-gray-600">• Retail</div>
              <div className="text-gray-600">• Technology</div>
              <div className="text-gray-600">• Education</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
