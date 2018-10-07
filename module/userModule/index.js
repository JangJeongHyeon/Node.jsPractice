import {odd, even} from './var';
import checkNumber from './func';

const checkStringOddOrEven = (str)=>{
    if(str.length % 2){
        return console.log(odd);
    }else{
        return console.log(even);
    }
};


checkNumber(10);
checkStringOddOrEven('hello');