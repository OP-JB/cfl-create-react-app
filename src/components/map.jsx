import React from 'react'
import '../css/map.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const googleMapsApiKey = 'AIzaSyCf5ALaEtTY1OhncNmDQa4CaeCe5k_aKAE';
const libraries = ['places'];
const mapContainerStyle = {
  width: '400px',
  height: '400px',
};
const center = { lat: 29.028318, lng: -81.303116 }; // Deland, FL

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={9}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default Map
