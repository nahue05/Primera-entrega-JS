function capturar(){
    function Persona(nombre, apellido, edad, dias,){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dias = dias;
    }

    var nombreCapturar = document.getElementById("nombre").value;
    var apellidoCapturar = document.getElementById("apellido").value;
    var edadCapturar = document.getElementById("edad").value;
    var diasCapturar = document.getElementById("dias").value;

    nuevoCliente = new Persona(nombreCapturar,apellidoCapturar,edadCapturar,diasCapturar);
    console.log(nuevoCliente);
    agregar();
}

const datosClientes= []; 
function agregar(){
    datosClientes.push(nuevoCliente);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoCliente.nombre+'</td><td>'+nuevoCliente.apellido+'</td><td>'+nuevoCliente.edad+'</td><td>'+nuevoCliente.dias+'</td></tbody>';
};