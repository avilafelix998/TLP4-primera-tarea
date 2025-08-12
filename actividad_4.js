const toUpperCaseOriginal = String.prototype.toUpperCase;

String.prototype.toUpperCase = function(){
    return "ESTO ESTÁ PROHIBIDO";

};

const palabra ="hola";
console.log(palabra.toUpperCase());