const descripcion = {
    demand: true,
    alias: 's',
    desc: "listado de la tarea por hacer"
};
const completado = {
    demand: true,
    default: true,
    alias: 'c',
    desc: "marca como completada la tarea"
}
const borrar = {
    demand: true,
    default: true,
    alias: 'b',
    desc: "borra la tarea"
}

const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion
    })
    .command('actualizar', 'lista tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'lista tarea', {
        borrar
    })
    .help()
    .argv;


module.exports = {
    argv
};