import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[7.080002112217095, -73.10302073170489]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[7.080002112217095, -73.10302073170489]}>
        {/* <Popup>
          Floridablanca, Santander <br />
          Colombia
        </Popup> */}
      </Marker>
    </MapContainer>
  );
};

export default Map;
