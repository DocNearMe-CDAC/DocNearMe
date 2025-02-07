package cdac.DocNearMe.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import cdac.DocNearMe.DTO.APIResponse;
import cdac.DocNearMe.DTO.PatientDTO;
import cdac.DocNearMe.Entity.Doctor;
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
        public APIResponse<Doctor> registerDoctor(@ModelAttribute Doctor doctor, @RequestParam(value = "licenseImage", required = false) MultipartFile file) throws IOException {
            return new APIResponse<Doctor>(true,"doctor registered successfully",doctorService.registerDoctor(doctor, file));
        }
        
    }
   
    

