// the key
const key = "kcv8NdlGrTUeMcSgnK3GTDxvKTCTLM3O";

// getWeather function

const getWeather = async (id) => {
    const url = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(url + query);
    const data = await response.json();

    return data[0];
};

// getCity function
const  getCity = async (city) => {
    const cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(cityUrl + query);
    const data = await response.json();

    return data[0];
};

