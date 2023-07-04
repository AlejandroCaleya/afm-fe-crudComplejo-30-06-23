drop DATABASE if exists mydbComplejo;
create database if not exists mydbComplejo;
use mydbComplejo;
	
CREATE TABLE productos (
    id TINYINT,
    nombre VARCHAR(50),
    categoria TINYINT,
    precio DECIMAL(10,2),
    stock INT,
    fabricante TINYINT
);

CREATE TABLE fabricantes (
    id TINYINT,
    nombre VARCHAR(50)
);

CREATE TABLE categorias (
    id TINYINT,
    nombre VARCHAR(50)
);

#ALTER TABLE productos ADD PRIMARY KEY AUTO_INCREMENT (id);
ALTER TABLE productos MODIFY COLUMN id TINYINT AUTO_INCREMENT PRIMARY KEY;
#ALTER TABLE fabricantes ADD PRIMARY KEY AUTO_INCREMENT (id);
ALTER TABLE fabricantes MODIFY COLUMN id TINYINT AUTO_INCREMENT PRIMARY KEY;
#ALTER TABLE categorias ADD PRIMARY KEY AUTO_INCREMENT (id);
ALTER TABLE categorias MODIFY COLUMN id TINYINT AUTO_INCREMENT PRIMARY KEY;

#ALTER TABLE productos ADD CONSTRAINT fk_categoria FOREIGN KEY (categoria) REFERENCES categorias(id);
#ALTER TABLE productos ADD CONSTRAINT fk_fabricante FOREIGN KEY (fabricante) REFERENCES fabricantes(id);


INSERT INTO productos (id, nombre, categoria, precio, stock, fabricante)
VALUES
    (1, 'Camisa Azul', 1, 19.99, 50, 1),
    (2, 'Pantalón Negro', 1, 29.99, 30, 2),
    (3, 'Zapatos Deportivos', 2, 49.99, 20, 3),
    (4, 'Vestido Floral', 3, 39.99, 10, 4),
    (5, 'Camiseta Blanca', 1, 9.99, 100, 1),
    (6, 'Jeans Ajustados', 1, 39.99, 15, 2),
    (7, 'Zapatillas Negras', 2, 59.99, 25, 3),
    (8, 'Blusa Estampada', 3, 29.99, 8, 4),
    (9, 'Chaqueta de Cuero', 1, 79.99, 5, 1),
    (10, 'Falda Lisa', 3, 24.99, 12, 4);


    INSERT INTO fabricantes (id, nombre)
VALUES
    (1, 'Fabricante A'),
    (2, 'Fabricante B'),
    (3, 'Fabricante C'),
    (4, 'Fabricante D'),
    (5, 'Fabricante E'),
    (6, 'Fabricante F'),
    (7, 'Fabricante G'),
    (8, 'Fabricante H'),
    (9, 'Fabricante I'),
    (10, 'Fabricante J');


INSERT INTO categorias (id, nombre)
VALUES
    (1, 'Ropa'),
    (2, 'Calzado'),
    (3, 'Accesorios'),
    (4, 'Electrónicos'),
    (5, 'Hogar'),
    (6, 'Joyería'),
    (7, 'Deportes'),
    (8, 'Juguetes'),
    (9, 'Cosméticos'),
    (10, 'Alimentos');

SELECT productos.* FROM productos JOIN categorias ON productos.categoria = categorias.id WHERE categorias.id = 1;
SHOW TABLES;