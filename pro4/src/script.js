const weatherApi = "f5c7c526a9a9471689a41644252712";
const baseUrl = "http://api.weatherapi.com/v1";

let textBox;
let container;

document.addEventListener("DOMContentLoaded", () => {
  textBox = document.getElementById("cityName");
  container = document.getElementById("weatherCardContainer");
  
  document.getElementById("searchCity").addEventListener("submit", handleSearch);
});

const getWeatherData = async (query) => {
  const requestUrl = `${baseUrl}/current.json?key=${weatherApi}&q=${query}&aqi=yes`;
  const res = await fetch(requestUrl);
  const data = await res.json();

  const w = {
    city: data.location.name,
    country: data.location.country,
    lastUpdated: data.current.last_updated,
    tempC: data.current.temp_c,
    feelsLikeC: data.current.feelslike_c,
    windSpeed: data.current.wind_kph,
    windDirection: data.current.wind_dir,
    humidity: data.current.humidity,
    cloud: data.current.cloud,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };

  return w;
};

const renderCard = (weather) => {
  const card = document.createElement("div");
  card.className =
    "bg-linear-to-b from-30% from-slate-800 to-slate-600 rounded-xl p-6 shadow-lg w-full outline-[0.3px] outline-slate-700";

  card.innerHTML = `
    <div class="flex justify-between items-start mb-4">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-200">${weather.city}, ${weather.country}</h2>
        <p class="text-xs text-slate-400">${weather.lastUpdated}</p>
      </div>
      <img src="https:${weather.icon}" alt="${weather.condition}" class="size-16">
    </div>
    
    <div class="mb-6">
      <div class="flex items-baseline gap-2">
        <span class="text-5xl font-black text-slate-200">${weather.tempC}°</span>
        <span class="text-lg text-slate-300">C</span>
      </div>
      <p class="text-slate-300 font-medium mt-2">${weather.condition}</p>
      <p class="text-xs text-slate-400">Feels like ${weather.feelsLikeC}°</p>
    </div>
    
    <div class="grid grid-cols-3 gap-2">
      <div class="bg-slate-900/50 rounded-lg p-3">
        <p class="text-xs text-slate-400 mb-1">Humidity</p>
        <p class="text-lg tracking-tighter font-semibold text-white">${weather.humidity}%</p>
      </div>
      <div class="bg-slate-900/50 rounded-lg p-3">
        <p class="text-xs text-slate-400 mb-1">Wind</p>
        <p class="text-lg tracking-tighter font-semibold text-white">${weather.windSpeed} kph</p>
      </div>
      <div class="bg-slate-900/50 rounded-lg p-3">
        <p class="text-xs text-slate-400 mb-1">Cloud</p>
        <p class="text-lg tracking-tighter font-semibold text-white">${weather.cloud}%</p>
      </div>
    </div>
  `;

  container.innerHTML = "";
  container.appendChild(card);
};

const handleSearch = async (e) => {
  e.preventDefault();
  const city = textBox.value.trim();

  if (!city) return;

  try {
    const weatherData = await getWeatherData(city);
    renderCard(weatherData);
    textBox.value = "";
  } catch (error) {
    container.innerHTML = `<p class="text-red-400">Error fetching weather data. Please try again.</p>`;
    console.error(error);
  }
};
