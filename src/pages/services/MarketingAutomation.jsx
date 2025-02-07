import React from 'react'
import { Link } from 'react-router-dom'

export default function MarketingAutomation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">Automatización de marketing con IA</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Automatice y optimice sus procesos de marketing con nuestra plataforma de IA, permitiéndole escalar sus operaciones mientras mantiene una comunicación personalizada con sus clientes.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Características Principales</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Flujos de trabajo automatizados
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Gestión inteligente de leads
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Campañas multicanal automatizadas
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Seguimiento y nurturing automático
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
                Ahorro de tiempo y recursos
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Mayor eficiencia operativa
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Escalabilidad mejorada
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Consistencia en la comunicación
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Automatizaciones Disponibles</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• Email Marketing</div>
              <div className="text-gray-600">• Social Media</div>
              <div className="text-gray-600">• Lead Scoring</div>
              <div className="text-gray-600">• CRM</div>
              <div className="text-gray-600">• Analytics</div>
              <div className="text-gray-600">• Reporting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
