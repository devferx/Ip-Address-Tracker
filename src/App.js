import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header
        title="IP Address Tracker"
        ipAddres="192.212.174.101"
        location="Brooklyn, NY 101001"
        timezone="-05:00"
        isp="SpaceX Starlink"
      />
    </div>
  );
}

export default App;
