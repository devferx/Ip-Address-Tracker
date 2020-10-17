import convertRespToObj from "./convertRespToObj";

export default async function fetchGeoByIp(ip) {
  const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEO_TOKEN}&ipAddress=${ip}`;
  const resp = await fetch(URL);
  const data = await resp.json();
  const result = convertRespToObj(data, ip);
  return result;
}
