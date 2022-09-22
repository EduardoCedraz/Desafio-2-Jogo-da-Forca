function escolhaPalavra(lista){
    var aleatorio = Math.round(Math.random(lista.length))
    var palavra = lista[aleatorio]

    var letras = []

    for (i=0;i<palavra.length;i++){
        letras.push(palavra[i])
    }

    return letras
}
function escreverPalavra(){
    pincelTab.font = "60px Verdana";
    
    pincelTab.strokeText(palavraEscolhida[0], 50,90)
    pincelTab.strokeText(palavraEscolhida[1], 110,90)
    pincelTab.strokeText(palavraEscolhida[2], 170,90)
    pincelTab.strokeText(palavraEscolhida[3], 230,90)
    pincelTab.strokeText(palavraEscolhida[4], 290,90)
    pincelTab.strokeText(palavraEscolhida[5], 350,90)
    pincelTab.strokeText(palavraEscolhida[6], 410,90)


    

}
function desenhaTraçoTab(){
    var qtd = palavraEscolhida.length
    var pinXtab = 135;
    var pinYtab = 100;
    //condição para deixar traços centralizados
    if(qtd == 5){
        pinXtab = 105;
        pinYtab = 100;
    }
    else if(qtd == 6){
        pinXtab = 75;
        pinYtab = 100;
    }
    else if(qtd == 7){
        pinXtab = 45;
        pinYtab = 100;
    }
    else if(qtd == 8){
        pinXtab = 15;
        pinYtab = 100;
    }
    //gerar traços a depender da quantidade de letra
    for(i=0; i < qtd;i++){
        pincelTab.beginPath();
        pincelTab.lineWidth = 3;
        pincelTab.lineCap="round";
        pincelTab.moveTo(pinXtab,pinYtab)
        pincelTab.lineTo(pinXtab+50,100)
        pincelTab.stroke()
        pinXtab+=60
    }
}
//Config
var listaPalavra =["ABACATE", "CURIOSO"];

// Forca
var canvaForca = document.getElementById("forca");
var pincelForca = canvaForca.getContext("2d");
pincelForca.fillStyle = "#F0F0C0";
pincelForca.fillRect(0, 0, 505, 450);

//Tabuleiro
var canvaTab= document.getElementById("tabuleiro");
var pincelTab = canvaTab.getContext("2d");
pincelTab.fillStyle = "#F0C0C0";
pincelTab.fillRect(0, 0, 505, 200);

//jogo
var palavraEscolhida = escolhaPalavra(listaPalavra);
escreverPalavra();
desenhaTraçoTab(5);


