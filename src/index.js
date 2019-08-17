import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let counter = 0;
let digit = '';


function countDigits (n){

    if (n < 10){
        digit = '000' + counter.toString();
        return digit
     }
     else if (n<100){
         digit = '00' + counter.toString();
         return digit
     }
     else if(n < 1000){
         digit = '0' + counter.toString();
         return digit
     }
     else {return counter.toString()}
}
setInterval(()=>{

 
    

    counter++;

    ReactDOM.render(

        <App 
        
        digits = {countDigits(counter)}
            
        
        
        
        />, document.getElementById('root'));

}, 1000)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
