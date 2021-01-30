import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "José";
cliente1.cpf = 11122233345;

cliente2.nome = "Alice";
cliente2.cpf = 88822233345;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);