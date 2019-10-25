function mostraVaca(){

  image(imgVaca, xVaca, yVaca, 28, 28);
  
  
}
function mostraVaca2(){
image (imgVaca2, xVaca2, yVaca2, 28, 28);
}
function movimentaVaca(){
  
  if(keyIsDown(87)){
  
    if(yVaca > 5)//Teto
      yVaca -= 5;
    
  }
  if(keyIsDown(83)){
    if(yVaca < 365)
      yVaca += 5;
    
  }

}
  function movimentaVaca2(){
     if(keyIsDown(UP_ARROW)){
    if(yVaca2 > 5)//Teto
      yVaca2 -= 5;
    
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yVaca2 < 365)
      yVaca2 += 5;
    
  }

  }
