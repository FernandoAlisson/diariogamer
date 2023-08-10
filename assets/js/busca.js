var txtBusca = document.querySelector("#txt-busca");
var gameCards = document.querySelectorAll(".game-card");

txtBusca.addEventListener("input", () => {

  if(txtBusca.value.length > 0) {
    for(var i = 0; i < gameCards.length; i++) {
      var gameCard = gameCards[i];
      var gameName = gameCard.querySelector(".game-card__description__title").textContent;
  
      var expressaoReg = new RegExp(txtBusca.value, "i");
  
      if(!expressaoReg.test(gameName)) {
        gameCard.classList.add("invisivel");
      } else {
        gameCard.classList.remove("invisivel");
      }
    }
  } else {
    for(var i = 0; i < gameCards.length; i++) {
      var gameCard = gameCards[i];
      gameCard.classList.remove("invisivel");
    }
  }
})