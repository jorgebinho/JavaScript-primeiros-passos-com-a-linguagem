export class Cliente {
    nome;
    _cpf;

    get _cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

}