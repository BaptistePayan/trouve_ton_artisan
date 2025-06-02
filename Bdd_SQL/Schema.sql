-- Création de bdd 'artisan'

CREATE DATABASE IF NOT EXISTS artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE artisan;
CREATE USER 'artisan'@'localhost' IDENTIFIED BY 'Artisan_Auvergne_Rhone_Alpes'; 
GRANT ALL PRIVILEGES ON artisan.* TO 'artisan'@'localhost';
FLUSH PRIVILEGES;

-- Table des catégories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) UNIQUE NOT NULL
);

-- Table des spécialités
CREATE TABLE specialites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) UNIQUE NOT NULL
);

-- Table des villes
CREATE TABLE villes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) UNIQUE NOT NULL
);

-- Table des entreprises
CREATE TABLE entreprises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    a_propos TEXT,
    email VARCHAR(100),
    site_web VARCHAR(255),
    top BOOLEAN DEFAULT FALSE,
    categorie_id INT,
    specialite_id INT,
    ville_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categories(id),
    FOREIGN KEY (specialite_id) REFERENCES specialites(id),
    FOREIGN KEY (ville_id) REFERENCES villes(id)
);