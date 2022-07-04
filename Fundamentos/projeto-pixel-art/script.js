let corDoFundo = document.querySelectorAll(".color");
// corDoFundo[ ].style.backgroundColor = '';
corDoFundo[0].style.backgroundColor = "black";
corDoFundo[1].style.backgroundColor = "red";
corDoFundo[2].style.backgroundColor = "green";
corDoFundo[3].style.backgroundColor = "blue";
corDoFundo[4].style.backgroundColor = "aliceblue";
corDoFundo[5].style.backgroundColor = "yellow";
corDoFundo[6].style.backgroundColor = "#ff00ff";
corDoFundo[7].style.backgroundColor = "#00ffff";
corDoFundo[8].style.backgroundColor = "#ff0080";
corDoFundo[9].style.backgroundColor = "#ff8040";
corDoFundo[10].style.backgroundColor = "#804000";
corDoFundo[11].style.backgroundColor = "#008080";
corDoFundo[12].style.backgroundColor = "#800000";
corDoFundo[13].style.backgroundColor = "#800080";
corDoFundo[14].style.backgroundColor = "#8080ff";
corDoFundo[15].style.backgroundColor = "darkgrey";
//paleta de cores
//https://docs.microsoft.com/pt-br/dotnet/desktop/winforms/advanced/types-of-bitmaps?view=netframeworkdesktop-4.8

//função para criar o quadro de pixel 5x5
function quadroDesenhoPixel() {
  let quadroDPixels = document.getElementById("pixel-board");
  //definindo a variavelpelo elemento 'pixel-board'

  for (let index = 0; index < 25; index += 1) {
    //comando for para percorrer o index
    let divisDoPixel = document.createElement("div");
    //sempre que for adcionado +1 ele sera criado dentro de elemento 'div
    divisDoPixel.className = "pixel";
    //criar nova classe chamada 'pixel'
    quadroDPixels.appendChild(divisDoPixel);
    //xriando o 'filho pixelDivs'
  }
}

quadroDesenhoPixel(); //retornando o evento DesenhoPixel

function coloredPixels() {
  //colorir  os pixels

  let color7 = document.getElementById("color-palette");
  //definindo a variavel set de cores em Color-pallet

  function setarNovaCor(event) {
    //adicionando o evento 'setar nova cor'
    let selectedColor = document.getElementsByClassName("selected")[0];
    //colocando a variavel selected como uma classe 'selected' na posição 0
    selectedColor.classList.remove("selected");
    //'selectedColor' vai remover a classe "selected"
    let otherColor = event.target;
    //adicionando um evento de target (gatilho) a variavel criada other color
    otherColor.classList.add("selected");
    //quando o evento otherColor for 'ativado' ele adicionar a classe "selected" ao elemento selecionado
  }

  color7.addEventListener("click", setarNovaCor);
}
coloredPixels();

function pintarPixels() {
  //pintar o pixel
  let quadroPixels = document.getElementById("pixel-board");
  //https://www.w3schools.com/jsref/met_document_getelementbyid.asp
  //variavel quadroPixel que vai receber o elemento 'pixel-board'
  quadroPixels.addEventListener("mouseup", function (event) {
    //variavel recebe um evento de escuta com os parametros "mouseup" function (event)
    //https://www.w3schools.com/jsref/event_onmouseup.asp
    let selectedColor = document.querySelectorAll(".selected")
    //variavel selctedColor recebe a classe selected
    event.target.style.background = selectedColor[0].id;
    //https://www.w3schools.com/jsref/prop_html_id.asp
    //esse event.target vai definir o style do pixel para cor selecionada, pelo selectedColor
  });
}
pintarPixels();

function limparPixels(buttonName) {
  //botão de apagar
  let cleanButton = document.querySelector("p");
  //criando e adcionando a variavel cleanButton o 'p' atravez do query selector, no html
  let newButton = document.createElement("button");
  //criando a variavelNewButton e adcionando o elemento button
  newButton.id = "clear-board";
  //variavel newButton recebe o .id 'clear-board'
  newButton.innerHTML = buttonName;
  //variavel recebe a função limparPixels(buttonName)
  cleanButton.appendChild(newButton);
  //clearButton recebe o filho newButton

  newButton.addEventListener("click", function () {
    //adicionado evento de escuta 'click'
    let pixelsPintados = document.querySelectorAll(".pixel");
    //variavel pixelsPintados recebe a classe .pixel
    for (let index = 0; index < pixelsPintados.length; index += 1) {
        //comando for para percorrer a variavel pixelPintados
      pixelsPintados[index].style.background = "white";
      //para cada posição da variavel pixels pintados ele adiciona a cor branca
    }
  });
}
limparPixels("Limpar");
//retorna ao evento limparPixel com o nome escrito em tela pelo innerHTML para "limpar"