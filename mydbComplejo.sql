drop DATABASE if exists mydbComplejo;
create database if not exists mydbComplejo;
use mydbComplejo;
	
CREATE TABLE productos (
    id TINYINT,
    nombre VARCHAR(50),
    categoria TINYINT,
    precio DECIMAL(6,2),
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

SHOW TABLES;