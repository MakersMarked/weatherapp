import {fetchData} from './weather';
import { display } from '../display';
import './style.css';




const img = document.querySelector('.img')
const input = document.querySelector('input');
const btn = document.querySelector('button');
const location = document.querySelector('#location');
const temp = document.querySelector('.temp');
const condition = document.querySelector('.condition');

display(fetchData('ventura:ca'));



btn.addEventListener('click', () => {
    display(fetchData(input.value))
    
});

