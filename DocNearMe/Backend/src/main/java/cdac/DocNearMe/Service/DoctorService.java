package cdac.DocNearMe.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import cdac.DocNearMe.Entity.Doctor;
import cdac.DocNearMe.Exception.EmailAlreadyRegisteredException;
import cdac.DocNearMe.Exception.PasswordMismatchException;
import cdac.DocNearMe.Repository.DoctorRepository;

@Service
public class DoctorService {
	@Autowired
    private  DoctorRepository doctorRepository;
    
    
    
    public Doctor registerDoctor(Doctor doctor, MultipartFile file) throws IOException {
    	
    	
    	if (!doctor.getPassword().equals(doctor.getConfirmPassword())) {
            throw new PasswordMismatchException("Passwords do not match");
        }

        if (doctorRepository.findByEmail(doctor.getEmail()).isPresent()) {
            throw new EmailAlreadyRegisteredException("Email already registered");
        }
    	
    	
        if (file != null && !file.isEmpty()) {
            doctor.setLicense(file.getOriginalFilename());
        }
        return doctorRepository.save(doctor);
    }
    public Optional<List<Doctor>> getAllDoctor()
    {
    	List<Doctor> dt = doctorRepository.findAll();
    	Optional<List<Doctor>> optionalList = Optional.ofNullable(dt);
    	return optionalList;
    }

   
    
       }