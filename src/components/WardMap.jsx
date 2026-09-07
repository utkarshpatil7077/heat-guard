import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WardMap = () => {
  const [wardData, setWardData] = useState(null);

  // Replace with your actual GitHub RAW file URL
  const GITHUB_GEOJSON_URL = 'https://github.com/AtharvPatil3990/SIH---Backend/blob/main/app/wards/pune-electoral-wards_2022.geojson';

  useEffect(() => {
    fetch(GITHUB_GEOJSON_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch GeoJSON data from GitHub');
        }
        return response.json();
      })
      .then((data) => setWardData(data))
      .catch((error) => console.error('Error fetching ward data:', error));
  }, []);

  // Custom styling and interactions for each ward polygon
  const onEachWard = (feature, layer) => {
    const { wardnum, Name1 } = feature.properties || {};
    
    // Bind a popup showing the ward number and name
    if (Name1) {
      layer.bindPopup(`<strong>Ward ${wardnum}</strong><br />${Name1}`);
    }

    // Add hover effects for customization
    layer.on({
      mouseover: (e) => {
        const targetLayer = e.target;
        targetLayer.setStyle({
          weight: 3,
          color: '#00ffff',
          fillOpacity: 0.7,
        });
      },
      mouseout: (e) => {
        const targetLayer = e.target;
        targetLayer.setStyle({
          weight: 1,
          color: '#3388ff',
          fillOpacity: 0.4,
        });
      },
    });
  };

  // Default polygon style
  const wardStyle = {
    fillColor: '#3388ff',
    weight: 1,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.4,
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapContainer 
        center={[18.5204, 73.8567]} // Coordinates centered around Pune
        zoom={12} 
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {wardData && (
          <GeoJSON 
            data={wardData} 
            style={wardStyle} 
            onEachFeature={onEachWard} 
          />
        )}
      </MapContainer>
    </div>
  );
};

export default WardMap;