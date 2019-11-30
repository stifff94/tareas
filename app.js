const argv = require('./config/yargs').argv; //llamado a los metodos de  yargs
const tareas = require('./controlador/tareas-por-hacer'); //llamado a los metodos de tareas por hacer
const colors = require('colors');//llamado al paquete colors

let comando = argv._[0];//extracción de los valores introducidos en terminal

switch (comando) {//seleccion del tipo de tarea a traves del comando itroducido
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);//llamado al metodo crear de tareas por hacer
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getLista(argv.completado);//llamado al metodo listar de tareas por hacer
        if(String(argv.completado)==="true"){//impresion segun el estado enviado
            for (let tarea of listado) {//recorrido de el listado generado
            console.log("=======TAREA REALIZADA=====".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            }}
        else {
            for (let tarea of listado) {
                console.log("=======TAREA POR HACER=====".green);
                console.log(tarea.descripcion);
                console.log("Estado: ", tarea.completado);
            }}   
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);//llamado al metodo actualizar de tareas por hacer
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);//llamado al metodo borrar de tareas por hacer
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");//impresion en caso de no reconocer el comando
}