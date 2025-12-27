# Weather App - Pro4

A real-time weather application that fetches current weather data for any city using the WeatherAPI service.

## 🌤️ Preview

A modern weather application featuring:
- City-based weather search
- Real-time weather data
- Detailed weather metrics
- Beautiful gradient card design
- Responsive interface
- Error handling

## 🎯 Purpose

This project serves as:
- A practical API integration example
- A demonstration of async JavaScript
- A real-world data fetching application
- A showcase of dynamic DOM rendering
- A weather information tool

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **Tailwind CSS v4** - Utility-first styling (via CDN)
- **Vanilla JavaScript** - Logic and API calls
- **Fetch API** - HTTP requests
- **WeatherAPI** - Real-time weather data
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
pro4/
└── src/
    ├── index.html    # Main application page
    └── script.js     # Weather API logic
```

## ✨ Features

### Core Functionality
- ✅ **City Search** - Search weather by city name
- ✅ **Real-time Data** - Current weather information
- ✅ **Weather Metrics** - Temperature, humidity, wind, cloud coverage
- ✅ **Weather Icons** - Visual weather condition representation
- ✅ **Feels Like** - Apparent temperature
- ✅ **Last Updated** - Timestamp of data
- ✅ **Error Handling** - User-friendly error messages

### Weather Data Displayed
- 🌡️ **Temperature** - Current temperature in Celsius
- 🤒 **Feels Like** - Apparent temperature
- 💨 **Wind Speed** - In kilometers per hour
- 🧭 **Wind Direction** - Cardinal direction
- 💧 **Humidity** - Percentage
- ☁️ **Cloud Coverage** - Percentage
- 🌦️ **Condition** - Weather description with icon
- 📍 **Location** - City and country
- 🕐 **Last Updated** - Data timestamp

## 🎨 Design System

### Color Palette
```css
/* Background */
bg-slate-900        /* #0f172a */

/* Card Gradient */
from-slate-800      /* #1e293b */
to-slate-600        /* #475569 */

/* Text */
text-slate-200      /* #e2e8f0 */
text-slate-300      /* #cbd5e1 */
text-slate-400      /* #94a3b8 */
text-white          /* #ffffff */

/* Borders */
border-slate-700    /* #334155 */

/* Input */
bg-slate-800        /* #1e293b */
focus:ring-slate-700 /* #334155 */

/* Error */
text-red-400        /* #f87171 */
```

### Typography
```css
Font Family: 'Inter', sans-serif
Font Weights: 100-900 (variable)

App Title: text-3xl (1.875rem / 30px)
City Name: text-2xl (1.5rem / 24px)
Temperature: text-5xl (3rem / 48px) + font-black
Condition: text-lg (1.125rem / 18px)
Metrics: text-lg (1.125rem / 18px)
Labels: text-xs (0.75rem / 12px)
Input: text-sm (0.875rem / 14px)
```

### Layout
```css
Container: max-w-2xl mx-auto
Padding: px-4 my-10
Card: p-6 rounded-xl shadow-lg
Grid: grid grid-cols-3 gap-2
```

## 🔌 API Integration

### WeatherAPI Configuration

```javascript
const weatherApi = "f5c7c526a9a9471689a41644252712";
const baseUrl = "http://api.weatherapi.com/v1";
```

**⚠️ Important:** The API key shown is for demonstration. Get your own free API key from [WeatherAPI.com](https://www.weatherapi.com/)

### API Endpoint

```javascript
// Current weather endpoint
`${baseUrl}/current.json?key=${weatherApi}&q=${query}&aqi=yes`

// Example request
http://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London&aqi=yes
```

### API Response Structure

```javascript
{
  location: {
    name: "London",
    country: "United Kingdom",
    // ... more location data
  },
  current: {
    last_updated: "2024-12-27 10:30",
    temp_c: 15.0,
    feelslike_c: 13.5,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
    },
    wind_kph: 20.5,
    wind_dir: "SW",
    humidity: 75,
    cloud: 50,
    // ... more weather data
  }
}
```

## 🔄 Data Flow

### Search Flow
```
1. User enters city name
2. Form submit event triggered
3. Prevent default form submission
4. Get and trim city name
5. Call getWeatherData(city)
6. Fetch data from API
7. Parse response
8. Extract relevant data
9. Create weather object
10. Call renderCard(weather)
11. Display weather card
12. Clear input field
```

### Error Handling
```javascript
try {
  const weatherData = await getWeatherData(city);
  renderCard(weatherData);
  textBox.value = "";
} catch (error) {
  container.innerHTML = `<p class="text-red-400">Error fetching weather data. Please try again.</p>`;
  console.error(error);
}
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Internet connection (for API calls)
- WeatherAPI API key (free tier available)

### Installation

1. **Clone or navigate to project**
   ```bash
   git checkout pro4
   cd src
   ```

2. **Get API Key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/)
   - Sign up for free account
   - Copy your API key

3. **Update API Key**
   ```javascript
   // In script.js, replace with your key
   const weatherApi = "YOUR_API_KEY_HERE";
   ```

4. **Run the application**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Or simply open index.html in browser
   ```

5. **Use the app**
   - Enter a city name
   - Click "Search"
   - View weather data

## 📝 Code Documentation

### Fetching Weather Data

```javascript
const getWeatherData = async (query) => {
  // Construct API URL with query parameter
  const requestUrl = `${baseUrl}/current.json?key=${weatherApi}&q=${query}&aqi=yes`;
  
  // Fetch data from API
  const res = await fetch(requestUrl);
  
  // Parse JSON response
  const data = await res.json();

  // Extract and structure relevant data
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
```

### Rendering Weather Card

```javascript
const renderCard = (weather) => {
  // Create card element
  const card = document.createElement("div");
  card.className = "bg-linear-to-b from-30% from-slate-800 to-slate-600 rounded-xl p-6 shadow-lg w-full outline-[0.3px] outline-slate-700";

  // Build card HTML with weather data
  card.innerHTML = `
    <div class="flex justify-between items-start mb-4">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-200">
          ${weather.city}, ${weather.country}
        </h2>
        <p class="text-xs text-slate-400">${weather.lastUpdated}</p>
      </div>
      <img src="https:${weather.icon}" alt="${weather.condition}" class="size-16">
    </div>
    
    <!-- Temperature Section -->
    <div class="mb-6">
      <div class="flex items-baseline gap-2">
        <span class="text-5xl font-black text-slate-200">${weather.tempC}°</span>
        <span class="text-lg text-slate-300">C</span>
      </div>
      <p class="text-slate-300 font-medium mt-2">${weather.condition}</p>
      <p class="text-xs text-slate-400">Feels like ${weather.feelsLikeC}°</p>
    </div>
    
    <!-- Metrics Grid -->
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

  // Clear container and add new card
  container.innerHTML = "";
  container.appendChild(card);
};
```

### Form Handling

```javascript
const handleSearch = async (e) => {
  e.preventDefault();  // Prevent page reload
  
  const city = textBox.value.trim();  // Get and clean input

  if (!city) return;  // Validate input

  try {
    // Fetch and display weather
    const weatherData = await getWeatherData(city);
    renderCard(weatherData);
    textBox.value = "";  // Clear input
  } catch (error) {
    // Handle errors gracefully
    container.innerHTML = `<p class="text-red-400">Error fetching weather data. Please try again.</p>`;
    console.error(error);
  }
};

// Attach event listener on DOM load
document.addEventListener("DOMContentLoaded", () => {
  textBox = document.getElementById("cityName");
  container = document.getElementById("weatherCardContainer");
  
  document.getElementById("searchCity").addEventListener("submit", handleSearch);
});
```

## 🔧 Customization Guide

### Add More Weather Data

```javascript
// In getWeatherData function, add more fields
const w = {
  // ... existing fields
  pressure: data.current.pressure_mb,
  visibility: data.current.vis_km,
  uvIndex: data.current.uv,
  precipitation: data.current.precip_mm,
};

// In renderCard, add to metrics grid
<div class="bg-slate-900/50 rounded-lg p-3">
  <p class="text-xs text-slate-400 mb-1">UV Index</p>
  <p class="text-lg tracking-tighter font-semibold text-white">${weather.uvIndex}</p>
</div>
```

### Add Temperature Unit Toggle

```javascript
let isCelsius = true;

const toggleUnit = () => {
  isCelsius = !isCelsius;
  // Re-render with new unit
};

// In renderCard
const temp = isCelsius ? weather.tempC : (weather.tempC * 9/5) + 32;
const unit = isCelsius ? 'C' : 'F';
```

### Add Loading State

```javascript
const handleSearch = async (e) => {
  e.preventDefault();
  const city = textBox.value.trim();
  if (!city) return;

  // Show loading
  container.innerHTML = `
    <div class="text-center text-slate-400">
      <p>Loading weather data...</p>
    </div>
  `;

  try {
    const weatherData = await getWeatherData(city);
    renderCard(weatherData);
    textBox.value = "";
  } catch (error) {
    container.innerHTML = `<p class="text-red-400">Error fetching weather data.</p>`;
  }
};
```

### Add Search History

```javascript
const saveToHistory = (city) => {
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  if (!history.includes(city)) {
    history.unshift(city);
    history = history.slice(0, 5); // Keep last 5
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }
};

// Display history as quick search buttons
const renderHistory = () => {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  // Render buttons...
};
```

### Add Weather Forecast

```javascript
// Use forecast endpoint instead of current
const getForecast = async (query, days = 3) => {
  const requestUrl = `${baseUrl}/forecast.json?key=${weatherApi}&q=${query}&days=${days}&aqi=yes`;
  const res = await fetch(requestUrl);
  const data = await res.json();
  return data.forecast.forecastday;
};
```

## 🎓 Learning Outcomes

This project demonstrates:

1. **API Integration**
   - Making HTTP requests
   - Handling async operations
   - Parsing JSON responses
   - Error handling

2. **JavaScript Concepts**
   - Async/await
   - Fetch API
   - Promise handling
   - DOM manipulation
   - Event handling

3. **Data Processing**
   - Extracting relevant data
   - Data transformation
   - Template literals
   - String interpolation

4. **User Experience**
   - Loading states
   - Error messages
   - Input validation
   - Dynamic updates

5. **Modern Web Development**
   - External API usage
   - Responsive design
   - Component rendering
   - Form handling

## 🔄 Future Enhancements

Potential improvements:
- [ ] 7-day weather forecast
- [ ] Hourly forecast
- [ ] Weather alerts
- [ ] Temperature unit toggle (C/F)
- [ ] Geolocation for current location
- [ ] Search history
- [ ] Favorite locations
- [ ] Weather maps
- [ ] Air quality index display
- [ ] Sunrise/sunset times
- [ ] Weather animations
- [ ] Multiple location comparison
- [ ] Weather widgets
- [ ] Export weather data
- [ ] Weather notifications

## 🐛 Known Issues

### Current Issues
- No loading state during API call
- HTTP URL instead of HTTPS (security warning)
- No input validation for city names
- Error messages could be more specific
- No handling for API rate limits

### API Limitations (Free Tier)
- Limited to 1 million calls/month
- Real-time data only (no historical)
- Limited to current + 3-day forecast
- No access to premium features

## 💡 Pro Tips

### Security Best Practices

```javascript
// Don't expose API key in client-side code
// Use environment variables and backend proxy

// Backend API route (Node.js example)
app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});
```

### Enhanced Error Handling

```javascript
const getWeatherData = async (query) => {
  try {
    const requestUrl = `${baseUrl}/current.json?key=${weatherApi}&q=${query}&aqi=yes`;
    const res = await fetch(requestUrl);
    
    if (!res.ok) {
      if (res.status === 400) throw new Error('City not found');
      if (res.status === 401) throw new Error('Invalid API key');
      if (res.status === 403) throw new Error('API limit exceeded');
      throw new Error('Failed to fetch weather data');
    }
    
    const data = await res.json();
    // ... process data
  } catch (error) {
    throw error;
  }
};
```

### Input Validation

```javascript
const validateCity = (city) => {
  if (!city || city.trim().length === 0) {
    return { valid: false, error: 'Please enter a city name' };
  }
  if (city.length < 2) {
    return { valid: false, error: 'City name too short' };
  }
  if (!/^[a-zA-Z\s-]+$/.test(city)) {
    return { valid: false, error: 'Invalid city name format' };
  }
  return { valid: true };
};
```

## 📚 Resources

- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 👤 Author

**Om Pratap Dhaker**
- GitHub: [@OPDhaker](https://github.com/OPDhaker)
- LinkedIn: [opdhaker](https://linkedin.com/in/opdhaker)

---

**Project:** Weather App  
**Branch:** pro4  
**Last Updated:** December 2025  
**Version:** 1.0.0  
**API Provider:** WeatherAPI.com
