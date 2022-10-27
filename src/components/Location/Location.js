import React from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./Location.scss";

const Location = () => {
  const result = useSelector((state) => state.result.r);
  console.log(result.coor);
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
        style={{ width: "100vw", height: "auto" }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=j38hruQGH50ysDJ9aOAv"
        />
        <Marker position={result.coor}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Location;
