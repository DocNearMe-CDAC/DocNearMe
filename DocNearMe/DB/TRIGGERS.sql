create table docnearme;
use docnearme;
-- Trigger for inserting doctors into user table
CREATE TRIGGER after_doctor_insert
AFTER INSERT ON doctors
FOR EACH ROW
INSERT INTO users ( email, password, role)
VALUES ( NEW.email, NEW.password, 'doctor');

-- Trigger for inserting patients into user table
CREATE TRIGGER after_patient_insert
AFTER INSERT ON patients
FOR EACH ROW
INSERT INTO users ( email, password, role)
VALUES ( NEW.email, NEW.password, 'patient');
