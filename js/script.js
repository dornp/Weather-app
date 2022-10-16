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

function getPic(value) {
    let pic = '';
    switch (value) {
        case 'Thunderstorm':
            pic = 'img/thunderstorm.jpg';
            break;
        case 'Drizzle':
        case 'Rain':
            pic = 'img/rainy.jpg';
            break;
        case 'Snow':
            pic = 'img/snow.jpg';
            break;
        case 'Mist':
        case 'Fog':
        case 'Haze':
        case 'Ash':
        case 'Smoke':
            pic = 'img/foggy-weather.jpg';
            break;
        case 'Dust':
        case 'Sand':
            pic = 'img/sand.jpg';
            break;
        case 'Squall':
        case 'Tornado':
            pic = 'img/tornado.jpg';
            break;
        case 'Clouds':
            pic = 'img/clouds.jpg';
            break;
        default: 
            pic = 'img/sunny.jpg';
            break;
    }
    return pic;
}

function getWeather(city) {
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28119160885401e9463aae59c6f18e4e`, function(data) {
        const condition = data.weather[0].main;
        $('#clouds').text(`${data.clouds.all}%`);
        $('#humidity').text(`${data.main.humidity}%`);
        $('#wind').text(`${data.wind.speed}m/s`);
        $('#rain').text(`${data.main.pressure}hPa`);
        $('.temperature').html(`${Math.round(data.main.temp - 273.15)}&deg;`);
        $('.city').text(`${data.name}`);
        $('#weather_icon').attr('src', getIcon(condition));
        $('.type_of_weather').text(condition);
        $('.big_screen').css('background-image',`url(${getPic(condition)})`)
    });
}

$(document).ready(function(){
    $('.town').click(function(){
        getWeather($(this).text());
    });

    getWeather('Moscow');

    $('.search_btn').click(function(){
        getWeather($('.search_field').val());
    });

    $('.search_field').keyup(function (e) { 
        if(e.which === 13) {
            getWeather($(this).val());
        }
    });
});