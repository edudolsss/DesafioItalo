import { Pessoa,criarPessoa,bdPessoas} from "../Classes/pessoa.js"


document.getElementById('btnCadastrar').addEventListener('click',function(){
    const nome = document.getElementById('inputNome').value
    const idade = document.getElementById('inputIdade').value
    criarPessoa(nome,idade)

    document.getElementById('content3').innerHTML = ""
    
    for(var i = 0; i < (bdPessoas.length); i++){
        const p = document.createElement('p')
        p.innerHTML = "<h3>" +  bdPessoas[i].falar() + "</h3><h3>" + bdPessoas[i].falarIdade() + "</h3>"
        document.getElementById('content3').appendChild(p)
    }

})



function buscarCEP(numeroCEP){
    const url = "https://viacep.com.br/ws/"+numeroCep+"/json/"
    const request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    const dados = JSON.parse(request.responseText)
}