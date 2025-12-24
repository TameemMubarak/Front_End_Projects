 console.log("Hello Do You need to Know about weather... here u go... ");
    const apiurl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
    const apikey='';
    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    async function checkweather(city){
    	const weatherIcon=document.querySelector(".weather-icon");
        const response=await fetch(apiurl+city+`&appid=${apikey}`);
        let data=await response.json();
        console.log(data);
         if(response.status==404){
            document.querySelector(".weather").style.display="none";
            document.querySelector(".error").style.display="block";
        }
        
        else{
            document.querySelector(".error").style.display="none";
            document.querySelector(".weather").style.display="block";
            document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr";
        if(data.weather[0].main="Clouds")weatherIcon.src="images/clouds.png";
        if(data.weather[0].main="Clear")weatherIcon.src="images/clear.png";
        if(data.weather[0].main="Drizzle")weatherIcon.src="images/drizzle.png";
        if(data.weather[0].main="Mist")weatherIcon.src="images/mist.png";
        if(data.weather[0].main="rain")weatherIcon.src="images/rain.png";
        if(data.weather[0].main="snow")weatherIcon.src="images/snow.png";
        }
    }
    searchBtn.addEventListener("click",()=> checkweather(searchBox.value));
   
