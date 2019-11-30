const fs = require('fs');//llaamdo al paquete fs para gestionar archivos

let tareasPorHacer = []; //listado de las tareas inicializado en 0

const cargarDB = () => {//metodo para cargar las tareas
    try {
        tareasPorHacer = require('../db/data.json');//funcion para cargar las tareas del archivo JSON
    } catch (error) {
        tareasPorHacer = [];
    }
}

const guardarDB = () => {//metodo para guardar las tareas
    let data = JSON.stringify(tareasPorHacer);//metodo para convertir los datos a enviar en formato JSON

    fs.writeFile('db/data.json', data, (err) => {//metodo para guardar los datos en el archivo JSON
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const crear = (descripcion) => {//metodo para crear las tareas
    cargarDB();//llamado a la funcion para cargar datos
    let tarea = { //objeto tarea
        descripcion, //descripcion de la tarea
        completado: false //estado de tarea: true o false
    };
    tareasPorHacer.push(tarea);// igreso de la tarea al listado cargado
    guardarDB();// guardado de el listado de tareas
    return tarea;// envio de la tarea generada
}


const getLista = (comando) => { // metodo para obtener las tareas en funcion de su estado
    cargarDB();//llamado a la funcion para cargar datos
    x=String(comando)//conversion del estado en una cadena 
    let nuevoListado = tareasPorHacer.filter(tarea => String(tarea.completado)===x);//filtro de los datos en funcion del estado enviado
    return nuevoListado;//envio de el listado de tareas
}

const actualizar = (descripcion, completado = true) => {// metodo para actualizar el estado de una tarea
    cargarDB();//llamado a la funcion para cargar datos
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);//metodo de busqueda en funcion de la descripcion dada
    if (index >= 0) {// solo hara la busqueda del indice si el valor es mayor que 0
        tareasPorHacer[index].completado = completado;//cambio de estado a true en los indices del listado coincidentes
        guardarDB();// guardado de el listado de tareas
        return true;// envio de confirmacion de cambio
    }
    return false;// envio de negacion de cambio

}

const borrar = (descripcion) => {// metodo para borrar una tarea
    cargarDB();//llamado a la funcion para cargar datos
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);//filtro de los datos en funcion de la descripcion enviada
                                                                                         //se guardara los datos en funcion de las tareas que no 
                                                                                        // contengan esa descripcion
    if (tareasPorHacer.length === nuevoListado.length) {//si el listado filtrado tiene el mismo tamaño que el listado original
                                                        //significa que no hubo coincidencias
        return false;//envio de negacion de cambios
    } else {
        tareasPorHacer = nuevoListado; // el listado original sera el nuevo listado filtrado
        guardarDB();// guardado de el nuevo listado de tareas
        return true;// envio de afirmacion de cambio
    }
}

module.exports = {//exportacion de todos los metodos necesarios
    crear,
    getLista,
    actualizar,
    borrar
}