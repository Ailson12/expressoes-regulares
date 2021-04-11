export default class ValidarCpf {
    constructor(element) {
        this.element = element;
    }
    
    limpar(cpf) {
        return cpf.replace(/\D/g, '');
    }
    
    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }
    
    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }

    validar(cpf) {
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
        return (matchCpf && matchCpf[0] === cpf);
    }
    
    validarNaMudanca(cpfElement) {
        if (this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value);
            cpfElement.classList.add("valido");
            cpfElement.classList.remove("erro-validacao");
            cpfElement.nextElementSibling.classList.remove("ativar");
        } else {
            cpfElement.classList.remove("valido");
            cpfElement.classList.add("erro-validacao");
            cpfElement.nextElementSibling.classList.add("ativar");
        }
    }
 
    adicionarErroSpan() {
        const erroElement = document.createElement("span");
        erroElement.classList.add("erro-texto");
        erroElement.innerText = "CPF inválido";
        this.element.parentElement.insertBefore(erroElement, 
            this.element.nextElementSibling
        )
    }
    
    adicionarEvento() {
        this.element.addEventListener("change", () => {
            this.validarNaMudanca(this.element);
        });
    }
    
    iniciar() {
        this.adicionarEvento();
        this.adicionarErroSpan();
        return this;
    }
}