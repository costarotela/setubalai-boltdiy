import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomSolutions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">Custom AI Solutions</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            We develop tailored AI solutions that address your specific business challenges. Our team of experts creates custom AI models and applications that integrate seamlessly with your existing systems.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Our Solutions</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Custom AI Model Development
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Natural Language Processing
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Computer Vision Applications
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Predictive Analytics
              </li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Link to="/contact" className="btn-primary">
              Request Solution
            </Link>
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Development Process</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <i className="fas fa-1 text-accent mr-2"></i>
                Requirements Analysis
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-2 text-accent mr-2"></i>
                Solution Design
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-3 text-accent mr-2"></i>
                Development & Testing
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-4 text-accent mr-2"></i>
                Deployment & Integration
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• TensorFlow</div>
              <div className="text-gray-600">• PyTorch</div>
              <div className="text-gray-600">• OpenAI</div>
              <div className="text-gray-600">• Azure AI</div>
              <div className="text-gray-600">• Google Cloud AI</div>
              <div className="text-gray-600">• AWS AI Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
