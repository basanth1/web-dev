
const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const deg = document.querySelector(".deg");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

button.addEventListener("click",()=>{
   weatherUpdate();
});
console.log(deg.textContent);
console.log(humidity.textContent);
console.log(wind.textContent);

const weatherUpdate= async ()=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=765b44ae620d87c2666099d854960551&units=metric`;
    const response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    deg.innerText =Math.round( data.main.temp)+"°C";
    city.innerText = data.name;
    humidity.innerText = data.main.humidity+"%";
    wind.innerText = data.wind.speed+" KMPH";
    if(data.weather[0].main === "Haze"){
        weatherIcon.src="drizzle.png";
    }
    else  if(data.weather[0].main === "Clouds"){
        weatherIcon.src="clouds.png";
    }
    else  if(data.weather[0].main === "Clear"){
        weatherIcon.src="clear.png";
    }
    else  if(data.weather[0].main === "Mist"){
        weatherIcon.src="mist.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src="rain.png";
    }
    else  if(data.weather[0].main === "Snow"){
        weatherIcon.src="snow.png";
    }
};