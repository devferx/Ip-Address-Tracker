import React, { useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import { useDispatch } from "react-redux";
import { updateLocation } from "./actions/";
import useGetLocationByIp from "./hooks/useGetLocationByIp";

function App() {
  const dispatch = useDispatch();
  const locationInfo = useGetLocationByIp("8.8.8.8");

  useEffect(() => {
    dispatch(updateLocation(locationInfo));
  }, [locationInfo, dispatch]);

  return (
    <div className="container">
      <Header />
      <Map />
    </div>
  );
}

export default App;
