let timeinfinite = setInterval(function() {
    setTimeout(function() {

        // creamos la ainmacion inicial de alejarse
        let upGal = document.createElement('a-animation');
        upGal.setAttribute('id', 'movUp');
        upGal.setAttribute('attribute', 'position');
        upGal.setAttribute('to', '0 0 -0.4');
        upGal.setAttribute('dur', '3000');
        upGal.setAttribute('easing', 'linear');
        document.getElementById("mul").appendChild(upGal);

        // creacion de campo 
        let campaleja = document.createElement('a-entity');
        campaleja.setAttribute('id', 'camDentro');
        campaleja.setAttribute('collada-model', '#camExt');
        campaleja.setAttribute('position', '0 0 0');
        campaleja.setAttribute('rotation', '0 0 45');
        campaleja.setAttribute('scale', '0.5 0.5 0.5');
        document.getElementById('marker').append(campaleja);

        let movCamp = document.createElement('a-animation');
        movCamp.setAttribute('id', 'movArriba');
        movCamp.setAttribute('attribute', 'position');
        movCamp.setAttribute('to', '0 0 -0.4');
        movCamp.setAttribute('dur', '3000');
        movCamp.setAttribute('easing', 'linear');
        document.getElementById("camDentro").appendChild(movCamp);



    }, 500);
    setTimeout(function() {
        let deletecamp = document.getElementById('camDentro');
        document.getElementById('marker').removeChild(deletecamp);

        let delMov = document.getElementById('movUp');
        document.getElementById('mul').removeChild(delMov);

        let upGal = document.createElement('a-animation');
        upGal.setAttribute('id', 'movUp');
        upGal.setAttribute('attribute', 'position');
        upGal.setAttribute('to', '0 0 -0.4');
        upGal.setAttribute('dur', '3000');
        upGal.setAttribute('easing', 'linear');
        document.getElementById("mul").appendChild(upGal);



    }, 4000);

    setTimeout(function() {

        let delMov = document.getElementById('movUp');
        document.getElementById('mul').removeChild(delMov);

        let downmov = document.createElement('a-entity');
        downmov.setAttribute('id', 'movdown');
        downmov.setAttribute('attribute', 'position');
        downmov.setAttribute('for', '0 0 0');
        downmov.setAttribute('to', '0 0 -0.4');
        downmov.setAttribute('dur', '3000');
        downmov.setAttribute('easing', 'linear');
        document.getElementById("mul").appendChild(downmov);
    }, 6000);
}, 20000);