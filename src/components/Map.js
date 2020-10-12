/* eslint-disable react/style-prop-object */
import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import markerImage from "../assets/images/icon-location.svg";
import { useSelector } from "react-redux";
import "../assets/styles/components/Map.css";

const MapComponent = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const Map = () => {
  const { lng, lat, zoom } = useSelector((state) => state.map);
  return (
    <MapComponent
      className="map-container"
      style="mapbox://styles/mapbox/streets-v9"
      center={[lng, lat]}
      zoom={[zoom]}
    >
      <Marker coordinates={[lng, lat]}>
        <img className="map-marker" src={markerImage} alt="marker" />
      </Marker>
    </MapComponent>
  );
};

export default Map;
