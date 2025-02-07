package cdac.DocNearMe.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cdac.DocNearMe.DTO.APIResponse;
import cdac.DocNearMe.DTO.DoctorDTO;
import cdac.DocNearMe.DTO.DoctorResponseDTO;
import cdac.DocNearMe.DTO.PatientDTO;
import cdac.DocNearMe.Service.DoctorService;
import cdac.DocNearMe.Service.PatientService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RegistrationController {

    @Autowired
    private PatientService patientService;
    
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/patient/register")
    public APIResponse<PatientDTO> registerPatient(@RequestBody PatientDTO patient) {
        
              return  patientService.registerPatient(patient);
    }
    
    


       

        @PostMapping("/doctor/register")
        public ResponseEntity<?> registerDoctor(
        		@ModelAttribute DoctorDTO requestDTO) {

            

            try {
                DoctorResponseDTO response = doctorService.registerDoctor(requestDTO);
                return ResponseEntity.ok(response);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
            }
        }
    }
   
    

