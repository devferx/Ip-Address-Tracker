import { useState, useEffect } from "react";
import fetchGeoByIp from "../utils/fetchGeoByIp";

export default function useGetLocationByIp(ip) {
  const [data, setData] = useState({
    panel: {
      ipAddres: "192.212.174.101",
      location: "Brooklyn, NY 101001",
      timezone: "-05:00",
      isp: "SpaceX Starlink",
    },
    map: {
      lng: -104.872758,
      lat: 39.0916586,
      zoom: 16,
    },
  });

  useEffect(() => {
    async function fetchData() {
      const resp = await fetchGeoByIp(ip);
      setData(resp);
    }

    fetchData();
  }, [ip]);

  return data;
}
