let PlacarVaca = 0;
let PlacarVaca2 = 0;


function mostraPlacar(){
  textSize(30);
  
  fill(255, 196, 0);
  text(PlacarVaca,  180, 27);
  
  fill("red");
  text(PlacarVaca2, 420, 27);
  
  if(yVaca < 15){
    PlacarVaca += 1;
  yVaca = 368;
  }
   if(yVaca2 < 15){
    PlacarVaca2 += 1;
    yVaca2 = 368;
   }
  
  
  
}
