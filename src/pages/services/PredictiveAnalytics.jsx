import React from 'react'
import { Link } from 'react-router-dom'

export default function PredictiveAnalytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">Análisis predictivo</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Anticipe tendencias y comportamientos del mercado con nuestro análisis predictivo impulsado por IA, permitiéndole tomar decisiones informadas y estratégicas para su negocio.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Características Principales</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Predicción de tendencias de mercado
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Análisis de comportamiento del cliente
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Forecasting de ventas
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Identificación de oportunidades
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
                Toma de decisiones más informada
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Reducción de riesgos
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Optimización de recursos
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fas fa-check text-accent mr-2"></i>
                Ventaja competitiva
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Áreas de Análisis</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">• Ventas</div>
              <div className="text-gray-600">• Clientes</div>
              <div className="text-gray-600">• Mercado</div>
              <div className="text-gray-600">• Competencia</div>
              <div className="text-gray-600">• Tendencias</div>
              <div className="text-gray-600">• ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
