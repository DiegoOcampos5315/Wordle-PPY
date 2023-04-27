    let intentos = 6;
   
    let diccionario = ["APPLE", "HURLS","WINGS", "YOUTH", "ENEMY", "UNCLE", "STARS"];
    
    let palabra = diccionario [Math.floor(Math.random() * (diccionario.length))];
    function random(){
        Math.floor(Math.random() * (7)) + 0;
    }
        

    const BOTON = document.getElementById('guess-button');
    BOTON.addEventListener('click', intentar);
        const INTENTO = leerIntento();
        intentar(INTENTO);

    function leerIntento(){
        let intento = document.getElementById('guess-input');
        intento = intento.value;
        intento = intento.toUpperCase();
        return intento;
    }

    function intentar(intento){
        const INTENTO = leerIntento();
        if (INTENTO === palabra)  {
            terminar ("<h1>Ganaste! :3</h1>")
            return
        }
        const GRID = document.getElementById("grid");
        const ROW = document.createElement("div");
        ROW.ckassName= "row";


        for (let i in palabra){
            const SPAN = document.createElement("span");
            SPAN.className = "letter";
            SPAN.interHTML = INTENTO[i];
            if (INTENTO [i]===palabra[i]){           
            SPAN.innerHTML = INTENTO [i];
            SPAN.style.backgroundColor = 'green';
            } else if(palabra.includes(INTENTO[i])){
                SPAN.innerHTML = INTENTO [i];
                SPAN.style.backgroundColor = 'yellow';
            } else {
                SPAN.innerHTML = INTENTO [i];
                SPAN.style.backgroundColor = 'gray';
            }
            ROW.appendChild(SPAN);

        }
            GRID.appendChild(ROW);
            intentos--;
            if (intentos == 0){
                terminar ("<h1>PERDISTE! :/</h1>")               
            }
    }

    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input")
        INPUT.disabled = true;
        BOTON.disabled = true;
        let contenedor = document.getElementById("guesses");
        contenedor.innerHTML = mensaje
     }


