export const apiEndPoint = {
    getCountry: 'https://restcountries.com/v3.1/all',
    getWheather: (latLong) =>`https://api.weatherapi.com/v1/forecast.json?key=1f194643f0b34179ba280755242904&q=${latLong}&days=7&aqi=no&alerts=no`,
}
