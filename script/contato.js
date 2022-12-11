var arr = [];


function enviar(){

    if (localStorage.meuArr){
        arr = JSON.parse(localStorage.getItem('meuArr'));
    };

    let dadosMensagem = {};
    dadosMensagem.formNome = document.getElementById("formNome").value;
    dadosMensagem.formEmail = document.getElementById("formEmail").value;
    dadosMensagem.formMensagem = document.getElementById("formMensagem").value;

    if (dadosMensagem.formNome == ""){
        alert('Digite seu nome.')
    } else if (dadosMensagem.formEmail == "") {
        alert('Digite seu e-mail.')
    } else if (dadosMensagem.formMensagem == "") {
        alert('Digite sua mensagem.')
    } else {
    alert('Mensagem enviada com sucesso.');
    arr.push(dadosMensagem);
    document.getElementById("formNome").value = "";
    document.getElementById("formEmail").value = "";
    document.getElementById("formMensagem").value = "";
    localStorage.meuArr = JSON.stringify(arr);
    }
};

function listarMensagens(){
    let historico = document.getElementById('dados');
    historico.innerHTML = '';

    if (localStorage.meuArr){             
       arr = JSON.parse(localStorage.getItem('meuArr'));
    };
    
    for(var i in arr){
       let p = document.createElement('p');
       p.innerHTML = "Nome: " + arr[i].formNome + '<br> E-mail: ' + arr[i].formEmail +  '<br> Mensagem: ' + arr[i].formMensagem;
       historico.append(p);
       p.classList.add('border', 'p-2', 'my-2');
    }
 }


function limparItens(){
    if(confirm('Gostaria de limpar todas as mensagens?')){
        arr = [];
        localStorage.meuArr = JSON.stringify(arr);  
    };
    return   
 };