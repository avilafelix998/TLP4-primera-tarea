String.prototype.concatenarPalabra = function(palabra){
    return `${this} ${palabra}`;

};
let palabra1 = "con ganas de";
let palabra2 = palabra1.concatenarPalabra("estudiar tlp4");

console.log(palabra1);
console.log(palabra2);
