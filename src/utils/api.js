const api_key = "e667daa519e5906a2449e266ce416e75";

export async function fetchWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=30102&units=imperial&APPID=${api_key}`
  );
  return await res.json();
}
