import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Locater } from "./Locater";
import "./Location.scss";

const Location = () => {
  const result = useSelector((state) => state.result.r);
  const [position, setPosition] = useState(null);

  function LocationMarker() {
    const map = useMapEvents({
      locationfound(e) {
        setPosition(result.coor);
        map.flyTo(result.coor, map.getZoom());
      },
    });

    map.locate();

    return position === null ? null : (
      <Marker position={position} icon={Locater}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <>
      <div className="location">
        <div className="location__item">
          <div className="location__title">Ip Address</div>
          <div className="location__detail">{result.ip}</div>
        </div>
        <div className="location__item">
          <div className="location__title">Location</div>
          <div className="location__detail">
            {result.city}
            {`${
              result.region && result.postalCode
                ? ", " + result.region + " " + result.postalCode
                : ""
            }`}
          </div>
        </div>
        <div className="location__item">
          <div className="location__title">Timezone</div>
          <div className="location__detail">UTC {result.timezone}</div>
        </div>
        <div className="location__item">
          <div className="location__title">ISP</div>
          <div className="location__detail">{result.isp}</div>
        </div>
      </div>
      <MapContainer
        center={result.coor}
        zoom={13}
        style={{ width: "100%", height: "70vh", zIndex: "1" }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=j38hruQGH50ysDJ9aOAv"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
};

export default Location;
