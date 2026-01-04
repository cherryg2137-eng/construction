import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import BuilderDashboard from './pages/BuilderDashboard'
import OwnerDashboard from './pages/OwnerDashboard'
import SupplierMarketplace from './pages/SupplierMarketplace'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="builder" element={<BuilderDashboard />} />
          <Route path="owner" element={<OwnerDashboard />} />
          <Route path="supplier" element={<SupplierMarketplace />} />
          <Route path="settings" element={<div className="container p-4"><h1>Settings</h1></div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
