

function setup() {
  createCanvas(larguraTela, alturaTela);
  
}

function draw(){
  if(frameCount > 400){//+/-8s
    if(PlacarVaca < 5 && PlacarVaca2 < 5){
  jogar();
    }else{
      verificaVencedor();
    }
  }else{
    telaInicial();
  }
}

  function verificaVencedor(){
    if(PlacarVaca >=5)
      VacaVenceu();
    else
      Vaca2Venceu();
  }




function VacaVenceu(){
  background("blue")
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(40);
  text("Vaca Venceu", 300, 90);
  image(imgVaca, 200, 100, 200, 200);
  textSize(38);
  
}

function Vaca2Venceu(){
  background("pink")
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(40);
  text("Touro Venceu", 300, 90);
  image(imgVaca2, 200, 100, 200, 200);
  textSize(38);
 
}
function telaInicial(){
  background("pink")
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(40);
  text("FreeWay", 300, 190);
  textSize(38);
  text("Desenvolvido por LUIS.M",300, 240);
}

function jogar(){
  background(imgEstrada); 
  mostraVaca();
  movimentaVaca();
  movimentaVaca2();
  mostraCarros();
  movimentaCarros();
  mostraVaca2();
  atropelamento();
  mostraPlacar();
}





