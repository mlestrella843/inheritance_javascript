

// Declaracion de clase
class Papel{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// Expresion de clase

//expresion de clase anonima
let papel1A = class{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

//expresion de clase nombrada

let papel1B = class Papel1X{
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}