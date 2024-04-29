export const apiEndPoint = {
    getCountry: 'https://restcountries.com/v3.1/all',
    getWheather: ({ lat, lon }) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`,
    getWheatherbyDay:({ lat, lon })=>`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={2&appid=`
}
