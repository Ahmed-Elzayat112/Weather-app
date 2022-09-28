const form = document.querySelector('form');
const details = document.querySelector(".card-bottom");
const img = document.querySelector(".img");
const logo = document.querySelector(".icon img");
const card = document.querySelector(".card");

// update ui

const updateUi = (data) => {

    const cityDets = data.cityDets;
    const weather = data.weather;

    
    details.innerHTML = `
        <h2 class="city my-3">${cityDets.EnglishName}</h2>
        <div class="condition my-3">${weather.WeatherText}</div>
        <div class="temp my-3 display-4">
        <span class="tempreture">${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>`;

    let image = null;
    image = weather.IsDayTime ? `image/day.svg` : `image/night.svg`;
    img.setAttribute('src', image);

    const icon = `image/icons/${weather.WeatherIcon}.svg`;

    logo.setAttribute('src', icon);
    
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    
};



const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
    
};

// add event for submit

form.addEventListener('submit', e => {

    e.preventDefault();

    const city = form.city.value.trim();
    form.reset();

    updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err));
    
});


