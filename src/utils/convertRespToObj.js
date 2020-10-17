export default function convertResponseToObject(response, ip) {
  const {
    location: { region, country, postalCode, timezone, lat, lng },
    isp,
  } = response;

  return {
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
}
