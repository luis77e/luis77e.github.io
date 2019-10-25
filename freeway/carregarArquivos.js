//Variaveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];
let imgVaca2;
//Placar
let meuPlacar = 0;
let placarOponenete = 0;

//Variaveis da Tela

let alturaTela = 400;
let larguraTela = 600;

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  
  imgVaca2 = loadImage('imagens/downloads.png');
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  //Sons
  ponto = loadSound('sons/pontos.wav');
  atropelou = loadSound('sons/colidiu.mp3');
  trilha = loadSound('sons/trilha.mp3');
  
}
//Variaveis de movimento
let yVaca = 368;
let xVaca =  150 ;
let yVaca2 = 368;
let xVaca2 = 350 ;
//Vetores do carro 
let xCarro = [605, 605, 605, -55, -55, -55];
let yCarro = [45, 105, 155, 215, 265, 315];
let velocidadeCarro = [10, 5, 15, 10, 5, 15];
