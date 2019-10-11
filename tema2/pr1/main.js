var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        //Creo array de personas
        this.personas = [];
        //Añado listeners a los botones
        var btnAdd = document.getElementById("btnAdd");
        var btnPrint = document.getElementById("btnPrint");
        btnAdd.addEventListener("click", function (e) { return _this.addToArray(); });
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
            alert("Persona añadida");
            //Limpiamos los campos
            inputName.value = "";
            inputAge.value = "";
        }
        else
            alert("Campos vacíos o erróneos");
    };
    Main.prototype.printArray = function () {
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
        this.personas.forEach(function (item, index) {
            var indice = index + 1;
            var row = '<tr>' +
                '<th scope="row">' + indice + '</th>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.age + '</td>' +
                '</tr>';
            document.getElementById("listado").insertAdjacentHTML('beforeend', row);
        });
        //console.log(this.personas);
    };
    return Main;
}());
var app = new Main();
