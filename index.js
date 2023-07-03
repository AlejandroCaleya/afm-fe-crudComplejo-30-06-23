// index.js
const express = require("express");
const app = express();
const port = 5000;

const db = require("./db");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Obtener todos los productos
app.get("/listarproductos", (req, res) => {
	db.query("SELECT * FROM productos", (error, results) => {
		if (error) throw error;
		res.render("indexProductos", { productos: results });
	});
});
// Obtener todas las categorias
app.get("/listarcategorias", (req, res) => {
	db.query("SELECT * FROM categorias", (error, results) => {
		if (error) throw error;
		res.render("indexCategorias", { categorias: results });
	});
});
// Obtener todos los fabricantes
app.get("/listarfabricantes", (req, res) => {
	db.query("SELECT * FROM fabricantes", (error, results) => {
		if (error) throw error;
		res.render("indexFabricantes", { fabricantes: results });
	});
});

// Mostrar formulario para agregar un producto
app.get("/agregarproductos", (req, res) => {
	res.render("agregarProductos");
});
// Mostrar formulario para agregar una categoria
app.get("/agregarcategorias", (req, res) => {
	res.render("agregarCategorias");
});
// Mostrar formulario para agregar un fabricante
app.get("/agregarfabricantes", (req, res) => {
	res.render("agregarFabricantes");
});

// Agregar un producto a la base de datos
app.post("/agregarproductos", (req, res) => {
	const { nombre, categoria, precio, stock, fabricante } = req.body;
	db.query("INSERT INTO productos SET ?", { nombre, categoria, precio, stock, fabricante }, (error, result) => {
		if (error) throw error;
		res.redirect("/listarproductos");
	});
});
// Agregar una categoria a la base de datos
app.post("/agregarcategorias", (req, res) => {
	const nombre = req.body;
	db.query("INSERT INTO categorias SET ?", nombre, (error, result) => {
		if (error) throw error;
		res.redirect("/listarcategorias");
	});
});
// Agregar un fabricante a la base de datos
app.post("/agregarfabricantes", (req, res) => {
	const nombre = req.body;
	db.query("INSERT INTO fabricantes SET ?", nombre, (error, result) => {
		if (error) throw error;
		res.redirect("/listarfabricantes");
	});
});

// Mostrar formulario para editar un producto
app.get("/editarproductos/:id", (req, res) => {
	const id = req.params.id;
	db.query("SELECT * FROM productos WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.render("editarProductos", { producto: result[0] });
	});
});
// Mostrar formulario para editar una categoria
app.get("/editarcategorias/:id", (req, res) => {
	const id = req.params.id;
	db.query("SELECT * FROM categorias WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.render("editarCategorias", { categoria: result[0] });
	});
});
// Mostrar formulario para editar un fabricante
app.get("/editarfabricantes/:id", (req, res) => {
	const id = req.params.id;
	db.query("SELECT * FROM fabricantes WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.render("editarFabricantes", { fabricante: result[0] });
	});
});

// Actualizar un producto en la base de datos
app.post("/editarproductos/:id", (req, res) => {
	const id = req.params.id;
	const { nombre, precio, stock } = req.body;
	db.query("UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?", [nombre, precio, stock, id], (error, result) => {
		if (error) throw error;
		res.redirect("/listarproductos");
	});
});
// Actualizar una categoria en la base de datos
app.post("/editarcategorias/:id", (req, res) => {
	const id = req.params.id;
	const { nombre } = req.body;
	db.query("UPDATE categorias SET nombre = ? WHERE id = ?", [nombre, id], (error, result) => {
		if (error) throw error;
		res.redirect("/listarcategorias");
	});
});
// Actualizar un fabricante en la base de datos
app.post("/editarfabricantes/:id", (req, res) => {
	const id = req.params.id;
	const { nombre } = req.body;
	db.query("UPDATE fabricantes SET nombre = ? WHERE id = ?", [nombre, id], (error, result) => {
		if (error) throw error;
		res.redirect("/listarfabricantes");
	});
});

// Eliminar un producto de la base de datos
app.get("/eliminarproductos/:id", (req, res) => {
	const id = req.params.id;
	db.query("DELETE FROM productos WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.redirect("/listarproductos");
	});
});
// Eliminar una categoria de la base de datos
app.get("/eliminarcategorias/:id", (req, res) => {
	const id = req.params.id;
	db.query("DELETE FROM categorias WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.redirect("/listarcategorias");
	});
});
// Eliminar un fabricante de la base de datos
app.get("/eliminarfabricantes/:id", (req, res) => {
	const id = req.params.id;
	db.query("DELETE FROM fabricantes WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.redirect("/listarfabricantes");
	});
});

app.listen(port, () => {
	console.log(`App running on http://localhost:${port}`);
});
