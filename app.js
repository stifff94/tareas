const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        listado = tareas.getlista();
        for (let tarea of listado) {
            console.log("______POR HACER_______")
            console.log(tarea.descripcion);
            console.log("COMPLETADO:", false)
        }
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
        break;
    case 'borrar':
        tareas.borrar(argv.borrar);

        break;
    default:
        console.log("no se reconoce el comando")

}