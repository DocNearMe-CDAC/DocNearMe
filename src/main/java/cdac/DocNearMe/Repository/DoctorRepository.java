package cdac.DocNearMe.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cdac.DocNearMe.Entity.Doctor;

import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    Optional<Doctor> findByEmail(String email);
}