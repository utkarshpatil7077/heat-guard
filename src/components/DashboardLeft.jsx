import React from 'react';

export default function WeatherLeft() {
  return (
    <section className="col-span-12 xl:col-span-8 flex flex-col gap-6">
      
      {/* Ambient Sky Hero Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#d4e7ff] via-[#e8f2ff] to-[#f4f8ff] p-8 lg:p-10 shadow-sm border border-white/60">
        <div className="absolute -right-12 -top-12 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/4 -bottom-10 w-60 h-60 rounded-full bg-white/50 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Metrics & Current Snapshot */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-2xs border border-white/40">
                <span className="material-symbols-outlined text-[#0066ff] text-[18px]">location_on</span>
                <span className="text-sm font-semibold tracking-tight text-slate-900">Pune Ward 12</span>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-white/50 backdrop-blur-xs px-3 py-1 rounded-full">
                Today 01:45 PM
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-7xl font-light tracking-tighter text-slate-900">40.8</span>
                <span className="text-3xl font-medium text-[#0066ff]">°C</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                <p className="text-sm font-medium text-slate-600">Extreme Heat Stress • Intense Sun</p>
              </div>
            </div>

            {/* Atmospheric Micro Indicators */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-3.5 py-2 rounded-xl text-slate-700 shadow-2xs border border-white/40 text-xs font-semibold">
                <span className="material-symbols-outlined text-[#0066ff] text-[16px]">speed</span>
                <span>1008 hPa</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-3.5 py-2 rounded-xl text-slate-700 shadow-2xs border border-white/40 text-xs font-semibold">
                <span className="material-symbols-outlined text-[#0066ff] text-[16px]">water_drop</span>
                <span>24% Humid</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-3.5 py-2 rounded-xl text-slate-700 shadow-2xs border border-white/40 text-xs font-semibold">
                <span className="material-symbols-outlined text-[#0066ff] text-[16px]">air</span>
                <span>14 km/h NW</span>
              </div>
            </div>
          </div>

          {/* Right Column: Temperature Waveform Spline */}
          <div className="lg:col-span-6 bg-white/60 backdrop-blur-md rounded-3xl p-5 flex flex-col justify-between shadow-2xs border border-white/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Diurnal Curve</span>
              <span className="text-[11px] text-[#0066ff] font-bold bg-blue-100/60 px-2.5 py-1 rounded-full">Peak Zone</span>
            </div>

            <div className="w-full h-24 my-2 relative">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 340 100">
                <defs>
                  <linearGradient id="curveGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#0066ff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0066ff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M 10,75 C 60,68 80,48 115,22 C 150,-4 185,10 225,28 C 265,46 295,65 330,78 L 330,100 L 10,100 Z" fill="url(#curveGradient)" />
                <path d="M 10,75 C 60,68 80,48 115,22 C 150,-4 185,10 225,28 C 265,46 295,65 330,78" fill="none" stroke="#0066ff" strokeLinecap="round" strokeWidth="3" />
                <circle cx="10" cy="75" fill="#ffffff" r="4" stroke="#0066ff" strokeWidth="2.5" />
                <circle cx="115" cy="22" fill="#0043b3" r="5" stroke="#ffffff" strokeWidth="2.5" />
                <circle cx="225" cy="28" fill="#ffffff" r="4" stroke="#0066ff" strokeWidth="2.5" />
                <circle cx="330" cy="78" fill="#ffffff" r="4" stroke="#0066ff" strokeWidth="2.5" />
              </svg>
            </div>

            <div className="grid grid-cols-4 text-center pt-1 border-t border-slate-200/40">
              <div className="flex flex-col"><span className="text-[11px] text-slate-400">Morning</span><span className="text-sm font-semibold text-slate-700">31°</span></div>
              <div className="flex flex-col"><span className="text-[11px] text-[#0066ff] font-semibold">Afternoon</span><span className="text-sm font-bold text-[#0066ff]">41°</span></div>
              <div className="flex flex-col"><span className="text-[11px] text-slate-400">Evening</span><span className="text-sm font-semibold text-slate-700">36°</span></div>
              <div className="flex flex-col"><span className="text-[11px] text-slate-400">Night</span><span className="text-sm font-semibold text-slate-700">29°</span></div>
            </div>
          </div>

        </div>
      </div>

      {/* 2x2 Metric Widget Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Metric 1: Wind */}
        <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Wind</span>
            <p className="text-xs text-slate-400 mt-0.5">Today wind speed</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-2xl font-bold text-slate-800">14 km/h</span>
              <span className="text-xs text-emerald-600 font-semibold ml-2 bg-emerald-50 px-2 py-0.5 rounded-md">Gentle Breeze</span>
            </div>
          </div>
          <div className="relative w-20 h-20 flex items-center justify-center bg-slate-50 rounded-full border border-slate-100">
            <span className="absolute top-1 text-[10px] font-bold text-slate-400">N</span>
            <span className="absolute right-1.5 text-[10px] font-bold text-slate-300">E</span>
            <span className="absolute bottom-1 text-[10px] font-bold text-slate-300">S</span>
            <span className="absolute left-1.5 text-[10px] font-bold text-slate-300">W</span>
            <div className="w-12 h-12 relative flex items-center justify-center" style={{ transform: 'rotate(315deg)' }}>
              <svg className="w-full h-full" viewBox="0 0 48 48">
                <polygon fill="#0066ff" points="24,4 28,24 24,20" />
                <polygon fill="#cbd5e1" points="24,44 28,24 24,20" />
                <circle cx="24" cy="24" fill="#0066ff" r="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Metric 2: Heat Risk Index */}
        <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Heat Risk Index</span>
            <p className="text-xs text-slate-400 mt-0.5">Hydration & shade advisory</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-2xl font-bold text-rose-600">87 / 100</span>
              <span className="text-xs text-rose-600 font-semibold ml-2 bg-rose-50 px-2 py-0.5 rounded-md">Critical</span>
            </div>
          </div>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <path className="text-rose-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="87, 100" strokeLinecap="round" strokeWidth="3.8" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-[11px] font-bold text-slate-700">Severe</span>
            </div>
          </div>
        </div>

        {/* Metric 3: UTCI Thermal Stress */}
        <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">UTCI Thermal Stress</span>
            <p className="text-xs text-slate-400 mt-0.5">Universal Thermal Climate</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-2xl font-bold text-amber-600">43.6°C</span>
              <span className="text-xs text-amber-600 font-semibold ml-2 bg-amber-50 px-2 py-0.5 rounded-md">Very Strong</span>
            </div>
          </div>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20" viewBox="0 0 100 100">
              <path d="M 15,75 A 40,40 0 1,1 85,75" fill="none" stroke="#f1f5f9" strokeLinecap="round" strokeWidth="8" />
              <path d="M 15,75 A 40,40 0 1,1 85,75" fill="none" stroke="#d97706" strokeDasharray="140" strokeDashoffset="30" strokeLinecap="round" strokeWidth="8" />
              <line stroke="#0f172a" strokeLinecap="round" strokeWidth="3" x1="50" x2="68" y1="50" y2="32" />
              <circle cx="50" cy="50" fill="#0f172a" r="4" />
            </svg>
            <div className="absolute bottom-0 text-[11px] font-bold text-slate-500">High</div>
          </div>
        </div>

        {/* Metric 4: UV Index */}
        <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">UV Index</span>
            <p className="text-xs text-slate-400 mt-0.5">Solar radiation meter</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-2xl font-bold text-rose-600">11+ UVI</span>
              <span className="text-xs text-rose-600 font-semibold ml-2 bg-rose-50 px-2 py-0.5 rounded-md">Extreme</span>
            </div>
          </div>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="uvGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="40%" stopColor="#eab308" />
                  <stop offset="75%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#7f1d1d" />
                </linearGradient>
              </defs>
              <path d="M 20,70 A 35,35 0 1,1 80,70" fill="none" stroke="url(#uvGrad)" strokeLinecap="round" strokeWidth="8" />
            </svg>
            <div className="absolute flex flex-col items-center mt-2">
              <span className="text-sm font-bold text-slate-800">11.4</span>
              <span className="text-[10px] text-slate-400">Extreme</span>
            </div>
          </div>
        </div>

      </div>

      {/* Live Micro-Station Map Insight Strip */}
      <div className="bg-white rounded-3xl p-5 shadow-xs border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066ff] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">sensors</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800">Sensor Node PN-1204 Active</span>
            <span className="text-xs text-slate-400">Shivajinagar Junction • Calibrated 4 mins ago via LoRaWAN</span>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer" type="button">
            Calibrate Sensor
          </button>
          <button className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-[#0066ff] text-white hover:bg-blue-700 text-xs font-semibold shadow-xs transition-all cursor-pointer" type="button">
            Download Log
          </button>
        </div>
      </div>

    </section>
  );
}