interface Persona{
    name: string,
    age: number
}

class Main{
    //Creo array de personas
    personas : Persona[] = [];
    constructor() {
        //Añado listeners a los botones
        let btnAdd = document.getElementById("btnAdd");
        let btnPrint = document.getElementById("btnPrint");
        btnAdd.addEventListener("click", (e:Event) => this.addToArray());
        btnPrint.addEventListener("click", (e:Event) => this.printArray());
    }

    public addToArray(){
        console.log("addToArray");
        //console.log((<HTMLInputElement>document.getElementById("inputName")).value);
        //console.log((<HTMLInputElement>document.getElementById("inputAge")).value);
        let inputName = document.getElementById("inputName");
        let inputAge = document.getElementById("inputAge");
        if((<HTMLInputElement>inputName).value != "" && (<HTMLInputElement>inputAge).value != ""){
            let persona: Persona = {
                name: (<HTMLInputElement>document.getElementById("inputName")).value,
                age: +(<HTMLInputElement>document.getElementById("inputAge")).value
            }
            //Añadimos al final del array
            this.personas.push(persona);
            alert("Persona añadida");

            //Limpiamos los campos
            (<HTMLInputElement>inputName).value = "";
            (<HTMLInputElement>inputAge).value = "";
        }
        else alert("Campos vacíos o erróneos");
    }

    public printArray(){
        console.log("printArray");
        console.log(this.personas);
    }

}

let app: Main = new Main();

