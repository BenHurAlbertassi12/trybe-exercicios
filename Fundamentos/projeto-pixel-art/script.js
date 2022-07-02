let corDoFundo = document.querySelectorAll(".color");
// corDoFundo[ ].style.backgroundColor = '';
corDoFundo[0].style.backgroundColor = 'black';
corDoFundo[1].style.backgroundColor = 'red';
corDoFundo[2].style.backgroundColor = 'green';
corDoFundo[3].style.backgroundColor = 'blue';
corDoFundo[4].style.backgroundColor = 'aliceblue';
corDoFundo[5].style.backgroundColor = 'yellow';
corDoFundo[6].style.backgroundColor = '#ff00ff';
corDoFundo[7].style.backgroundColor = '#00ffff';
corDoFundo[8].style.backgroundColor = '#ff0080';
corDoFundo[9].style.backgroundColor = '#ff8040';
corDoFundo[10].style.backgroundColor = '#804000';
corDoFundo[11].style.backgroundColor = '#008080';
corDoFundo[12].style.backgroundColor = '#800000';
corDoFundo[13].style.backgroundColor = '#800080';
corDoFundo[14].style.backgroundColor = '#8080ff';
corDoFundo[15].style.backgroundColor = 'darkgrey';


//função para criar o quadro de pixel 5x5
function quadroDesenhoPixel(){
    
    let quadroDPixels = document.getElementById('pixel-board');//definindo a variavelpelo elemento 'pixel-board'
        for (let index = 0; index < 25; index +=1){ //comando for para percorrer o index 
            let divisDoPixel = document.createElement('div'); //sempre que for adcionado +1 ele sera criado dentro de elemento 'div
            divisDoPixel.className = 'pixel'; //criar nova classe chamada 'pixel'     
            quadroDPixels.appendChild(divisDoPixel);//xriando o 'filho pixelDivs'
        }
};

quadroDesenhoPixel();

function coloredPixels(){//colorir  os pixels

    let color7 = document.getElementById('color-palette'); //definindo a variavel 7 de cores

        function setarNovaCor(event) {//adicionando o evento 'setar nova cor'
            let selectedColor = document.getElementsByClassName('selected')[0];
            selectedColor.classList.remove('selected');
            let otherColor = event.target;
            otherColor.classList.add('selected');
        };

    color7.addEventListener('click', setarNovaCor);

};
coloredPixels();


function pintarPixels(){

    let quadroPixels = document.getElementById('pixel-board');

    quadroPixels.addEventListener('mouseup', function (event) {
        let selectedColor = document.querySelectorAll('.selected')
        event.target.style.background = selectedColor[0].id
        // console.log(selectedColor)
    }); 
};
pintarPixels();

function apagarPixels(buttonName){

    let cleanButton = document.querySelector('p');
    let newButton = document.createElement('button');
    newButton.id = 'clear-board';
    newButton.innerHTML = buttonName;
    cleanButton.appendChild(newButton);

    newButton.addEventListener('click', function () {
        let pixelsPintados = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixelsPintados.length; index +=1){
            pixelsPintados[index].style.background = 'white';
        }    
        });
    };
apagarPixels('Limpar');