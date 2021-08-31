let forecast = {
    "apiKey": "55f1b228797ce6d2806f07ff2d530373",
    fetchForecast: function(city) {
        fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayForecast: function(data) {
        var { name } = data;
        var { icon, des } = data.forecast [0];
        var { temp, humidity } = data.main;
        var { speed } = data.wind;
        console.log(name, icon, des,temp,humidity,speed);
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".city").innerText = "Forecast in " + name;
        document.querySelector(".temperature").innerText = temp + "°F";
        document.querySelector(".des").innerText = des;
        document.querySelector(".wind").innerText = "Wind speed : " + speed + " mp/h";
        document.querySelector(".icon").scr = "https://openweatheermap.org/img/wn/" + icon+ "@2x.png"
    }
};