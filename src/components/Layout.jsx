import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import WardMap from './WardMap'; // Your Live Map component

function Layout() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      
      {/* Main Content Area with left margin to clear the collapsed sidebar */}
      <div className="flex-1 ml-20 transition-all duration-300 flex flex-col">
        
        {/* Header fixed or sticky at the top */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 h-20 px-8 flex items-center">
          <Header activeTab={activeTab} />
        </div>

        {/* Dynamic Content based on Sidebar Click */}
        <main className="p-8 flex-1">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'live-map' && <WardMap />}
          {activeTab === 'hospital-ops' && <div>Hospital Ops Component</div>}
          {activeTab === 'analytics' && <div>Analytics Component</div>}
          {activeTab === 'settings' && <div>Settings Component</div>}
        </main>
      </div>
      {/* Sidebar handles navigation selection */}
      <Sidebar activeTab={activeTab} onTabSelect={setActiveTab} />
    </div>
  );
}

export default Layout;