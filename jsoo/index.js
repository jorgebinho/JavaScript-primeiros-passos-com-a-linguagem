class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } 
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor; 
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "José";
cliente1.cpf = 11122233345;

cliente2.nome = "Alice";
cliente2.cpf = 88822233345;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);


contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.depositar(-1);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo.saldo);

//console.log(cliente1,cliente2);
