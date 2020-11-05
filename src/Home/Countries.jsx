import React, { useState, useEffect } from 'react';
import AppConfig from '../config/config';
import CountryDetail from './CountryDetail';

function Countries() {
    // Declare a new state variable, which we'll call "count"
    const [country, setCountry] = useState([]);
 
    useEffect(function effectFunction() {
        const apiUrl = 'https://restcountries.eu/rest/v2/all';
        fetch(apiUrl)
            .then(response => response.json())
            .then((data) => {
                setCountry(data);
                AppConfig.COUNTRY_DATA = data;
                console.log('This is your data', data);
            });
    }, []);
    return (
        <div className="country_details">
           <CountryDetail countryList = {country}/>
        </div>
    );
}

export default Countries;