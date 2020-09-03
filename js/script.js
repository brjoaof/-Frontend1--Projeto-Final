if(sessionStorage.getItem('email') != undefined) {
        document.querySelector("#dropdownMenuButton").innerHTML = "Olá, João Felipe!!!<br>Seja Bem-vindo!"
        $('#menuLogin').hide();
        $('#menuCliente').show();
}
    

function verLogin() {
    console.log("oi")
    $('#dropdownMenuButton').dropdown('toggle')
}

const login = () => {
    var email = document.querySelector("#email").value
    var senha = document.querySelector("#senha").value
  
    if(email == "joao@tmj.com.br" && senha == "tmj123"){
         sessionStorage.setItem('email', email);
         sessionStorage.setItem('senha', senha);
        alert("Seja Bem-vindo, João!")
        verLogin();
        document.querySelector("#dropdownMenuButton").innerHTML = "Olá, João Felipe!!!<br>Seja Bem-vindo!"
        $('#menuLogin').hide();
        $('#menuCliente').show();
    }
    else
        alert("ERRO: Verifique seu Login e Senha")

    
}

function sair() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('senha');
    alert("Obrigado pela visita. Volte Sempre!");
    location.reload();
}