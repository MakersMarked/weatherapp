// let city = 'ventura:ca';

// let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=58a24d024b244daba7f31956230608&q=${city}`, {mode: 'cors'})
// let data = await response.json();



'use strict'

 export const fetchData = async (city) => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=58a24d024b244daba7f31956230608&q=${city}`, {mode: 'cors'})
            console.log(response.status)
            const data = await response.json();
            console.log(data)
            return data;
        }
        catch(error){
            console.log('this is an error', error)
        }
    }
 fetchData('ventura:ca')