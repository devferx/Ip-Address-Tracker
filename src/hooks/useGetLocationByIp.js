import { useState, useEffect } from "react";

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

  const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEO_TOKEN}&ipAddress=${ip}`;
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(URL);
      const {
        location: { region, country, postalCode, timezone, lat, lng },
        isp,
      } = await resp.json();

      const obj = {
        panel: {
          ipAddres: ip,
          location: `${region}, ${country} ${postalCode}`,
          timezone: timezone,
          isp,
        },
        map: {
          lng,
          lat,
          zoom: 16,
        },
      };

      setData(obj);
    }
    fetchData();
  }, [URL, ip]);

  return data;
}
