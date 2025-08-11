class CuentaBancaria {
    titular
    #saldo
    constructor(titular, saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial >= 0? saldoInicial:0;
    }
// consultar saldo
get saldo() {
    return this.#saldo;
}
// modificar el saldo
set saldo(nuevoSaldo){
    if(nuevoSaldo >= 0){
        this.#saldo = nuevoSaldo;
    }else{
    console.log("el saldo no puede ser negativo");
    }
}
// depositar

depositar(monto) {
    if (monto > 0){
        this.#saldo += monto;
        console.log(`depositaste $${monto}. Tu nuevo saldo: $${this.#saldo}`);
    } else {
         console.log("El monto a depositar debe ser mayor que 0");
        }
    
}
}
// extraer 










// class CuentaVirtual extends CuentaBancaria () {

// }

// function CuentaVirtual () {}

// CuentaVirtual.prototype = Object.setPrototypeOf(CuentaBancaria);

// CuentaVirtual1 =  Object.create(CuentaBancaria)
// CuentaVirtual1 =  Object.setPrototypeOf(Financiera)

// Object.assign();

// CuentaVirtual.titular

// // Prototype ES5
// function CuentaBancaria (titular, saldoInicial) {
//     this.titular = titular;
//     this.saldo = saldoInicial
// }

// CuentaBancaria.prototype.Nuevosaldo = function (saldo) {
//     console.log(`Hola - Saldo ${this.saldo}`);
// }

// const cuenta = new CuentaBancaria("John Doe", 1000);


// cuenta.Nuevosaldo();



