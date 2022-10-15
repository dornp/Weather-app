function getIcon(value) {
    let icon = '';
    switch (value) {
        case 'Thunderstorm':
            icon = 'img/bolt-free-icon-font.png';
            break;
        case 'Drizzle':
        case 'Rain':
            icon = 'img/cloud-rain.png';
            break;
        case 'Snow':
            icon = 'img/snowflakes-free-icon-font.png';
            break;
        case 'Mist':
        case 'Fog':
        case 'Haze':
        case 'Ash':
        case 'Smoke':
            icon = 'img/smog.png';
            break;
        case 'Dust':
        case 'Sand':
            icon = 'img/sand.png';
            break;
        case 'Squall':
        case 'Tornado':
            icon = 'img/tornado.png';
            break;
        case 'Clouds':
            icon = 'img/clouds-free-icon-font.png';
            break;
        default: 
            icon = 'img/sun-free-icon-font.png';
            break;
    }
    return icon;
}

$(document).ready(function(){
    $.get("https://api.openweathermap.org/data/2.5/weather?lat=55.755826&lon=37.6173&appid=28119160885401e9463aae59c6f18e4e", function(data) {
        $('#clouds').text(`${data.clouds.all}%`);
        $('#humidity').text(`${data.main.humidity}%`);
        $('#wind').text(`${data.wind.speed}m/s`);
        $('#rain').text(`${data.main.pressure}hPa`);
        $('.temperature').html(`${Math.round(data.main.temp - 273.15)}&deg;`);
        $('.city').text(`${data.name}`);
        $('#weather_icon').attr('src', getIcon(data.weather[0].main));
        $('.type_of_weather').text(data.weather[0].main);
    });
});