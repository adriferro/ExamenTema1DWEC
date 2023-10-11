//Adrián Fernández Rdoríguez
//


//Creamos una constante
const calc = document.getElementById("calc");
//Añadimos un evento a dicha constante, en este caso para cuando hacemos "click"
calc.addEventListener("click", () => {
    //Recogemos los valores del largo y del ancho
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);

    //Creamos nuevas variables para almacenar los resultados
    let area = document.getElementById("area");
    let perimetro = document.getElementById("perimetro");
    let diagonal = document.getElementById("diagonal");
    const mensaje = document.getElementById("mensaje");

    //Hacemos un if para comprobar que se introducen bien los datos
    if(largo>=0 && ancho>=0){
        area.innerHTML = `Área del rectángulo: ${(largo * ancho).toFixed(2)}`;
        perimetro.innerHTML = `Perímetro del rectángulo: ${(2*(largo + ancho)).toFixed(2)}`;
        diagonal.innerHTML = `Diagonal del rectángulo: ${(Math.sqrt(Math.pow(largo,2)+Math.pow(ancho,2))).toFixed(2)}`;
        mensaje.innerHTML = ``;
    }else{
        area.innerHTML = ``;
        perimetro.innerHTML = ``;
        diagonal.innerHTML = ``;
        mensaje.innerHTML = `Por favor, ingrese valores válidos.`;
    }
})