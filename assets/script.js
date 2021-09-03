let city = $("#searchTerm").val();
const apiKey = "&appid=48e10b003671672408ff6f50d6f5af92";
let date = new Date();



$("#searchBtn").on("click", function() {

}
city = $("#searchTerm").val();
$('#forecastH5').addClass('show');
   $("#searchTerm").val("");  
$("#searchTerm").keypress(function(event) { 
if (event.keyCode === 13) { 
  event.preventDefault();
  $("#searchBtn").click(); 
} 
});
const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
    $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response){

    console.log(response)

    console.log(response.name)
    console.log(response.weather[0].icon)

    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    console.log(Math.floor(tempF))

    console.log(response.main.humidity)

    console.log(response.wind.speed)

    getCurrentConditions(response);
    getCurrentForecast(response);
    makeList();

    })
  });

  function makeList() {
    let listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
  }
