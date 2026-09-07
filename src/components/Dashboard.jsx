import React from 'react';
import WeatherSection from './DashboardLeft';
import WeatherForecastRail from './dashboardright';

export default function Dashboard() {
  return (
    <main className="w-full pt-16 bg-background flex-1">
      <div className="flex flex-col w-full">
        <div className="p-space-lg lg:p-space-xl grid grid-cols-1 xl:grid-cols-12 gap-6 max-w-[1720px] mx-auto w-full">
          
          {/* Central Atmospheric Canvas */}
          <WeatherSection />

          {/* Right-Hand Contextual Forecast Rail */}
          <WeatherForecastRail />

        </div>
      </div>
    </main>
  );
}