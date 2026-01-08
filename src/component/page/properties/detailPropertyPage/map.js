import React, { useEffect, useRef, useState } from 'react';

const Map = ({ alldata, selectedProperty, onPropertySelect }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Load Google Maps API
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.onload = () => setMapLoaded(true);
      document.head.appendChild(script);
    } else {
      setMapLoaded(true);
    }
  }, []);

  // Initialize map and add all markers
  useEffect(() => {
    if (mapLoaded && mapRef.current && !mapInstanceRef.current && alldata && alldata.length > 0) {
      // Calculate center point of all properties
      const centerLat = alldata.reduce((sum, property) => sum + property.lat, 0) / alldata.length;
      const centerLng = alldata.reduce((sum, property) => sum + property.lng, 0) / alldata.length;

      // Initialize Google Map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: centerLat, lng: centerLng },
        zoom: 12,
        mapTypeId: 'roadmap'
      });

      mapInstanceRef.current = map;

      // Add markers for all properties
      addAllMarkers(map);
    }
  }, [mapLoaded, alldata]);

  // Function to add all property markers
  const addAllMarkers = (map) => {
    // Clear existing markers
    markersRef.current.forEach(marker => {
      marker.setMap(null);
    });
    markersRef.current = [];

    if (!alldata || alldata.length === 0) return;

    const bounds = new window.google.maps.LatLngBounds();
    const infoWindow = new window.google.maps.InfoWindow();

    // Add marker for each property
    alldata.forEach((property, index) => {
      if (!property.lat || !property.lng) return;

      const isSelected = selectedProperty && selectedProperty.id === property.id;
      
      // Format price for display
      const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(price);
      };

      // Create different colored markers based on price range
      // const getMarkerColor = (price) => {
      //   if (price < 500000) return '#10b981'; // green for lower prices
      //   if (price < 700000) return '#f59e0b'; // amber for mid-range
      //   return '#dc2626'; // red for higher prices
      // };

      // Create marker
      const marker = new window.google.maps.Marker({
        position: { lat: property.lat, lng: property.lng },
        map: map,
        title: property.heading,
        icon: {
          url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
            <svg width="${isSelected ? '36' : '30'}" height="${isSelected ? '36' : '30'}" viewBox="0 0 ${isSelected ? '36' : '30'} ${isSelected ? '36' : '30'}" xmlns="http://www.w3.org/2000/svg">
              <path d="M${isSelected ? '18' : '15'} ${isSelected ? '36' : '30'} C${isSelected ? '8' : '6'} ${isSelected ? '36' : '30'} 0 ${isSelected ? '28' : '22'} 0 ${isSelected ? '18' : '15'} C0 ${isSelected ? '8' : '6'} ${isSelected ? '8' : '6'} 0 ${isSelected ? '18' : '15'} 0 C${isSelected ? '28' : '24'} 0 ${isSelected ? '36' : '30'} ${isSelected ? '8' : '6'} ${isSelected ? '36' : '30'} ${isSelected ? '18' : '15'} C${isSelected ? '36' : '30'} ${isSelected ? '28' : '22'} ${isSelected ? '28' : '24'} ${isSelected ? '36' : '30'} ${isSelected ? '18' : '15'} ${isSelected ? '36' : '30'} Z" fill="${isSelected ? '#3b82f6' : '#10b981'}" stroke="white" stroke-width="2" filter="drop-shadow(0 ${isSelected ? '4px 8px' : '2px 4px'} rgba(0,0,0,${isSelected ? '0.3' : '0.2'}))"/>
              <text x="${isSelected ? '18' : '15'}" y="${isSelected ? '20' : '17'}" text-anchor="middle" fill="white" font-size="${isSelected ? '16' : '14'}" font-weight="bold">${isSelected ? '🏠' : '🏡'}</text>
            </svg>
          `)}`
        }
      });

      // Add click event to marker
      marker.addListener('click', () => {
        const content = `
          <div style="min-width: 250px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold; color: #1f2937; font-size: 16px;">
              ${property.heading}
            </h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; line-height: 1.4;">
              ${property.location}
            </p>
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #dc2626; font-size: 18px;">
              ${formatPrice(property.amount)}
            </p>
            <div style="display: flex; gap: 12px; margin-bottom: 8px; font-size: 13px; color: #4b5563;">
              <span>🛏️ ${property.bedroom || 0} bed</span>
              <span>🚿 ${property.bathroom || 0} bath</span>
              <span>📐 ${property.area?.toLocaleString() || 0} sqft</span>
            </div>
          </div>
        `;
        
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
        
        if (onPropertySelect) {
          onPropertySelect(property);
        }
      });

      markersRef.current.push(marker);
      bounds.extend(marker.getPosition());
    });

    // Fit map to show all markers
    if (markersRef.current.length > 0) {
      map.fitBounds(bounds, { padding: 50 });
    }
  };

  // Update markers when selectedProperty changes
  useEffect(() => {
    if (mapInstanceRef.current && alldata) {
      addAllMarkers(mapInstanceRef.current);
    }
  }, [selectedProperty, alldata]);

  // Center map on selected property
  useEffect(() => {
    if (mapInstanceRef.current && selectedProperty) {
      mapInstanceRef.current.setCenter({ lat: selectedProperty.lat, lng: selectedProperty.lng });
      mapInstanceRef.current.setZoom(15);
    }
  }, [selectedProperty]);

  // Global function for popup button clicks
  useEffect(() => {
    window.selectProperty = (propertyId) => {
      const property = alldata?.find(p => p.id === propertyId);
      if (property && onPropertySelect) {
        onPropertySelect(property);
      }
    };

    return () => {
      delete window.selectProperty;
    };
  }, [alldata, onPropertySelect]);

  if (!alldata || alldata.length === 0) {
    return (
      <div className="bg-gray-100 h-full relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              📍
            </div>
            <p className="text-lg font-medium">No Properties Available</p>
            <p className="text-sm mt-2">Properties will appear here when data is loaded</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Map Controls */}


      {/* Map Container */}
      <div className="bg-white h-screen overflow-hidden border border-gray-200">
        <div 
          ref={mapRef} 
          className="h-full w-full"
          style={{ minHeight: '400px' }}
        />
      </div>

    </div>
  );
};

export default Map;