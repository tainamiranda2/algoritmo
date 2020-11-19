window.onload = function() {
    var canvas = document.getElementById('canvas');
    var contexto = canvas.getContext('2d');
    
    document.addEventListener("keydown"
    
    , pressionaTecla);
    
    const velocidade = 1;
    var velocidadeX = velocidadeY = 0;
    var cabecaX = 10;
    var cabecaY = 15;
    var tamanhoQuadro = 20;
    var quantQuadros = 20;
    var comidaX = comidaY = 15;
    var rastro = [ ];
    var cauda = 5;
    
    function jogo() {

        cabecaX += velocidadeX;
        cabecaY += velocidadeY;
        if(cabecaX < 0) {
        cabecaX = quantQuadros-1;
        }
        if(cabecaX > quantQuadros-1) {
        cabecaX=0;
        }
        if(cabecaY < 0) {
            cabecaY = quantQuadros-1;
            }
            if(cabecaY > quantQuadros-1) {
            cabecaY=0;
            }


    contexto.fillStyle = "#489";
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    
    contexto.fillStyle = "#f00";
        
    contexto.fillRect(
    comidaX*tamanhoQuadro, comidaY*tamanhoQuadro,
    tamanhoQuadro, tamanhoQuadro);
    contexto.fillStyle = "gray";
    for(var i = 0; i < rastro.length; i++) {
    contexto.fillRect(
    rastro[i].x*tamanhoQuadro,
    rastro[i].y*tamanhoQuadro,
    tamanhoQuadro-1, tamanhoQuadro-1);
    
    if(rastro[i].x == cabecaX && rastro[i].y == cabecaY) {
    velocidadeX = velocidadeY = 0;
    cauda=5;
    }
};
rastro.push({x : cabecaX, y : cabecaY});
while(rastro.length > cauda) {
rastro.shift();
}
if(comidaX == cabecaX && comidaY == cabecaY) {
cauda++;
comidaX = Math.floor(Math.random()*tamanhoQuadro);
comidaY = Math.floor(Math.random()*tamanhoQuadro);
}
    }
    
    function pressionaTecla(evento) {
        switch(evento.keyCode) {
            case 37: //move para esquerda
            velocidadeX =- velocidade;
            velocidadeY = 0;
            break;
            case 38: //move para cima
            velocidadeX = 0;
            velocidadeY =- velocidade;
            break;
            case 39: //move para direita
            velocidadeX = velocidade;
            velocidadeY = 0;
            break;
            case 40: //move para baixo
            velocidadeX = 0;
            velocidadeY = velocidade;
        break;
        }       
        };
    
    setInterval(jogo, 1000/10);
};