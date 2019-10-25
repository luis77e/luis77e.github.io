function movimentaCarros(){
  for(let i=0; i < imgCarro.length; i++){
    if(i < 3){
       xCarro[i] -= velocidadeCarro[i]
      //Carro chegou ao fim do percurso
      if(xCarro[i] < -55){
    xCarro[i] = 605;
    velocidadeCarro[i] = ceil(random(1,1));
  }
       
       
  }else{
    
     xCarro[i] += velocidadeCarro[i];
    //Carros para a direita
  if(xCarro[i] > 605){
    xCarro[i] = -55;
    velocidadeCarro[i] = ceil(random(1,1));
      }
    }
  }
}
function mostraCarros(){
    for(let i=0;i<imgCarro.length; i++)
  image(imgCarro[i], xCarro[i], yCarro[i], 50, 30);
}
  
