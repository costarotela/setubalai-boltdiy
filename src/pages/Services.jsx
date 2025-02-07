import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      id: 'audience-segmentation',
      icon: 'fa-users',
      title: 'Segmentación de audiencia con IA',
      description: 'Identifique y dirija a su audiencia ideal con precisión.',
      path: '/services/audience-segmentation',
      image: '/images/services/audience-segmentation.jpg'
    },
    {
      id: 'campaign-optimization',
      icon: 'fa-chart-line',
      title: 'Optimización de campañas con IA',
      description: 'Maximice el ROI de sus campañas de marketing.',
      path: '/services/campaign-optimization',
      image: '/images/services/campaign-optimization.jpg'
    },
    {
      id: 'content-personalization',
      icon: 'fa-pen-fancy',
      title: 'Personalización de contenido con IA',
      description: 'Entregue contenido relevante a cada usuario.',
      path: '/services/content-personalization',
      image: '/images/services/content-personalization.jpg'
    },
    {
      id: 'marketing-automation',
      icon: 'fa-robot',
      title: 'Automatización de marketing con IA',
      description: 'Agilice sus procesos de marketing.',
      path: '/services/marketing-automation',
      image: '/images/services/marketing-automation.jpg'
    },
    {
      id: 'predictive-analytics',
      icon: 'fa-chart-bar',
      title: 'Análisis predictivo',
      description: 'Anticipe tendencias y comportamientos del mercado.',
      path: '/services/predictive-analytics',
      image: '/images/services/predictive-analytics.jpg'
    },
    {
      id: 'chatbots',
      icon: 'fa-comments',
      title: 'Chatbots de IA para atención al cliente',
      description: 'Mejore la experiencia del cliente con asistentes virtuales.',
      path: '/services/chatbots',
      image: '/images/services/chatbots.jpg'
    }
  ]

  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-card-entrance')
            observerRef.current.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    document.querySelectorAll('.service-card').forEach((card) => {
      observerRef.current.observe(card)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-4">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600">
          Descubra cómo nuestras soluciones de IA pueden transformar su estrategia de marketing digital
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link 
            key={service.id} 
            to={service.path}
            className="block"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="service-card shine-effect">
              <div className="service-card-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <div className="service-card-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="service-card-title">
                  {service.title}
                </h3>
                <p className="service-card-description">
                  {service.description}
                </p>
                <div className="service-card-arrow">
                  <span className="mr-2">Explorar servicio</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
