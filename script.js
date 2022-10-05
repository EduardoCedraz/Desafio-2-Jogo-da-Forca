//botoes
var botaoIniciar = document.getElementById("botIniciar")
var botaoAdcPalavras = document.getElementById("botAdicionar")
var botaoVoltar = document.getElementById("botVoltar")
var botaoReiniciar = document.getElementById("botReiniciar")
var salvarPalavra = document.getElementById("botSalvarIniciar")
var botaoCancelar = document.getElementById("botCancelar")
//telas
var telaInicial = document.getElementById("tela-inicial")
var telaAdcPalavra = document.getElementById("tela-adicionarPalavra")
var telaForca = document.getElementById("tela-forca")

var listaPalavra =["CUIDADO","ABOBORA","CAIR","FONTE","RETARDAR"];
var letrasValidas='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var vitorias = 0;
var qtdPalavraBloco = document.getElementById("qtdPalavra")
qtdPalavraBloco.innerHTML = `${vitorias} / ${listaPalavra.length}`


//input
var inputPalavra = document.getElementById("palavraInput")
var palavraAdd = inputPalavra.value

telaInicial.style.display = ''
telaAdcPalavra.style.display = 'none'
telaForca.style.display = 'none'
botaoReiniciar.style.display = 'none'
botaoVoltar.style.display = 'none'

function addPalavra(){
    var inputPalavra = document.getElementById("palavraInput").value.toUpperCase()
    
    let contValidar = 0
    let inputDesmembrado = []

    for(i=0;i<inputPalavra.length;i++){

        inputDesmembrado.push(inputPalavra[i])

        if(letrasValidas.includes(inputPalavra[i]) == true){
            contValidar+=1
        }
    }

    if(listaPalavra.includes(inputPalavra) == false && inputPalavra !='' && contValidar == inputPalavra.length){

        listaPalavra.push(inputPalavra)
        document.getElementById("palavraInput").value = ''
        console.log(listaPalavra)
        console.log(inputPalavra)

    }
    qtdPalavraBloco.innerHTML = `${vitorias} / ${listaPalavra.length}`
    
}


function mudaForca(){
    telaInicial.style.display = 'none'
    telaForca.style.display = ''
    botaoVoltar.style.display = ''
    botaoReiniciar.style.display = ''

}
function mudaTelaAdc(){
    telaInicial.style.display = 'none'
    telaAdcPalavra.style.display = ''
    botaoVoltar.style.display = 'none'
}
function mudarTelaInicio(){
    telaInicial.style.display = ''
    telaAdcPalavra.style.display = 'none'
    telaForca.style.display = 'none'
    botaoVoltar.style.display = 'none'
    botaoReiniciar.style.display = 'none'

}

function voltar(){
    if(telaAdcPalavra.style.display == ''){
        mudarTelaInicio()
    }else if (telaForca.style.display == ''){
        mudarTelaInicio()
    }
}



botaoIniciar.addEventListener('click', function() {
    mudaForca()
})
botaoAdcPalavras.addEventListener('click', function() {
    mudaTelaAdc()
    
})

function escolhaPalavra(lista){
    var aleatorio = Math.round(Math.random() * (lista.length - 1))
    palavra = lista[aleatorio]

    var letras = []

    for (i=0;i<palavra.length;i++){
        letras.push(palavra[i])
    }

    return letras
}
function mudarCorTeclas(cor){

    for(i=0;i<teclasTeclado.length;i++){
        teclasTeclado[i].style.backgroundColor=cor
    }
}
function validaTeclado(){
    var tecla = (event.key).toUpperCase()
    var tecSele = (event.key).toLowerCase()
    
    if (letrasValidas.includes(tecla) && letrasInseridas.includes(tecla) == false && situacao =='' && telaForca.style.display == ''){
        for (i=0;i < palavraEscolhida.length;i++){
            
            if(tecla == palavraEscolhida[i]){

                

                pincelTab.strokeText(tecla,((20 + (30*constQtdTraco) ) + (palavraEscolhida.indexOf(tecla,i) * 60 ) ),90)
                contAcerto+=1
        
                   
                for (c=0;c < teclasTeclado.length;c++){
                    if(teclasTeclado[c].value == tecSele){
                        teclasTeclado[c].style.backgroundColor = 'green'
                        }
                }

                    if(contAcerto == palavraEscolhida.length){
                        pincelForca.strokeStyle = "green";
                        situacao = "Voce Ganhou"
                        mudarCorTeclas('green')
                        
                    }
                
                    

            }else if(palavraEscolhida.includes(tecla) ==false && letrasErradas.includes(tecla)==false){
                    letrasErradas.push(tecla)
                    contErro+=1
                    desenhaForca()

                    for (z=0;z < teclasTeclado.length;z++){
                        if(teclasTeclado[z].value == tecSele){
                            teclasTeclado[z].style.backgroundColor = 'rgb(195, 11, 11)'
                        }
                    }
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
function forcaInicio(){
    pincelForca.strokeStyle = "#194881"

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

}
function desenhaForca(){
 pincelForca.strokeStyle = "black"

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
    mudarCorTeclas('rgb(195, 11, 11)')
}

}
function desenhaTraçoTab(){
    var qtd = palavraEscolhida.length
    var pinXtab = 135;
    var pinYtab = 100;
    constQtdTraco = 4
    pincelTab.strokeStyle ="black"
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
function mostraTeclado(){
    if ( teclado.style.display == 'none'){
        teclado.style.display = 'flex'
    }else{
        teclado.style.display = 'none'
    }

}
function verificaAcerto(){
    if(contAcerto > palavraEscolhida.length - 1){
        mudarCorTeclas('green')
    }
}
function resetar(){
  
    contErro = 0
    contAcerto = 0
    situacao =''
    pInserido.innerHTML =''
    letrasInseridas = []
    letrasErradas = []
    pincelForca.clearRect(0, 0, canvaForca.width, canvaForca.height);
    pincelTab.clearRect(0, 0, canvaTab.width, canvaTab.height);
    pincelForca.strokeStyle = '#194881'
    
    forcaInicio()
    palavraEscolhida = escolhaPalavra(listaPalavra)
    desenhaTraçoTab();

    mudarCorTeclas('#194881')


}
//Config 

var contErro = 0
var contAcerto = 0
var situacao =''
var letrasInseridas = []
var letrasErradas = []
var constQtdTraco = 0


// Forca
var canvaForca = document.getElementById("forca");
var pincelForca = canvaForca.getContext("2d");

forcaInicio()

//Tabuleiro
var canvaTab= document.getElementById("tabuleiro");
var pincelTab = canvaTab.getContext("2d");


pincelTab.font = "60px Arial";

var pInserido = document.getElementById("inserido")
var spanInsert = document.getElementById("spanInsert")

//jogo
var palavraEscolhida = escolhaPalavra(listaPalavra); //palavra usada na função escrever Palavra
desenhaTraçoTab();

document.onkeydown = validaTeclado;
document.onclick = verificaAcerto;

console.log(palavraEscolhida);

//Teclado Improvisado ( Perguntar No forum como puxar o clique das teclas do teclado virtual e usar como variavel na função validaTeclado() )
var teclado = document.getElementById("teclado")

//Config Teclado Virtual
var teclasTeclado = document.querySelectorAll("#teclado button")

if(window.matchMedia("(min-width:768px)").matches){
    teclado.style.display = 'none'
}else if(window.matchMedia("(max-width:767px)").matches){
    teclado.style.display = 'flex'
}

//função teclado virtual
teclado.addEventListener("click", function(event) {
    //mesma função valida teclado
    var teclaVirtu = event.target.value
    var tecla = teclaVirtu.toUpperCase()
    console.log(teclaVirtu)
     // este é o elemento clicado

     if (letrasValidas.includes(tecla) && letrasInseridas.includes(tecla) == false && situacao =='' && telaForca.style.display == ''){
        for (i=0;i < palavraEscolhida.length;i++){
            
            if(tecla == palavraEscolhida[i]){
                pincelTab.strokeText(tecla,((20 + (30*constQtdTraco) ) + (palavraEscolhida.indexOf(tecla,i) * 60 ) ),90)
                contAcerto+=1
                event.target.style.backgroundColor  = 'green'

                    if(contAcerto ==palavraEscolhida.length){
                        pincelForca.strokeStyle = "green";
                        situacao = "Voce Ganhou"
                    }
                

            }else if(palavraEscolhida.includes(tecla) ==false && letrasErradas.includes(tecla)==false){
                    letrasErradas.push(tecla)
                    contErro+=1
                    desenhaForca()
                    event.target.style.backgroundColor  = 'rgb(195, 11, 11)'
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
    
})
