const num = require('prompt-sync') ({sigint: true});

let An = parseInt(num ("Digite = "));
let Bn = parseInt(num ("Digite = "));
let Cn = parseInt(num ("Digite = "));
let Dn = parseInt(num ("Digite = "));
let En = parseInt(num ("Digite = "));

const numeros = [An,Bn,Cn,Dn,En];

const numerosOrdenados = numeros;
numerosOrdenados.sort();

console.log(numerosOrdenados);