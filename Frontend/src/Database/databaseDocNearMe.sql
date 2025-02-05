Create database DocNearMe;
use DocNearMe;


CREATE TABLE users (
    userId INT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('doctor', 'patient') NOT NULL
);

-- Doctors Table
CREATE TABLE doctors (
    docterId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT  NOT NULL UNIQUE,
    username VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    specialization VARCHAR(255) NOT NULL,
    clinic_address TEXT,
    opening_time TIME,
    closing_time TIME,
    license BLOB NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId)
);

-- Patients Table
CREATE TABLE patients (
    patientId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    age INT,
    address TEXT,
    medical_history TEXT,
    gender ENUM('male', 'female', 'other'),
    FOREIGN KEY (userId) REFERENCES users(userId)
);