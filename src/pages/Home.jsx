import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const featuredServices = [
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
    <div className="min-h-screen">
      <div className="relative h-[600px] bg-background overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/banner/hero-banner.jpg" 
            alt="SetubalAI Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Transforme su Marketing Digital con IA
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-white/90">
              Soluciones avanzadas de Inteligencia Artificial para potenciar sus estrategias de marketing
            </p>
            <div className="mt-8">
              <Link to="/services" className="btn-primary">
                Explorar Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">Servicios Destacados</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredServices.map((service, index) => (
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
    </div>
  )
}
