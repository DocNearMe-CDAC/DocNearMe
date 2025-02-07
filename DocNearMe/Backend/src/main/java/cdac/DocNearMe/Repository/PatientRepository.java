package cdac.DocNearMe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cdac.DocNearMe.Entity.Patient;

public interface PatientRepository extends JpaRepository<Patient,Integer>{
   
	Patient findByEmail(String Email);
	
}
