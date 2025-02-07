import React from 'react'
import { Link } from 'react-router-dom'
import ServiceHeader from '../../components/ServiceHeader'

export default function AudienceSegmentation() {
  return (
    <div>
      <ServiceHeader 
        title="Segmentación de audiencia con IA"
        description="Identifique y dirija a su audiencia ideal con precisión milimétrica utilizando el poder de la Inteligencia Artificial."
        image="/images/services/audience-segmentation-header.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rest of the component content remains the same */}
        </div>
      </div>
    </div>
  )
}
