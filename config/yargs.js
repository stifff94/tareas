const descripcion = {//objeto para caracteristicas de comando descripcion
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {//objeto para caracteristicas de comando de estado
    default: true,
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};

const argv = require('yargs')//llamado a el paquete de yargs
    .command('crear', 'Crear una tarea', {//comado crear tarea
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {//comado actualizar tarea
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {//comado borrar tarea
        descripcion
    })
    .command('listar', 'lista una tarea', {//comado listar tarea
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}