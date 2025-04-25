const API_KEY="c5e09104343ca5d0aa1e492e5841fb56";
const searchbutton= document.getElementById("searchbutton");
const cityInput= document.getElementById("cityInput");

searchbutton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city!=="")
    {
        getWeather(city);
    }
});

function getWeather(city)
{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => {
        if(!response.ok) throw new Error("City not found");
        return response.json();
    })
    .then((data) => {
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed}m/s`;
        document.getElementById("weatherResult").classList.remove("hidden");
    })
    .catch((err) => {
        alert("City not found! Please Try Again!!");
    });
}