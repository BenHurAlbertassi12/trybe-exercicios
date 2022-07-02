function quadroDesenhoPixel(){
    
    let quadroDPixels = document.getElementById('pixel-board');
        for (let index = 0; index < 25; index +=1){
            let pixelDivs = document.createElement('div');
            pixelDivs.className = 'pixel';     
            quadroDPixels.appendChild(pixelDivs);
        }
};
quadroDesenhoPixel();