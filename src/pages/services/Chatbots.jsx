import React from 'react'
import { Link } from 'react-router-dom'

export default function Chatbots() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">Chatbots de IA para atención al cliente</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Mejore la experiencia de sus clientes con nuestros chatbots inteligentes que proporcionan atención instantánea y personalizada 24/7, aumentando la satisfacción del cliente y reduciendo costos operativos.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Características Principales</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Respuestas en lenguaje natural
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Aprendizaje continuo
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Integración multicanal
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Personalización avanzada
              </li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Link to="/contact" className="btn-primary">
              Solicitar Demo
            </Link>
            <Link to="/services" className="btn-secondary">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Beneficios</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Atención 24/7
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Reducción de costos operativos
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Mayor satisfacción del cliente
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Escalabilidad instantánea
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Canales Soportados</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• Website</div>
              <div className="text-gray-600">• WhatsApp</div>
              <div className="text-gray-600">• Facebook</div>
              <div className="text-gray-600">• Instagram</div>
              <div className="text-gray-600">• Telegram</div>
              <div className="text-gray-600">• SMS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
