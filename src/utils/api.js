const api_key = "API_KEY";

export async function fetchWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=30102&units=imperial&APPID=${api_key}&mode=`
  );
  const data = await res.json();
  return data;
}
