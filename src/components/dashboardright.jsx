import React, { useState } from 'react';

export default function Dashboardright() {
  const [activeChip, setActiveChip] = useState(0);

  return (
    <aside className="col-span-12 xl:col-span-4 flex flex-col gap-6">
      <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100 flex flex-col justify-between h-full">
        <div>
          {/* Header Bar with Week Switcher */}
          <div className="flex items-center justify-between mb-6">
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer" type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <span className="text-sm font-semibold text-slate-800">This Week</span>
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer" type="button">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>

          {/* Hourly Chips */}
          <div className="mb-6">
            <span className="text-xs font-semibold text-slate-400 uppercase block mb-3">Today</span>
            <div className="grid grid-cols-4 gap-2">
              {[
                { time: 'Now', icon: 'wb_sunny', temp: '41°' },
                { time: '02 PM', icon: 'wb_sunny', temp: '42°' },
                { time: '03 PM', icon: 'wb_sunny', temp: '41°' },
                { time: '04 PM', icon: 'partly_cloudy_day', temp: '39°' }
              ].map((chip, idx) => {
                const isActive = activeChip === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveChip(idx)}
                    className={`flex flex-col items-center justify-between p-3 rounded-2xl transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-blue-50/80 text-[#0066ff] shadow-2xs border border-blue-100' 
                        : 'hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <span className={`text-xs ${isActive ? 'font-semibold text-[#0066ff]' : 'text-slate-400'}`}>{chip.time}</span>
                    <span className="material-symbols-outlined text-[22px] my-1.5 text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {chip.icon}
                    </span>
                    <span className={`text-sm ${isActive ? 'font-bold text-[#0066ff]' : 'font-semibold text-slate-700'}`}>
                      {chip.temp}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 7-Day Extended Forecast Row List */}
          <div className="flex flex-col gap-1">
            {[
              { day: 'Tomorrow', date: '12 May', temp: '42° / 27°', icon: 'sunny', color: 'text-amber-500' },
              { day: 'Wednesday', date: '13 May', temp: '41° / 26°', icon: 'partly_cloudy_day', color: 'text-amber-500' },
              { day: 'Thursday', date: '14 May', temp: '40° / 25°', icon: 'cloud', color: 'text-blue-400' },
              { day: 'Friday', date: '15 May', temp: '39° / 24°', icon: 'air', color: 'text-slate-400' },
              { day: 'Saturday', date: '16 May', temp: '38° / 23°', icon: 'thunderstorm', color: 'text-indigo-500' },
              { day: 'Sunday', date: '17 May', temp: '36° / 22°', icon: 'rainy', color: 'text-blue-500' }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between py-2.5 px-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800">{row.day}</span>
                  <span className="text-xs text-slate-400">{row.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-slate-700">{row.temp}</span>
                  <span className={`material-symbols-outlined ${row.color} text-[22px]`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {row.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency / Cooling Shelter CTA Widget */}
        <div className="mt-8 pt-4 border-t border-slate-100">
          <button className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#0066ff] to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-[0.99]" type="button">
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            <span>Find Nearest Cooling Center</span>
          </button>
          <div className="flex items-center justify-between mt-3 px-1">
            <span className="text-xs text-slate-400">Active Centers: 14 Facilities</span>
            <span className="text-xs font-semibold text-emerald-600">350m Away</span>
          </div>
        </div>

      </div>
    </aside>
  );
}