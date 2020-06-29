/*
function carregar(){

    var texto= window.document.getElementById("texto")
    var ima= window.document.getElementById('ima')
    var a = new Date();
    var hora = a.getHours()
    //hora=20
    

    if (hora<=11){
    
        texto.innerHTML = ('Bom dia, são ' + hora + ' horas')
        ima.src='codigo/lampada-quebrada.jpg'
        window.document.body.style.background = 'rgb(82, 140, 248)'

    } else if(hora <=17){
        texto.innerHTML = ('Boa tarde, Agora são ' + hora + ' horas')
        ima.src='codigo/lampada-apagada.jpg'
        window.document.body.style.background = 'rgb(82, 140, 248)'
        
    } else{

        texto.innerHTML = ('Boa noite, Agora são ' + hora + ' horas')
        ima.src='codigo/lampada-acesa.jpg';
        window.document.body.style.background = 'rgb(82, 140, 248)'
    }


}
*/

function acende(){

    var im= document.getElementById("ima")
    im.src='imagens/lampada-acesa.jpg'
    
    
}

function apaga(){

    var im= document.getElementById("ima")
    im.src='imagens/lampada-quebrada.jpg'
    
    
}

function saiu(){

    var im= document.getElementById("ima")
    im.src='imagens/lampada-apagada.jpg'
    
    
}