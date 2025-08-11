function CuentaBancaria(titular,saldoInicial){
    this.titular = titular;
    this.saldo = saldoInicial;
}
// depositar
CuentaBancaria.prototype.depositar = function(monto){
    if (monto >0) {
        this.saldo += monto;
        console.log(`depositaste $${monto}. Tu nuevo saldo es: $${this.saldo}`);
    } else {
        console.log("El monto a depositar debe ser mayor que 0.");
    }
};
// extraer
CuentaBancaria.prototype.extraer = function(monto){
    if (monto > this.saldo){
        console.log("no tiene suficiente dinero");
    }else if (monto <= 0){
        console.log("el monto a extraer tiene que ser mayor a 0");
    } else{
        this.saldo -= monto;
        console.log(` retiraste $${monto}. Nuevo saldo: $${this.saldo}`);
    }

};
// consultar saldo
CuentaBancaria.prototype.consultarSaldo = function(){
    console.log(`saldo actual: $${this.saldo}`);
};

const cuenta1 = new CuentaBancaria("Felix Avila", 10000);

cuenta1.consultarSaldo()
cuenta1.depositar(200)
cuenta1.extraer(18000)
cuenta1.extraer(3000)
cuenta1.consultarSaldo()