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
        btnAdd.addEventListener("click", (e:Event) => {
            e.preventDefault();
            this.addToArray();
        });
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
            let html = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
                        'Persona añadida <strong>correctamente</strong>.'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                    '</div>';
            document.getElementById("notifications-container").insertAdjacentHTML('afterbegin', html);
            //alert("Persona añadida");

            //Limpiamos los campos
            (<HTMLInputElement>inputName).value = "";
            (<HTMLInputElement>inputAge).value = "";

            //Devolvemos el foco al primer input
            (<HTMLInputElement>inputName).focus();
        }
        else{
            let html = '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
                        '<strong>Error. </strong>Campos vacíos o erróneos.'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                    '</div>';
            document.getElementById("notifications-container").insertAdjacentHTML('afterbegin', html);
        }
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
        //Por cada item en el array insertamos una fila en la tabla
        this.personas.forEach((item, index) => {
            let indice: number = index+1; //TODO botones editar y borrar
            let row: string = '<tr id="row-'+index+'">'+
                '<th scope="row">'+indice+'</th>'+
                '<td>'+item.name+'</td>'+
                '<td>'+item.age+'</td>'+
                '<td>'+
                '<button id="edit-'+index+'" type="button" class="mr-3 btn btn-warning btn-sm"><i class="material-icons">edit</i></button>'+
                '<button id="remove-'+index+'" type="button" class="btn btn-danger btn-sm"><i class="material-icons">delete</i></button>'+
                '</td>'+
                '</tr>';
            //Insertamos la fila
            document.getElementById("listado").insertAdjacentHTML('beforeend', row);

            //Añadimos listeners a los botones de editar y eliminar
            let btnEdit = document.getElementById("edit-"+index);
            btnEdit.addEventListener("click", (e:Event) => {
                console.log("quiere editar id "+index);
                //con array.splice se puede sobreescribir creo
                //TODO modal o algun tipo de ventana
            });
            let btnRemove = document.getElementById("remove-"+index);
            btnRemove.addEventListener("click", (e:Event) => {
                this.personas.filter((v,i) => {
                    if(i === index){
                        this.personas.splice(i,1); //Eliminamos un elemento de la posicion i
                        let currentRow = document.getElementById("row-"+index);
                        currentRow.parentNode.removeChild(currentRow);
                        console.log(this.personas);
                        if(this.personas.length === 0){ //Si el array esta vacio informamos en la tabla
                            let defaultRow = '<tr id="defaultRow">'+
                              '<td colspan="4" class="text-center">No se encuentra ninguna persona</td>'+
                            '</tr>';
                            document.getElementById("listado").insertAdjacentHTML('beforeend', defaultRow);
                        }
                    }
                });
            });
        });
         
        //console.log(this.personas);
    } 
    
}

let app: Main = new Main();

