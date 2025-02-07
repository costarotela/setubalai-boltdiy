import React from 'react'

export default function ServiceHeader({ title, description, image }) {
  return (
    <div className="relative h-[400px] mb-12 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  )
}
