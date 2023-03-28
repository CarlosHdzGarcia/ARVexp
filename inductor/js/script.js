let fil = document.createElement('a-entity');
fil.setAttribute('collada-model', '#focoAp');
fil.setAttribute('id', 'fi');
fil.setAttribute('position', '0.029 1 0.021');
fil.setAttribute('rotation', '-120 -90 90');
fil.setAttribute('scale', '0.5 0.5 0.5');

/* document.getElementById("fi").style.visibility = "hidden"; */
document.getElementById('marcador').append(fil);


let motor = document.createElement('a-entity');
motor.setAttribute('collada-model', '#motor');
motor.setAttribute('position', '0 1 0');
motor.setAttribute('rotation', '-120 -90 90');
motor.setAttribute('scale', '0.5 0.5 0.5');

document.getElementById('marcador').append(motor);


setTimeout(function() {



    let audio = document.createElement('audio');
    audio.setAttribute('class', 'audio');
    audio.setAttribute('id','viento');
    audio.textContent = "<source src='assets/audio/WIND1.mp3' autoplay type='audio/mp3'>"
 var sonido = document.createElement("iframe");
    sonido.setAttribute("src", "assets/audio/WIND1.mp3");
    sonido.setAttribute("autoplay");
    document.getElementById("body").append(sonido);
    
     /*  var audio1 = document.getElementById('audio');    
    audio1.play();*/
    
    

    


    //creacion de animacion para elices 
    let div = document.createElement('a-animation');
    div.setAttribute('attribute', 'rotation');
    div.setAttribute('to', '-120 -90  360');
    div.setAttribute('dur', '3000');
    div.setAttribute('easing', 'linear');
    div.setAttribute('repeat', 'indefinite');

    document.getElementById('div').append(div);

    var foco = document.getElementById("fi");
    document.getElementById('marcador').removeChild(foco);

    let fil = document.createElement('a-entity');
    fil.setAttribute('collada-model', '#focoEnc');
    fil.setAttribute('id', 'fi');
    fil.setAttribute('position', '0.029 1 0.021');
    fil.setAttribute('rotation', '-120 -90 90');
    fil.setAttribute('scale', '0.5 0.5 0.5');
    document.getElementById('marcador').append(fil);







}, 7000);
//metodo para aparicion de filamento
