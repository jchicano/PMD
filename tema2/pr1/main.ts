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
        //Limpiamos fila por defecto
        if(document.getElementById("defaultRow") != null){
            let defaultRow = document.getElementById("defaultRow");
            defaultRow.parentNode.removeChild(defaultRow);
        }
        //Limpiamos contenido antiguo
        if(document.getElementById("listado") != null){
            let listadoOld = document.getElementById("listado");
            listadoOld.innerHTML = "";
        }
        this.personas.forEach((item, index) => {
            let indice: number = index+1;
            let row: string = '<tr>'+
                '<th scope="row">'+indice+'</th>'+
                '<td>'+item.name+'</td>'+
                '<td>'+item.age+'</td>'+
                '</tr>';
            document.getElementById("listado").insertAdjacentHTML('beforeend', row);
        });
         
        //console.log(this.personas);
    } 

}

let app: Main = new Main();

