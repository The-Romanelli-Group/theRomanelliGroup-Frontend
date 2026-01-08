import React, { useEffect, useRef, useState } from 'react';

const PropertyMap = ({ property }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  // Extract coordinates from property data
  useEffect(() => {
    if (property) {
      // Check for latitude and longitude in various possible field names
      const lat = property.Latitude || property.latitude || property.lat;
      const lng = property.Longitude || property.longitude || property.lng || property.lon;
      if (lat && lng) {
        setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lng) });
      } 
    }
  }, [property]);

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
  

  // Initialize map
  useEffect(() => {
    if (mapLoaded && coordinates && mapRef.current && !mapInstanceRef.current) {
      // Initialize Google Map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: coordinates.lat, lng: coordinates.lng },
        zoom: 15,
        mapTypeId: 'roadmap'
      });

      // Create marker
      const marker = new window.google.maps.Marker({
        position: { lat: coordinates.lat, lng: coordinates.lng },
        map: map,
        title: property.UnparsedAddress || 'Property Location',
        icon: {
          url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
            <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 30 C6 30 0 22 0 15 C0 6 6 0 15 0 C24 0 30 6 30 15 C30 22 24 30 15 30 Z" fill="#dc2626" stroke="white" stroke-width="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"/>
              <text x="15" y="17" text-anchor="middle" fill="white" font-size="14" font-weight="bold">🏠</text>
            </svg>
          `)}`
        }
      });

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">
              ${property.UnparsedAddress || 'Property Location'}
            </h3>
            <p style="margin: 0 0 4px 0; font-weight: bold; color: #dc2626; font-size: 16px;">
              $${property.ListPrice?.toLocaleString() || 'N/A'}
            </p>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              ${property.BedroomsTotal || 0} bed • ${property.BathroomsTotalInteger || 0} bath • ${property.BuildingAreaTotal || 0} sqft
            </p>
          </div>
        `
      });

      // Add click event to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      mapInstanceRef.current = map;
      markerRef.current = marker;
    }
  }, [mapLoaded, coordinates, property]);

  // Update map when coordinates change
  useEffect(() => {
    if (mapInstanceRef.current && markerRef.current && coordinates) {
      mapInstanceRef.current.setCenter({ lat: coordinates.lat, lng: coordinates.lng });
      markerRef.current.setPosition({ lat: coordinates.lat, lng: coordinates.lng });
    }
  }, [coordinates]);

  if (!coordinates) {
    return (
      <div className="bg-gray-100 h-64  mb-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
              📍
            </div>
            <p>Location coordinates not available</p>
            <p className="text-sm">{property?.UnparsedAddress || 'Address not available'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="bg-white overflow-hidden border border-gray-200">
        <div 
          ref={mapRef} 
          className="h-80 w-full"
          style={{ minHeight: '320px' }}
        />
      </div>
    </div>
  );
};

export default PropertyMap;