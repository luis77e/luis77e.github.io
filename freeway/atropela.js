let atropelaVaca = false;
let atropelaVaca2 = false;

function atropelamento(){
  for(let i=0; i <imgCarro.length; i++){
      atropelaVaca = collideRectRect(xVaca, yVaca,28, 28, xCarro[i],yCarro[i], 50, 30);
    if(atropelaVaca){
      //vaca Atropelada
      yVaca = 368;
      if(PlacarVaca > 0)
        PlacarVaca -= 1;
    }
    atropelaVaca2 = collideRectRect(xVaca2, yVaca2,28, 28, xCarro[i],yCarro[i], 50, 30);
    if(atropelaVaca2){
      //Vaca2 Atropelada
      yVaca2 = 368;
      if(PlacarVaca2 > 0 )
        PlacarVaca2 -= 1;
    }
  }//for
}//Funcão