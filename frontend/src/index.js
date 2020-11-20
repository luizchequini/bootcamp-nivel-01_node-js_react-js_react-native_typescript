import {soma} from './soma';

const subtracao = (a, b) => {
    if(a < b){
        return b - a;
    }
    return a - b;
}

console.log(soma(10, 10));
console.log(subtracao(1, 3));