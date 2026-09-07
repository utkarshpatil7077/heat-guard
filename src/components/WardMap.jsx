import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WardMap = () => {
  const [geoData, setGeoData] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  const GEOJSON_URL = 'https://cdn.jsdelivr.net/gh/AtharvPatil3990/SIH---Backend@main/app/wards/pcmc-electoral-wards.geojson';

  useEffect(() => {
    fetch(GEOJSON_URL)
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error('Error loading GeoJSON:', err));
  }, []);

  const onEachFeature = (feature, layer) => {
    const wardName = feature.properties?.name || feature.properties?.ward_name || 'Ward';
    const wardNumber = feature.properties?.number || feature.properties?.ward_no || '';

    // Handle click to select ward for the side card
    layer.on({
      click: () => {
        setSelectedWard({ name: wardName, number: wardNumber, properties: feature.properties });
      },
      mouseover: (e) => {
        e.target.setStyle({ weight: 3, color: '#3b82f6', fillOpacity: 0.7 });
      },
      mouseout: (e) => {
        e.target.setStyle({ weight: 1, color: '#64748b', fillOpacity: 0.4 });
      },
    });
  };

  const defaultStyle = {
    fillColor: '#94a3b8',
    weight: 1,
    opacity: 1,
    color: '#64748b',
    fillOpacity: 0.4,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-[600px]">
      {/* Map Container Area */}
      <div className="w-full lg:w-3/4 h-full rounded-lg overflow-hidden shadow-md">
        <MapContainer 
          center={[18.5204, 73.8567]} 
          zoom={13} 
          scrollWheelZoom={true} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geoData && (
            <GeoJSON 
              data={geoData} 
              style={defaultStyle} 
              onEachFeature={onEachFeature} 
            />
          )}
        </MapContainer>
      </div>

      {/* Right Side Info Card */}
      <div className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between transition-all duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Ward Inspector
            </h3>
            {selectedWard && (
              <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100">
                #{selectedWard.number || 'N/A'}
              </span>
            )}
          </div>

          {selectedWard ? (
            <div className="space-y-4">
              {/* Primary Info Block */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-4 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Selected Ward Name</span>
                <p className="text-lg font-bold text-slate-800 leading-snug">{selectedWard.name}</p>
              </div>
              
              {/* Properties Breakdown */}
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Ward Attributes</span>
                <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100 text-xs font-mono text-slate-600 max-h-56 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-200">
                  {Object.entries(selectedWard.properties).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-white transition-colors border-b border-slate-200/60 last:border-0">
                      <span className="font-semibold text-slate-500 capitalize">{key.replace(/_/g, ' ')}:</span>
                      <span className="text-right font-medium text-slate-700 truncate max-w-[130px]" title={String(val)}>
                        {String(val)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold">
                🗺️
              </div>
              <p className="text-sm font-medium text-slate-600 mb-1">No Ward Selected</p>
              <p className="text-xs text-slate-400">Click on any region on the map to view detailed information.</p>
            </div>
          )}
        </div>

        <div className="text-[11px] font-medium text-slate-400 text-center pt-4 border-t border-slate-100 flex items-center justify-center gap-1">
          <span>PCMC Electoral Boundaries</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>GIS Portal</span>
        </div>
      </div>
      </div>
  );
};

export default WardMap;