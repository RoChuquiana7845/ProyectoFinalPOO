import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Popup, Marker } from "react-leaflet";
import Sheet from "@mui/joy/Sheet/Sheet";
import './Mapa.css';
import 'Leaflet/dist/Leaflet.css';
import { SearchField } from "./SearchField";

// eslint-disable-next-line react/prop-types
const MapView = ({position}) => {
    if (!position){
        position = [51.505, -0.09];
    }

  return (
    <Sheet sx={{width: '400px', height: '400px', my: 15}}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}
      style={{width: '70vh', height: '60vh', color:'white'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup> A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>
        <SearchField apiKey={'pk.eyJ1Ijoicm9iZXJ0b2NoMTIzIiwiYSI6ImNsbGhmaGJzZzE3bTMzZGw2ZHNwazluemEifQ.DthX7qs3u2RX5prd3WySPw'}/>
      </MapContainer>
    </Sheet>
  );
};

export default MapView;
