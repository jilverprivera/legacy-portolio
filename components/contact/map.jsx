import {
  Circle,
  FeatureGroup,
  MapContainer,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [7.080995945620949, -73.10293151224573];
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FeatureGroup pathOptions={{ color: `${({ theme }) => theme.primary}` }}>
        <Popup>
          Floridablanca, Santander <br />
          Colombia
        </Popup>

        <Circle center={position} radius={20} />
      </FeatureGroup>
    </MapContainer>
  );
};

export default Map;
