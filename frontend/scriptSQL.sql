CREATE DATABASE hotel;

use hotel;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    telefono varchar(20) NOT NULL,
    direccion varchar(30) NOT NULL,
    tipo ENUM('cliente', 'administrador') DEFAULT 'cliente'
);

CREATE TABLE pais (
    id varchar(3) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE departamentos (
    id varchar(2) PRIMARY KEY,
    pais_id VARCHAR (3) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    FOREIGN KEY (pais_id) REFERENCES pais(id) ON DELETE CASCADE
);

CREATE TABLE municipios(
    id varchar(3) PRIMARY KEY,
    departamento_id VARCHAR (2) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id) ON DELETE CASCADE
);

CREATE TABLE comodidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL
);

CREATE TABLE hoteles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    municipio_id varchar(2) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    clasificacion DECIMAL(2,1) DEFAULT 0.0,
    descripcion TEXT,
    imagen varchar(200) NULL,
    estado char(1) NOT NULL, #A Habitacion activa D habitacion eliminada
    FOREIGN KEY (municipio_id) REFERENCES municipios(id) ON DELETE CASCADE
);

CREATE TABLE comodidades_hotel (
    comodidades_id INT,
    hotel_id INT,
    PRIMARY KEY (comodidades_id , hotel_id), 
	FOREIGN KEY (comodidades_id) REFERENCES comodidades(id) ON DELETE CASCADE,
    FOREIGN KEY (hotel_id) REFERENCES hoteles(id) ON DELETE CASCADE
);


CREATE TABLE habitaciones(
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT,
    numero_habitacion VARCHAR(10) NOT NULL,
    tipo_habitacion ENUM('sencilla', 'doble') DEFAULT 'sencilla',
    capacidad INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    disponibilidad BOOLEAN DEFAULT TRUE,
    descripcion TEXT,
    imagen varchar(200) NULL,
	estado char(1) NOT NULL, #A Habitacion activa D habitacion eliminada
    FOREIGN KEY (hotel_id) REFERENCES hoteles(id) ON DELETE CASCADE
);

CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    habitacion_id INT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado ENUM('activa', 'cancelada', 'pendiente' , 'finalizada') DEFAULT 'activa',
    valor_pago DECIMAL (10,2) NOT NULL,
    valor_reserva DECIMAL (10,2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (habitacion_id) REFERENCES habitaciones(id) ON DELETE CASCADE
);
