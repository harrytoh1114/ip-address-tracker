import L from "leaflet";
import marker from "../../images/icon-location.svg";

const Locater = new L.Icon({
  iconUrl: marker,
  iconSize: new L.Point(35, 45),
});

export { Locater };
