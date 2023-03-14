import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Lais, 78945612323, 4567")

const diretor = new Diretor("Marina, 10000, 12345678900");
diretor.cadastrarSenha("1234")
const gerente = new Gerente("Sandra, 5000, 12365498711");
gerente.cadastrarSenha("12345")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4567")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)