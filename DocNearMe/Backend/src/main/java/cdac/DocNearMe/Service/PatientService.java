package cdac.DocNearMe.Service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cdac.DocNearMe.DTO.APIResponse;
import cdac.DocNearMe.DTO.PatientDTO;
import cdac.DocNearMe.Entity.Patient;
import cdac.DocNearMe.Exception.EmailAlreadyRegisteredException;
import cdac.DocNearMe.Exception.PasswordMismatchException;
import cdac.DocNearMe.Repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public APIResponse<PatientDTO> registerPatient(PatientDTO patientDTO) {
        
        if (patientRepository.findByEmail(patientDTO.getEmail()) != null) {
            throw new EmailAlreadyRegisteredException("Email already registered!");
        }

        
        if (!patientDTO.getPassword().equals(patientDTO.getConfirmPassword())) {
            throw new PasswordMismatchException("Passwords do not match!");
        }
        
       
        Patient patientEntity = new Patient();
        
        BeanUtils.copyProperties(patientDTO, patientEntity);
         
        patientRepository.save(patientEntity);
        
        return new APIResponse<PatientDTO>(true,"user registered successfully",patientDTO);
    }

}
