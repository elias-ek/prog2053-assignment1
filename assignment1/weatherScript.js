const weathercontainer = document.getElementById('weathercontainer')
var latitude
var longitude

async function fetchWeather(latitude, longitude, city) {

    const xhr = new XMLHttpRequest(latitude, longitude)
    xhr.open('GET', `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    
    xhr.onload = function(){
        if (xhr.status === 200){

            var weather = document.createElement('div');
            weather.id = `${city}`
            weather.className = 'weatherdiv'
            

            const info = JSON.parse(xhr.responseText);
            weather.innerHTML = `<h2>${city}</h2><p>Time: ${info.current_weather.time}</p><p>Temperature: ${info.current_weather.temperature}</p><p>Wind Speed: ${info.current_weather.windspeed}</p><p>Wind Direction: ${info.current_weather.winddirection}</p>`;
            weathercontainer.appendChild(weather);
            
        } else {
            weathercontainer.innerHTML = '<h2>Failed to load weather</h2>'
        }
    };

    xhr.onerror = function(){
        weathercontainer.innerHTML = '<h2>Failed to load weather</h2>'
    };
    xhr.send()
    
    
}

fetchWeather(59.9139, 10.7522, 'Oslo')
fetchWeather(52.52, 13.405, 'Berlin')
fetchWeather(35.6764, 139.65, 'Tokyo')
fetchWeather(40.7128, 74.006, 'New York City')
fetchWeather(34.0549, 118.2426, 'Los Angeles')



