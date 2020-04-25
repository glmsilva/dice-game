var nroRandom1 = Math.floor(Math.random() * 6) + 1;
var nroRandom2 = Math.floor(Math.random() * 6) + 1;


  var dado1 = document.querySelector('.dice .img1'); 
  var dado2 = document.querySelector('.dice .img2');
  
  dado1.setAttribute("src","images/dice" + nroRandom1 + ".png");
  dado2.setAttribute("src","images/dice" + nroRandom2 + ".png");
  
  if(nroRandom1 > nroRandom2) {
    document.querySelector('h1').innerHTML = "Jogador 1 Venceu! 🚩";
    
  }
  else if(nroRandom1 < nroRandom2) {
    document.querySelector('h1').innerHTML = "Jogador 2 Venceu! 🚩";
  }
  else {
    document.querySelector('h1').innerHTML = "Uau! Empatou! 🎲"
  }

