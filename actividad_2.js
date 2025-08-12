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
// extraer
    extraer(monto) {
        if (monto > this.#saldo) {
            console.log("fondos insuficientes");
        } else if (monto <= 0) {
            console.log("El monto a extraer debe ser mayor que 0.");
        } else {
            this.#saldo -= monto;
            console.log(`Has retirado $${monto}. Nuevo saldo: $${this.#saldo}`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.#saldo}`);
    }


}

const cuenta1 = new CuentaBancaria("felix",2000) 

cuenta1.consultarSaldo(); 
cuenta1.depositar(500);   
cuenta1.extraer(3000);    
cuenta1.extraer(1500);    

console.log(cuenta1.saldo); 
cuenta1.saldo = -500;       






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



