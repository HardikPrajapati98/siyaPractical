import React, {useEffect, useState} from 'react';


const GetCityData = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countryResponse = await response.json();
        setCountry(countryResponse)
    }
    return country || []
};

export default GetCityData;
