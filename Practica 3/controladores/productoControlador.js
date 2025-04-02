const Producto = require('../modelos/Producto');

// Listar productos
exports.listarLibro = (req, res) => {
    Producto.obtenerTodos((err, resultados) => {
        if (err) throw err;
        res.render('index', { productos: resultados });
    });
};

// Guardar producto
exports.guardarLibro = (req, res) => {
    const { titulo, autor, genero, anio_publicacion } = req.body;
    const nuevoProducto = { titulo, autor, genero, anio_publicacion };
    Producto.insertar(nuevoProducto, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

// Editar producto
exports.editarLibro = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    console.log("Datos recibidos para actualizar:", datosActualizados);  // Para depuración
    Producto.actualizar(id, datosActualizados, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

// Eliminar producto
exports.eliminarLibro = (req, res) => {
    const { id } = req.params;
    Producto.eliminar(id, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};
