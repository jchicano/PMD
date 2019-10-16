var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        //Creo array de personas
        this.personas = [];
        //Añado listeners a los botones
        var btnAdd = document.getElementById("btnAdd");
        var btnPrint = document.getElementById("btnPrint");
        btnAdd.addEventListener("click", function (e) {
            e.preventDefault();
            _this.addToArray();
        });
        btnPrint.addEventListener("click", function (e) { return _this.printArray(); });
    }
    Main.prototype.addToArray = function () {
        console.log("addToArray");
        //console.log((<HTMLInputElement>document.getElementById("inputName")).value);
        //console.log((<HTMLInputElement>document.getElementById("inputAge")).value);
        var inputName = document.getElementById("inputName");
        var inputAge = document.getElementById("inputAge");
        if (inputName.value != "" && inputAge.value != "") {
            var persona = {
                name: document.getElementById("inputName").value,
                age: +document.getElementById("inputAge").value
            };
            //Añadimos al final del array
            this.personas.push(persona);
            var html = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                'Persona añadida <strong>correctamente</strong>.' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span>' +
                '</button>' +
                '</div>';
            document.getElementById("notifications-container").insertAdjacentHTML('afterbegin', html);
            //alert("Persona añadida");
            //Limpiamos los campos
            inputName.value = "";
            inputAge.value = "";
            //Devolvemos el foco al primer input
            inputName.focus();
        }
        else {
            var html = '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
                '<strong>Error. </strong>Campos vacíos o erróneos.' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span>' +
                '</button>' +
                '</div>';
            document.getElementById("notifications-container").insertAdjacentHTML('afterbegin', html);
        }
    };
    Main.prototype.printArray = function () {
        var _this = this;
        console.log("printArray");
        //Limpiamos fila por defecto
        if (document.getElementById("defaultRow") != null) {
            var defaultRow = document.getElementById("defaultRow");
            defaultRow.parentNode.removeChild(defaultRow);
        }
        //Limpiamos contenido antiguo
        if (document.getElementById("listado") != null) {
            var listadoOld = document.getElementById("listado");
            listadoOld.innerHTML = "";
        }
        //Por cada item en el array insertamos una fila en la tabla
        this.personas.forEach(function (item, index) {
            var indice = index + 1; //TODO botones editar y borrar
            var row = '<tr id="row-' + index + '">' +
                '<th scope="row">' + indice + '</th>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.age + '</td>' +
                '<td>' +
                '<button id="edit-' + index + '" type="button" class="mr-3 btn btn-warning btn-sm"><i class="material-icons">edit</i></button>' +
                '<button id="remove-' + index + '" type="button" class="btn btn-danger btn-sm"><i class="material-icons">delete</i></button>' +
                '</td>' +
                '</tr>';
            //Insertamos la fila
            document.getElementById("listado").insertAdjacentHTML('beforeend', row);
            //Añadimos listeners a los botones de editar y eliminar
            var btnEdit = document.getElementById("edit-" + index);
            btnEdit.addEventListener("click", function (e) {
                console.log("quiere editar id " + index);
                //con array.splice se puede sobreescribir creo
                //TODO modal o algun tipo de ventana
            });
            var btnRemove = document.getElementById("remove-" + index);
            btnRemove.addEventListener("click", function (e) {
                _this.personas.filter(function (v, i) {
                    if (i === index) {
                        _this.personas.splice(i, 1); //Eliminamos un elemento de la posicion i
                        var currentRow = document.getElementById("row-" + index);
                        currentRow.parentNode.removeChild(currentRow);
                        console.log(_this.personas);
                        if (_this.personas.length === 0) { //Si el array esta vacio informamos en la tabla
                            var defaultRow = '<tr id="defaultRow">' +
                                '<td colspan="4" class="text-center">No se encuentra ninguna persona</td>' +
                                '</tr>';
                            document.getElementById("listado").insertAdjacentHTML('beforeend', defaultRow);
                        }
                    }
                });
            });
        });
        //console.log(this.personas);
    };
    return Main;
}());
var app = new Main();
