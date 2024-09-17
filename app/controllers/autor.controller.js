const db = require('../config/db.config.js');
const Autor = db.Autor;

// Crear un nuevo autor
exports.create = (req, res) => {
    Autor.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nacionalidad: req.body.nacionalidad,
        fecha_nacimiento: req.body.fecha_nacimiento
    })
    .then(autor => {
        res.status(201).json(autor);
    })
    .catch(err => {
        res.status(500).json({
            message: "Error al crear el autor",
            error: err.message
        });
    });
};

// Obtener todos los autores
exports.findAll = (req, res) => {
    Autor.findAll()
    .then(autores => {
        res.status(200).json(autores);
    })
    .catch(err => {
        res.status(500).json({
            message: "Error al obtener los autores",
            error: err.message
        });
    });
};

// Obtener un autor por ID
exports.findOne = (req, res) => {
    Autor.findByPk(req.params.id)
    .then(autor => {
        if (autor) {
            res.status(200).json(autor);
        } else {
            res.status(404).json({
                message: "Autor no encontrado"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Error al obtener el autor",
            error: err.message
        });
    });
};

// Actualizar un autor por ID
exports.update = (req, res) => {
    Autor.update(req.body, {
        where: { id_autor: req.params.id }
    })
    .then(result => {
        if (result[0] === 1) {
            res.status(200).json({
                message: "Autor actualizado exitosamente"
            });
        } else {
            res.status(404).json({
                message: "Autor no encontrado"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Error al actualizar el autor",
            error: err.message
        });
    });
};

// Eliminar un autor por ID
exports.delete = (req, res) => {
    Autor.destroy({
        where: { id_autor: req.params.id }
    })
    .then(result => {
        if (result === 1) {
            res.status(200).json({
                message: "Autor eliminado exitosamente"
            });
        } else {
            res.status(404).json({
                message: "Autor no encontrado"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Error al eliminar el autor",
            error: err.message
        });
    });
};
