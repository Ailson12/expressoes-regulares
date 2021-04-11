import ValidarCpf from "./ValidarCpf.js"

const cpf = document.querySelector("#cpf");
const validaCpf = new ValidarCpf(cpf).iniciar();