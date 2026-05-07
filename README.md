# 🌤 Weather App
 
A clean, responsive weather app built with vanilla HTML, CSS, and JavaScript. Select a city from the dropdown and instantly get live weather data including temperature, humidity, wind speed, and a real-time compass showing wind direction.
 
---
 
## ✨ Features
 
- 🌍 Weather data for 6 cities: New York, Los Angeles, Chicago, Paris, Tokyo, London
- 🌡️ Displays temperature, feels like, humidity, wind speed & gusts
- 🧭 Animated compass needle that rotates to the real wind direction
- ⚠️ Graceful error handling with user-friendly alerts
- 📱 Responsive layout that works on mobile and desktop
- ⚡ No frameworks, no dependencies — pure HTML, CSS & JS
---
 
## 🛠️ How to Use
 
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```
 
2. **Open the app**  
   Just double-click `index.html` in your file explorer — no server or build step needed.
3. **Select a city** from the dropdown and click **Get Weather**.
---
 
## 📁 Project Structure
 
```
weather-app/
│
├── index.html       # HTML
└── README.md        # You are here
├── styles.css       # Styling
└── script.js        # Interactivity
```
 
---
 
## 🌐 API
 
Weather data is fetched from a public weather REST API:
 
```
GET https://weather-proxy.freecodecamp.rocks/api/city/<CITY>
```
 
**Sample Response:**
```json
{
  "weather": [{ "main": "Clear", "description": "clear sky", "icon": "..." }],
  "main": {
    "temp": 8.91,
    "feels_like": 4.91,
    "humidity": 50
  },
  "wind": { "speed": 9.39, "deg": 285, "gust": 12.52 },
  "name": "Chicago"
}
```
 
> Temperatures are in **°C**, wind speed in **m/s**.
 
---
 
## ⚙️ How It Works
 
- **`getWeather(city)`** — async function that fetches live weather data and returns JSON. Returns `undefined` on failure and logs the error to the console.
- **`showWeather(city)`** — async function that calls `getWeather`, populates all weather elements on the page, and shows an alert if something goes wrong.
- The **compass needle** rotates using CSS `transform: rotate()` driven by the `wind.deg` value from the API response.
---
 
## 🏙️ Supported Cities
 
New York · Los Angeles · Chicago · Paris · Tokyo · London
 
---
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).
 
---
 
## 🙋‍♂️ Author
 
**Hammad**  
Feel free to fork, star ⭐, and make it your own!
