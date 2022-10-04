function escolhaPalavra(lista){
    var aleatorio = Math.round(Math.random(lista.length))
    palavra = lista[aleatorio]

    var letras = []

    for (i=0;i<palavra.length;i++){
        letras.push(palavra[i])
    }

    return letras
}
function validaTeclado(){
    var tecla = (event.key).toUpperCase()
    
    if (letrasInseridas.includes(tecla) == false){
        for (i=0;i < palavraEscolhida.length;i++){
            
            if(tecla == palavraEscolhida[i]){
                
                pincelTab.strokeText(tecla,((20 + (30*constQtdTraco) ) + (palavraEscolhida.indexOf(tecla,i) * 60 ) ),90)
                
                

            }else if(palavraEscolhida.includes(tecla) ==false && letrasErradas.includes(tecla)==false){
                    letrasErradas.push(tecla)
                    
            }

            if(letrasInseridas.includes(tecla)==false){
                letrasInseridas.push(tecla)
                

            }

        }
    }
    pInserido.innerHTML= letrasInseridas + "<br>" + + "<span style='color:red'>" + letrasErradas + "</span>"
    pInserido.innerHTML = letrasErradas

    // colocar diferença de erro + contagem de erros limite
}

function desenhaTraçoTab(){
    var qtd = palavraEscolhida.length
    var pinXtab = 135;
    var pinYtab = 100;
    constQtdTraco = 4

    //condição para deixar traços centralizados
    if(qtd == 5){
        pinXtab = 105;
        pinYtab = 100;
        constQtdTraco = 3

    }
    else if(qtd == 6){
        pinXtab = 75;
        pinYtab = 100;
        constQtdTraco = 2

    }
    else if(qtd == 7){
        pinXtab = 45;
        pinYtab = 100;
        constQtdTraco = 1
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
var listaPalavra =["CUIDADO","ABOBORA","CAIR","FONTE","RETARDAR"];
var cont = 0
var letrasInseridas = []
var letrasErradas = []
var constQtdTraco = 0


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
pincelTab.font = "60px Verdana";
var pInserido = document.getElementById("inserido")
var spanInsert = document.getElementById("spanInsert")

//jogo
var palavraEscolhida = escolhaPalavra(listaPalavra); //palavra usada na função escrever Palavra
desenhaTraçoTab();

document.onkeydown = validaTeclado;
console.log(palavraEscolhida);

//FALTA IDENTIFICAÇÃO DAS LETRAS INSERIDAS E ERRADAS
