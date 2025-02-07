import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import AudienceSegmentation from './pages/services/AudienceSegmentation'
import CampaignOptimization from './pages/services/CampaignOptimization'
import ContentPersonalization from './pages/services/ContentPersonalization'
import MarketingAutomation from './pages/services/MarketingAutomation'
import PredictiveAnalytics from './pages/services/PredictiveAnalytics'
import Chatbots from './pages/services/Chatbots'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/audience-segmentation" element={<AudienceSegmentation />} />
          <Route path="/services/campaign-optimization" element={<CampaignOptimization />} />
          <Route path="/services/content-personalization" element={<ContentPersonalization />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/services/predictive-analytics" element={<PredictiveAnalytics />} />
          <Route path="/services/chatbots" element={<Chatbots />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}
