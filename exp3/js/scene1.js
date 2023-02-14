// metodos de animacion para mantener la animacion continua
// este setintelval es el ciclo de repeticioon para general del codigo





let timeinfinite = setInterval(function() {
    // settimeout es para el tiemo de espera para ejecutar el primer cabio de estado en la visualizacion
    setTimeout(function cierre() {
        //animacion de apagador
        let sw = document.createElement('a-animation');
        sw.setAttribute('id', 'cierreSw');
        sw.setAttribute('attribute', 'rotation');
        sw.setAttribute('to', '0 0 0');
        sw.setAttribute('dur', '1000');
        sw.setAttribute('easing', 'linear');
        document.getElementById('sw').append(sw);





    }, 500);

    setTimeout(function cierre() {
        //animacion de flecha medidora
        let conec = document.createElement('a-animation');
        conec.setAttribute('id', 'ciSw');
        conec.setAttribute('attribute', 'rotation');
        conec.setAttribute('to', '0 0 0');
        conec.setAttribute('dur', '3000');
        conec.setAttribute('easing', 'linear');
        document.getElementById('aguja').append(conec);

        //aparece el campo electrico
        let campo = document.createElement('a-entity');
        campo.setAttribute('collada-model', '#campo');
        campo.setAttribute('position', '0 0.1 0');
        campo.setAttribute('id', 'izq');
        campo.setAttribute('rotation', '0 0 45');
        campo.setAttribute('scale', '0.5 0.5 0.5');
        document.getElementById('marker').append(campo);

        let campo2 = document.createElement('a-entity');
        campo2.setAttribute('collada-model', '#campo');
        campo2.setAttribute('position', '0.32 0.1 0');
        campo2.setAttribute('id', 'derecha');
        campo2.setAttribute('rotation', '0 0 45');
        campo2.setAttribute('scale', '0.5 0.5 0.5');
        document.getElementById('marker').append(campo2);

        // flechas de corriente iz
        let flCAmp = document.createElement('a-entity');
        flCAmp.setAttribute('collada-model', '#fcup');
        flCAmp.setAttribute('position', '0 0.1 0');
        flCAmp.setAttribute('id', 'fliz');
        flCAmp.setAttribute('rotation', '0 180 -45');
        flCAmp.setAttribute('scale', '-0.5 0.5 0.5');
        document.getElementById('marker').append(flCAmp);

        // derecha
        let flCAmpDe = document.createElement('a-entity');
        flCAmpDe.setAttribute('collada-model', '#fcup');
        flCAmpDe.setAttribute('position', '0.32 0.1 0');
        flCAmpDe.setAttribute('id', 'flde');
        flCAmpDe.setAttribute('rotation', '0 0 45');
        flCAmpDe.setAttribute('scale', '0.5 0.5 0.5');
        document.getElementById('marker').append(flCAmpDe);




    }, 1500);

    setTimeout(function regreso() {
        //elimina animacion anterior de la flecha medidora
        let regresoSW = document.getElementById('ciSw');
        document.getElementById('aguja').removeChild(regresoSW);



        //animacion de flecha medidora
        let conec = document.createElement('a-animation');
        conec.setAttribute('id', 'ciSw');
        conec.setAttribute('attribute', 'rotation');
        conec.setAttribute('to', '0 -90 0');
        conec.setAttribute('dur', '3000');
        conec.setAttribute('easing', 'linear');
        document.getElementById('aguja').append(conec);

    }, 4000);

    setTimeout(function static() {
        //elimina animacion anterior de la flecha medidora
        let regresoSW = document.getElementById('ciSw');
        document.getElementById('aguja').removeChild(regresoSW);

        let campiz = document.getElementById('izq');
        document.getElementById('marker').removeChild(campiz);

        let sinCam2 = document.getElementById('derecha');
        document.getElementById('marker').removeChild(sinCam2);

        let flechiz = document.getElementById('fliz');
        document.getElementById('marker').removeChild(flechiz);

        let flechder = document.getElementById('flde');
        document.getElementById('marker').removeChild(flechder);






    }, 7000);
    setTimeout(function regreso() {
        //animacion de flecha medidora
        let conec = document.createElement('a-animation');
        conec.setAttribute('id', 'ciSw');
        conec.setAttribute('attribute', 'rotation');
        conec.setAttribute('to', '0 -180 0');
        conec.setAttribute('dur', '3000');
        conec.setAttribute('easing', 'linear');
        document.getElementById('aguja').append(conec);

        //animacion de apagador
        let sw = document.createElement('a-animation');
        sw.setAttribute('id', 'cierreSw');
        sw.setAttribute('attribute', 'rotation');
        sw.setAttribute('to', '0 90 0');
        sw.setAttribute('dur', '1000');
        sw.setAttribute('easing', 'linear');
        document.getElementById('sw').append(sw);

        //aparece el campo electrico
        let campo = document.createElement('a-entity');
        campo.setAttribute('collada-model', '#campo');
        campo.setAttribute('position', '0 0.1 0');
        campo.setAttribute('id', 'izq');
        campo.setAttribute('rotation', '0 0 45');
        campo.setAttribute('scale', '0.5 0.5 0.5');
        document.getElementById('marker').append(campo);

        let campo2 = document.createElement('a-entity');
        campo2.setAttribute('collada-model', '#campo');
        campo2.setAttribute('position', '0.32 0.1 0');
        campo2.setAttribute('id', 'derecha');
        campo2.setAttribute('rotation', '0 0 45');
        campo2.setAttribute('scale', '0.5 0.5 0.5');
        document.getElementById('marker').append(campo2);

        // flechas de corriente iz
        let flCAmp = document.createElement('a-entity');
        flCAmp.setAttribute('collada-model', '#fcup');
        flCAmp.setAttribute('position', '0 0.1 0');
        flCAmp.setAttribute('id', 'fliz');
        flCAmp.setAttribute('rotation', '0 0 45');
        flCAmp.setAttribute('scale', '0.5 0.5 0.5');
        document.getElementById('marker').append(flCAmp);

        // derecha
        let flCAmpDe = document.createElement('a-entity');
        flCAmpDe.setAttribute('collada-model', '#fcup');
        flCAmpDe.setAttribute('position', '0.32 0.1 0');
        flCAmpDe.setAttribute('id', 'flde');
        flCAmpDe.setAttribute('rotation', '0 180 -45');
        flCAmpDe.setAttribute('scale', '-0.5 0.5 0.5');
        document.getElementById('marker').append(flCAmpDe);



    }, 11000);
    setTimeout(function regreso() {

        //elimina animacion anterior de la flecha medidora
        let regresoSW = document.getElementById('ciSw');
        document.getElementById('aguja').removeChild(regresoSW);

        //animacion de flecha medidora
        let conec = document.createElement('a-animation');
        conec.setAttribute('id', 'ciSw');
        conec.setAttribute('attribute', 'rotation');
        conec.setAttribute('to', '0 -100 0');
        conec.setAttribute('dur', '3000');
        conec.setAttribute('easing', 'linear');
        document.getElementById('aguja').append(conec);

    }, 14000);
    setTimeout(function regreso() {
        //elimina animacion anterior de la flecha medidora
        let regresoSW = document.getElementById('ciSw');
        document.getElementById('aguja').removeChild(regresoSW);

        let campiz = document.getElementById('izq');
        document.getElementById('marker').removeChild(campiz);

        let sinCam2 = document.getElementById('derecha');
        document.getElementById('marker').removeChild(sinCam2);

        let flechiz = document.getElementById('fliz');
        document.getElementById('marker').removeChild(flechiz);

        let flechder = document.getElementById('flde');
        document.getElementById('marker').removeChild(flechder);

        //animacion de flecha medidora
        let conec = document.createElement('a-animation');
        conec.setAttribute('id', 'ciSw');
        conec.setAttribute('attribute', 'rotation');
        conec.setAttribute('to', '0 -90 0');
        conec.setAttribute('dur', '3000');
        conec.setAttribute('easing', 'linear');
        document.getElementById('aguja').append(conec);



    }, 17000);


}, 20000)