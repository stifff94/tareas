const fs = require('fs');

let tareasporhacer = [];

const cargarDB = () => {
    try {
        tareasporhacer = require('../db/data.json');
    } catch {
        tareasporhacer = [];
    }

}
const guardarDB = () => {
    let data = JSON.stringify(tareasporhacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw Error('no se pudo guardar', err);
    });
}

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completad: false
    };
    tareasporhacer.push(tarea)
    guardarDB();
    return tarea;
};

// const borrar = (descripcion) => {
//     cargarDB();
//     let index = tareasporhacer.findIndex(tarea => tarea.descripcion === descripcion);

//     if (index >= 0) {
//         tareasporhacer.splice(index, 1);
//         guardarDB();
//         return true;
//     }
// };

const borrar = (descripcion) => {
    cargarDB();
    let nuevolistado = tareasporhacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevolistado.length === tareasporhacer.length) {
        return false;
    } else {
        tareasporhacer = nuevolistado;
        guardarDB();
        return true;
    }
};
const getlista = () => {
    cargarDB();
    return tareasporhacer;
}

const acttualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = tareasporhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasporhacer[index].completado = completado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getlista,
    acttualizar,
    borrar
}