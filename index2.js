

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


//TRabajando con getters y setters, estos se usan cuando las propiedades son privadas
//las cuales se especifican con un guion delante

class Tenista extends Deportista{
    constructor(nombre, apellido, sets){
        super(nombre, apellido); // con la palabra super estoy diciendo que esos parametros los heredo de la clase base.
        this._sets = sets;
    }
    //Usamos get para accesar la variable privada sets
    get sets(){
        return this._sets;
    }
    set sets(nuevoSet){
        return this._sets = nuevoSet;
    }
}

let tenista1 = new Tenista("Maria", "Estrella", 3);

