

// Clases y subclases

//Clase
class Deportista{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Subclase
class Futbolista extends Deportista{
    constructor(nombre, apellido, goles){
        super(nombre, apellido); // con la palabra super estoy diciendo que esos parametros los heredo de la clase base.
        this.goles = goles;
    }
}

//Instanciamos un deportista
let deportista1 = new Deportista("Maria", "Estrella");

//Instaciamos un futbolista

let futbolista1 = new Futbolista("Juan", "Pereyra", 5);