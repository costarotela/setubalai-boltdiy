import React from 'react'
import { Link } from 'react-router-dom'

export default function ContentPersonalization() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">Personalización de contenido con IA</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Ofrezca experiencias únicas a cada usuario con nuestra tecnología de personalización de contenido impulsada por IA, que adapta automáticamente el contenido según los intereses y comportamientos individuales.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Características Principales</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Recomendaciones dinámicas de contenido
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Personalización en tiempo real
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Adaptación automática de mensajes
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Optimización de experiencia del usuario
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
                Mayor engagement del usuario
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Incremento en tiempo de permanencia
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Mejora en tasas de conversión
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Experiencia de usuario mejorada
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Tipos de Contenido</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• Páginas web</div>
              <div className="text-gray-600">• Emails</div>
              <div className="text-gray-600">• Blogs</div>
              <div className="text-gray-600">• Productos</div>
              <div className="text-gray-600">• Ofertas</div>
              <div className="text-gray-600">• Newsletters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
