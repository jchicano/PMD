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
        console.log(this.personas);
    };
    return Main;
}());
var app = new Main();
