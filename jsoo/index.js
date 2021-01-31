import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("1234567");
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234567");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);