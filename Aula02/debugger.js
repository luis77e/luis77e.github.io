//Espera carregar todo conteúdo HTML
window.onload = function(){
    alert("Alo HA");
    console.log("Se quiser me ver, tem que pressionar F12! Console...");
    //Concatenação de strings com o símbolo +
    console.log("a = "+ a + " b =" + b);
    console.log("a + b =" + parseInt(a+b) );
};

//Variável Global
var a = 10;
var b = 20;


let entradas = document.querySelectorAll("input");
let resposta = document.querySelector(".resposta");
let botão = document.querySelector("#bntsomar");



pegaNumero1 = function(){
    return entradas [0].value;
}
pegaNumero2 = function(){
    return entradas[0].value;
}

testarEntradasVazias = function(){
    //Se a entrada1 ou entrada2 for vazio, retorna Verdadeiro
    if(pegaNumero1() === '' || pegaNumero2()=== '' )
    return true;
    else
    return false;
}
somar = function(){
    if(testarEntradasVazias()){
        resposta.textContent = "Erro Preencha os dois campos numericos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false

    }else{
        atualizaResposta();
    }
}
atualizaResposta = function(){
 
    let num1 = pegaNumero1();
    let num2 = pegaNumero2();
    var soma = num1 + num2;
    resposta.textContent = num1 + '+' + num2 + '=' + soma;
}  

//Monitoramento do click no botão 
//Quando o botão for clicado, a funcão somar sera chamada
botão.addEventListener('click',somar); 





  














