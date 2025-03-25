// components/LibraryMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const LibraryMap = ({ libraries }) => {
  const defaultCenter = [35.9545, -83.9294]; // Center of UTK campus (can be adjusted)

  return (
    <div
      className="library-map-container"
      style={{ height: "320px", width: "100%" }}
    >
      <MapContainer
        center={defaultCenter}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {libraries.map((lib) => {
          const { location, name, lid } = lib;
          if (!location?.lat || !location?.lng) return null;

          return (
            <Marker key={lid} position={[location.lat, location.lng]}>
              <Popup>
                <strong>{name}</strong>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default LibraryMap;
