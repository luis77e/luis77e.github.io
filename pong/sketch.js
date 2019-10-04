let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false;

//Dimensões da Tela
let alturaTela = 600;
let larguraTela = 1280;
let metadeTela = larguraTela/2;

//Variaveis em JavaScript
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadex = 15;
let velocidadey = 15;
let raio = diametro / 2;
let aumentoDeVelocidade = 2;


//Variáveis das raquetes
velocidadeRaquete = 20;

let alturaRaquete = 100;
let larguraRaquete = 10;

let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete/2;

let xRaqueteOponente = 0;
let yRaqueteOponente = alturaTela/2 - alturaRaquete/2;

//Placar
let meuPlacar = 0;
let placarOponente =0;

function preload(){
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura = "+largura);
  console.log("Altura = "+altura);
}

//Um looping sempre, desenha o que tem dentro
function draw() {
  background(13, 128, 0);
  stroke(255);
  strokeWeight(2);
  line(metadeTela,0,metadeTela,alturaTela);
  if(frameCount <400) //10 Segundos
    telaInicial();
  else
  jogar();
  
}// Fim da Função Draw

function telaInicial(){
  fill(50,205,50);
  rect(larguraTela/4,0,metadeTela,alturaTela);
  textSize(24);
  textAlign(CENTER);
  fill("white");
  text("Ping Pong do Programador",metadeTela,  alturaTela/2);
}

function jogar(){
  if(meuPlacar < 5 && placarOponente < 5){
    mostraBolinha();
    movimentaBolinha();
    detectaColisao();
    mostraRaqueteOponente();
    mostraMinhaRaquete();
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    detectaColisaoBolinhaRaquetes();
    mostraPlacar();
  } else{
    //Verifica e mostra o campeão
    if(meuPlacar == 5 )
      setasVenceu();
    else
      letrasVenceu();
  }
}

function letrasVenceu(){
  fill("Red");
  rect(0,0,metadeTela,alturaTela);
  textSize(40);
  fill("white");
  textAlign(CENTER);
  text("Letras Venceu!", metadeTela/2, alturaTela/2);

}

function setasVenceu(){
  fill(255, 196, 0);
  rect(metadeTela,0,larguraTela, alturaTela);
  textSize(40);
  fill("white");
  textAlign(CENTER); 
  text("Setas Venceu!", metadeTela+metadeTela/2 ,alturaTela/2);

}

function mostraPlacar(){
  textSize(30);
  
  fill(255, 196, 0);
  text(meuPlacar, 3/4 * larguraTela, 30);
  
  fill("red");
  text(placarOponente, larguraTela/4, 30);
  
}

function detectaColisaoBolinhaRaquetes(){
  //Colisão com a MinhaRaquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  
  if(tocouMinhaRaquete){
    //Impede gol contra
    if(xBolinha > metadeTela && velocidadex > 0){
     velocidadex *= -1;
     somRaquetada.play();
    }
  }
    
  
  //Colisão Raquete Oponente
  tocouRaqueteOponente = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  
   if(tocouRaqueteOponente){
     //Impede gol contra
    if(xBolinha < metadeTela && velocidadex < 0){
     velocidadex *= -1;
      somRaquetada.play();
      
    }
  }
  
}



function movimentaMinhaRaquete(){
 //console.log("y: "+yMinhaRaquete);
 //console.log("x: "+xMinhaRaquete); 
  
if (keyIsDown(UP_ARROW)) {//Para Cima
    if(yMinhaRaquete > 0)//Teto
    yMinhaRaquete -= velocidadeRaquete;
 }

if (keyIsDown(DOWN_ARROW)) {//Para Baixo
    if(yMinhaRaquete < (alturaTela - alturaRaquete ))//Chão
    yMinhaRaquete += velocidadeRaquete;
 }
  
if (keyIsDown(LEFT_ARROW)) {//Para Esquerda
    if(xMinhaRaquete > metadeTela)//Parede Esquerda
    xMinhaRaquete -= velocidadeRaquete;
 }
  
if (keyIsDown(RIGHT_ARROW)) {//Para Direita
  if(xMinhaRaquete < (larguraTela - larguraRaquete))//Parede Direita
    xMinhaRaquete += velocidadeRaquete;
 }
}

function movimentaRaqueteOponente(){
if (keyIsDown(87)) {//Para Cima
  if(yRaqueteOponente > 0)//Teto
    yRaqueteOponente -= velocidadeRaquete;
 }

if (keyIsDown(83)) {//Para Baixo
  if(yRaqueteOponente < (alturaTela - alturaRaquete ))//Chão
    yRaqueteOponente += velocidadeRaquete;
 }
  
if (keyIsDown(65)) {//Para Esquerda
  if(xRaqueteOponente > 0)//Parede Esquerda
    xRaqueteOponente -= velocidadeRaquete;
 }
  
if (keyIsDown(68)) {//Para Direita
  if(xRaqueteOponente < (metadeTela - larguraRaquete - 2))//Parede Direita
    xRaqueteOponente += velocidadeRaquete;
 }
}


function mostraRaqueteOponente(){
  fill("red");
  noStroke();
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
  
}

function mostraMinhaRaquete(){
  fill(255, 196, 0);
   noStroke();
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  
}


function mostraBolinha(){
  fill("black");
  noStroke();
  circle(xBolinha, yBolinha, diametro);
}//Fim mostra Bolinha


function movimentaBolinha(){
  xBolinha += velocidadex;
  yBolinha += velocidadey;
}//Fim movimenta Bolinha

function detectaColisao(){
  //Colisão com as Bordas Laterais
  
  //Lado direito - meu lado
  if(xBolinha + raio >= largura){
    velocidadex *= -1;
    placarOponente += 1;
    somPonto.play();
    velocidadex -= 2;
    velocidadey -= 2;
  }
  
  //Lado esquerdo - lado do oponente
  if(xBolinha - raio <= 0){
    velocidadex *= -1;
    meuPlacar += 1;
    somPonto.play();
     velocidadex += 2;
    velocidadey += 2;
  }
  
  //Colisão com as bordas superior e inferior
  if(yBolinha + raio >= altura || yBolinha - raio <= 0){
    velocidadey *= -1;
  }
}//Fim detectaColisao
