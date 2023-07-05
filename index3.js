
// Contructor de Animal

class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return ` ${this.nombre} - ${this.peso} kg. - ${this.edad} anios`
    }

}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
    informacion(){
        return ` ${this.nombre} - ${this.peso} kg. - ${this.edad} anios - ${this.raza}`
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion(){
        return ` ${this.nombre} - ${this.peso} kg. - ${this.edad} anios - ${this.sexo}`
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }
    informacion(){
        return ` ${this.nombre} - ${this.peso} kg. - ${this.edad} anios - ${this.color}`
    }
}

let perro1 = new Perro("Lia", 11, 12, "Yorkie");
let gato1 = new Gato("Juan", 12, 3, "Macho");
let conejo1 = new Conejo("Mafalda", 12, 2, "Rosado");
let animales = [perro1, gato1, conejo1];


function mostrarAnimales(){
    let lista = document.getElementById('listAnimales');

    for(let animal of animales){
        //por cada animal iterado, crearemos un item en un elemento li dentro del documento
        let item = document.createElement('li');
        // Este item escribira en si mismo la informacion de cada animal, lo que devuelve el metodo informacion()
        item.innerText = animal.informacion();
        // Y por ultimo se agregara en la lista declarada al inicio este item con toda la informacion.
        //Al final tendremos una lista llena de todos los items o animales que hayamos creado.
        lista.appendChild(item);

    }



}