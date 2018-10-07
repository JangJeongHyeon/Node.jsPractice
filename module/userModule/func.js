import {odd, even} from './var';

const checkOddOrEven = (num)=>{
    if(num % 2){
        return console.log(odd);
    }else{
        return console.log(even);
    }
};

export default checkOddOrEven;