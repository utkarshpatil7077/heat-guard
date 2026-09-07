import React from 'react';

function Sidebar({ activeTab, onTabSelect }) {
  const navItems = [
    { path: 'dashboard', label: 'Dashboard', icon: 'space_dashboard' },
    { path: 'live-map', label: 'Live Map', icon: 'map' },
    { path: 'hospital-ops', label: 'Hospital Ops', icon: 'local_hospital' },
    { path: 'analytics', label: 'Analytics', icon: 'query_stats' },
    { path: 'settings', label: 'Settings', icon: 'tune' },
  ];

  return (
<aside className="group fixed left-0 top-20 z-50 h-[calc(100vh-5rem)] w-20 overflow-hidden border-r border-gray-200 bg-white transition-all duration-300 hover:w-60">
      {/* Navigation */}
      <nav 
        className="flex flex-col gap-1 px-3 mt-6"
        data-active-classes="bg-surface-container-low text-primary font-semibold shadow-[0_4px_16px_-2px_rgba(37,99,235,0.06)]"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.path;
          return (
            <button
              key={item.path}
              onClick={() => onTabSelect(item.path)}
              className={`w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all group text-left ${
                isActive
                  ? 'bg-surface-container-low text-primary font-semibold shadow-[0_4px_16px_-2px_rgba(37,99,235,0.06)] bg-orange-50 text-orange-600'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="material-symbols-outlined min-w-6 text-[20px] transition-colors">
                {item.icon}
              </span>
              <span className="font-label-md text-label-md whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

    </aside>
  );
}

export default Sidebar;