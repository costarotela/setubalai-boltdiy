import React from 'react'
import { Link } from 'react-router-dom'

export default function CampaignOptimization() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">Optimización de campañas con IA</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Maximice el retorno de inversión de sus campañas de marketing utilizando algoritmos avanzados de IA que optimizan automáticamente sus estrategias publicitarias en tiempo real.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Características Principales</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Optimización automática de pujas
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                A/B testing inteligente
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Distribución dinámica de presupuesto
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Análisis de rendimiento en tiempo real
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
                Mayor ROI en campañas publicitarias
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Reducción de costos por adquisición
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Mejora continua del rendimiento
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Decisiones basadas en datos en tiempo real
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Plataformas Soportadas</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• Google Ads</div>
              <div className="text-gray-600">• Facebook Ads</div>
              <div className="text-gray-600">• Instagram Ads</div>
              <div className="text-gray-600">• LinkedIn Ads</div>
              <div className="text-gray-600">• TikTok Ads</div>
              <div className="text-gray-600">• Twitter Ads</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
