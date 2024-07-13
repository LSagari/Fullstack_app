--INSERT INTO Employee (name, designation, ctc, email) VALUES ('John Doe', 'Software Engineer', 80000, 'john.doe@example.com');
--INSERT INTO Vendor (name, email, upi) VALUES ('Vendor Company', 'vendor@example.com', 'vendorupi@example.com');
-- Create Employee table
--CREATE TABLE IF NOT EXISTS Employee (
--    id BIGINT AUTO_INCREMENT PRIMARY KEY,
--    name VARCHAR(255) NOT NULL,
--    designation VARCHAR(255),
--    ctc DOUBLE,
--    email VARCHAR(255)
--);
--
---- Create Vendor table
--CREATE TABLE IF NOT EXISTS Vendor (
--    id BIGINT AUTO_INCREMENT PRIMARY KEY,
--    name VARCHAR(255) NOT NULL,
--    email VARCHAR(255),
--    upi VARCHAR(255)
--);
CREATE TABLE employee (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    designation VARCHAR(255),
    ctc DOUBLE,
    email VARCHAR(255)
);

CREATE TABLE vendor (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    upi VARCHAR(255)
);

CREATE TABLE email (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    to_email VARCHAR(255),
    subject VARCHAR(255),
    body TEXT,
    sent_at TIMESTAMP
);