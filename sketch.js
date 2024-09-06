
let posicaoXbolinha
let posicaoYbolinha
let diametro
let cor

function setup() {
  createCanvas(400, 400);
 posicaoXbolinha=[100.200]
  posicaoYbolinha=[150,300]
  diametro=[20,20]
  cor=color(random(0,255), random(0,255),random(0,255))
  background(140,255,255)
}

  function draw(){
  
  
  circle (posicaoXbolinha[1],posicaoYbolinha[1],diametro[1])
  
  fill(cor)
  
  circle (posicaoXbolinha[0],posicaoYbolinha[0],diametro[0])
  fill(cor)
    
   // posicaoXbolinha=posicaoXbolinha+1
   // posicaoYbolinha=posicaoYbolinha+1
  diametro[1]=diametro[1]+1
    diametro[0]=diametro[0]+1
  if(mouseIsPressed){
    cor=color(random(0, 255), random(0, 255), random(0, 255))
    diametro[0]=0
    diametro[1]=0
}
  }