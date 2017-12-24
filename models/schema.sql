CREATE DATABASE cine;

USE cine;

CREATE TABLE pelicula(
    id_pelicula INT(9)  PRIMARY KEY ,
    nombre_pelicula VARCHAR(30) NOT NULL,
    fecha_finalizada DATA NOT NULL,
    idioma VARCHAR(30) NOT NULL,
    foto VARCHAR(255) NOT NULL
);

CREATE TABLE teatro
(
    id_teatro INT(9) PRIMARY KEY,
    nombre_teatro VARCHAR(30) NOT NULL,
    ubicacion VARCHAR(30) NOT NULL,
    FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula)
);

CREATE TABLE usuario (
    id_usuario INT(9) PRIMARY KEY,
    nombre_usuario VARCHAR(45) NOT NULL,
    email VARCHAR(40) NOT NULL
   
)
