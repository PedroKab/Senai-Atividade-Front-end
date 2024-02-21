//efeito do botão voltar ao Topo
function topo() {
    window.scroll(
        {
            top:0,
            left: 0,
            behavior: 'smooth'
        }
    )
}

//Validação de Login
function login(){
     var logado = 0;
     var usuario = document.getElementById("usuario").value;
     var senha = document.getElementById("senha").value;

     if(usuario == 'admin' && senha == '123456' ){
        window.location = "index.hrml";
        logado = 1;
     }
    if(logado == 0){
        alert("Acesso negado. Dados incorretos");
    }

}
//Ativar alert no botão cadastrar
