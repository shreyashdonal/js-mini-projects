const apiKey = "3243c216ad74e2c981944f7fadf6838b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var obj=await response.json();
   if(response.status==404){
      document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
   }else{
    document.querySelector('.error').style.display = "none";
    console.log(obj);
    document.querySelector('.temp').innerHTML=Math.round(obj.main.temp)+"°c";
    document.querySelector('.city').innerHTML=obj.name;
    document.querySelector('.humidity').innerHTML=obj.main.humidity+"%";
    document.querySelector('.wind').innerHTML=obj.wind.speed+"km/h";
 
    if(obj.weather[0].main == "Clouds"){
        weatherIcon.setAttribute("src", "images/clouds.png");
    }
    else if(obj.weather[0].main == "Clear"){
        weatherIcon.setAttribute("src", "images/clear.png");
    }
    else if(obj.weather[0].main == "Rain"){
        weatherIcon.setAttribute("src", "images/rain.png");
    }
    else if(obj.weather[0].main == "Drizzle"){
        weatherIcon.setAttribute("src", "images/drizzle.png");
    }
    else if(obj.weather[0].main == "Mist"){
        weatherIcon.setAttribute("src", "images/mist.png");
    }

    let weather=document.querySelector('.weather');
    console.log(weather);
    weather.style.display="block";
   }


  
}
        

searchBtn.addEventListener("click",()=>{
    console.dir(searchBox.value);
checkWeather(searchBox.value);
})