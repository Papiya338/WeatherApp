const apiKey = 'c0056094a2deccaac403a18c35955ac2'; // Replace 'YOUR_API_KEY' with your actual API key

function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <h1><p>Humidity: ${data.main.humidity}%</p></h1>
            `;
        })
        .catch(error => {
            console.log('Error:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = 'Please write a valid location';
        });
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;
    fetchWeatherData(city);
});
