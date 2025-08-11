
// Punto uno
// class CuentaBancaria {

//     titular;
//     saldoInicial;

//     constructor(titular, saldoInicial) {
//         this.titular = titular;
//         this.saldoInicial = saldoInicial;
//     }   

//     depositar(monto) {
//         this.saldoInicial += monto
//     }

//     extraer (monto) {
//         if (this.saldoInicial >= monto){
//             this.saldoInicial -= monto;
//         }else{
//             console.log("te falta más plata")
//         }
//     }
//     consultarSaldo(){
//         console.log(`dinero disponible ${this.saldoInicial}`)
//     }
// };

// Punto dos

class CuentaBancaria {

    titular;
    #saldoInicial;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldoInicial = saldoInicial;
    }   
    get saldoInicial(){
        return this.#saldoInicial
    }

    set saldo(nuevoSaldo){
    
        if (nuevoSaldo < 0){
            return console.log("el saldo ingresado debe ser mayor a cero")
        }

        this.#saldoInicial = nuevoSaldo

    }

    set depositarSaldo(saldo){
        
    }


};

const cuenta1 = new CuentaBancaria("Felix", 5000)
console.log(cuenta1.saldoInicial)

cuenta1.saldo = 500
console.log(cuenta1.saldoInicial)