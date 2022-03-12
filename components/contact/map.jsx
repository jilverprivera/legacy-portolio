import {
  Circle,
  FeatureGroup,
  MapContainer,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const purpleOptions = { color: "#0E1821" };

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

      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>
          Floridablanca, Santander <br />
          Colombia
        </Popup>

        <Circle center={position} radius={20} />
      </FeatureGroup>
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
