import { async } from "postcss-js";




export const display = async (place) => {
    const currentIcon = document.querySelector('.img')
    const location = document.querySelector('#location');
    const temp = document.querySelector('.temp');
    const condition = document.querySelector('.condition');
    const localTime = document.querySelector('.local-time');
    
    
    

    let data = await place;
    location.innerHTML = `${data.location.name}, ${data.location.region} <br> ${data.location.country}`;
    localTime.textContent = data.location.localtime;
    temp.textContent = `${data.current.temp_f}° F`;
    condition.textContent = `${data.current.condition.text}`;
    currentIcon.src = data.current.condition.icon;
    

}


