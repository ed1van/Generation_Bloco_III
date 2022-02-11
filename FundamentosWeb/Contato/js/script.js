/*  let = chamar variavel / dentro de um escopo específico
var: escopo global / pode ser acessado em qualquer escopo
const= variavel que não muda seu valor */

/*
case sensitive = reconhece letras maiusculas e minusculas

pode ser acessada por:
tag, ficaria  getElementByTag ()
id, ficaria getElementById("nome")
nome, ficaria getElementByName()
classe, ficaria getElementByClassName()
e por seletor, ficaria querySelector()
*/


let nome = window.document.querySelector("#nome")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = window.document.querySelector("#mapa")

nome.style.width = '82%';
email.style.width = '82%';

function validarNome() {
    let txt = document.querySelector("#txtNome")
    
    if(nome.value.length < 3)
    {
        txt.innerHTML = "Nome invalido"
        txt.style.color = "red"
        nomeOk = false
    }
    else
    {
        txt.innerHTML = "Nome valido"
        txt.style.color = "green"
        nomeOk = true
    }

}

function validarEmail()
{   
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == - 1 || email.value.indexOf('.') == - 1)
    {
        txtEmail.innerHTML = "E-mail invalido!"
        txtEmail.style.color = "red"
        emailOk = false
    
    }
    else
    {
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.style.color = "green"
        emailOk = true
    } 
}

    function validarAssunto()
    { let txtAssunto = document.querySelector("#txtAssunto")

        if(assunto.value.length >99)
        {
            txtAssunto.innerHTML = "Texto muito grande, o máximo é 100 caracter"
            txtAssunto.style.color = "red"
            txtAssunto.style.display = 'block'
            assuntoOk = false
        }
        else
        {
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
    }

        function enviar()
        {
            if(nomeOk == true && emailOk == true && assuntoOk == true)
            {
                alert("Formulário enviado com sucesso!")
                
                
            }
            else
            {
                alert("Preencha corretamente o formulário!")
            }
        }

        function mapaZoom() {
            mapa.style.width = '800px'
            mapa.style.height = '600px'
         }
         
         function mapaNormal() {
            mapa.style.width = '400px'
            mapa.style.height = '250px'
         }

    




 


