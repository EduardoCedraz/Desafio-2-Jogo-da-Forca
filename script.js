function escolhaPalavra(lista){
    var aleatorio = Math.round(Math.random() * (lista.length - 1))
    palavra = lista[aleatorio]

    var letras = []

    for (i=0;i<palavra.length;i++){
        letras.push(palavra[i])
    }

    return letras
}
function validaTeclado(){
    var tecla = (event.key).toUpperCase()
    
    if (letrasValidas.includes(tecla) && letrasInseridas.includes(tecla) == false && situacao ==''){
        for (i=0;i < palavraEscolhida.length;i++){
            
            if(tecla == palavraEscolhida[i]){
                pincelTab.strokeText(tecla,((20 + (30*constQtdTraco) ) + (palavraEscolhida.indexOf(tecla,i) * 60 ) ),90)
                contAcerto+=1
                    if(contAcerto ==palavraEscolhida.length){
                        pincelForca.strokeStyle = "green";
                        situacao = "Voce Ganhou"
                    }
                

            }else if(palavraEscolhida.includes(tecla) ==false && letrasErradas.includes(tecla)==false){
                    letrasErradas.push(tecla)
                    contErro+=1
                    desenhaForca()
                    
            }

            else if(letrasInseridas.includes(tecla)==false){
                letrasInseridas.push(tecla)
                

            }
            else if (contErro == 6 || situacao == 'Voce Ganhou' ){
                break
            }
        }
        console.log(contErro,contAcerto)
        pincelForca.font = "40px Arial";
        pincelForca.strokeText(situacao, 150,50)
    }

    pInserido.innerHTML = letrasErradas

    // colocar diferença de erro + contagem de erros limite
}
function desenhaForca(){


if(contErro == 1){
    //cabeça
    pincelForca.beginPath();
    pincelForca.arc(280, 150, 30, 0, Math.PI * 2, true);
    pincelForca.moveTo(110, 75);
    pincelForca.stroke()
}
else if(contErro == 2){
//corpo
    pincelForca.beginPath();
    pincelForca.moveTo(280, 180);
    pincelForca.lineTo(280,300)
    pincelForca.stroke()
}    
else if(contErro == 3){
//br.e
    pincelForca.beginPath();
    pincelForca.moveTo(280, 200);
    pincelForca.lineTo(240,250)
    pincelForca.stroke()
}
else if(contErro == 4){
//br.d
    pincelForca.beginPath();
    pincelForca.moveTo(280, 200);
    pincelForca.lineTo(320,250)
    pincelForca.stroke()
}
else if(contErro == 5){
//p.e
    pincelForca.beginPath();
    pincelForca.moveTo(280, 300);
    pincelForca.lineTo(320,350)
    pincelForca.stroke()
}
else if(contErro == 6){
//p.d
    pincelForca.beginPath();
    pincelForca.moveTo(280, 300);
    pincelForca.lineTo(240,350)
    pincelForca.stroke()
    pincelForca.strokeStyle = "red";
    situacao = 'Voce Perdeu'
}

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
        constQtdTraco = 0
        
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
var contErro = 0
var contAcerto = 0
var situacao =''
var letrasInseridas = []
var letrasValidas='ABCDEFGHIJKLMNOPQRSTUVWYZ'
var letrasErradas = []
var constQtdTraco = 0



// Forca
var canvaForca = document.getElementById("forca");
var pincelForca = canvaForca.getContext("2d");
pincelForca.fillStyle = "#F0F0C0";
pincelForca.fillRect(0, 0, 505, 450);
    //base Forca
    pincelForca.beginPath();
    pincelForca.fillStyle = "#FFCC00";
    pincelForca.lineWidth = 3;
    pincelForca.moveTo(100,400)
    pincelForca.lineTo(300,400)

    pincelForca.moveTo(130,400)
    pincelForca.lineTo(130,80)

    pincelForca.lineTo(280,80)
    pincelForca.lineTo(280,120)

    pincelForca.stroke()


    


//Tabuleiro
var canvaTab= document.getElementById("tabuleiro");
var pincelTab = canvaTab.getContext("2d");
pincelTab.fillStyle = "#F0C0C0";
pincelTab.fillRect(0, 0, 505, 200);
pincelTab.font = "60px Arial";
var pInserido = document.getElementById("inserido")
var spanInsert = document.getElementById("spanInsert")

//jogo
var palavraEscolhida = escolhaPalavra(listaPalavra); //palavra usada na função escrever Palavra
desenhaTraçoTab();

document.onkeydown = validaTeclado;
console.log(palavraEscolhida);

//FALTA IDENTIFICAÇÃO DAS LETRAS INSERIDAS E ERRADAS
