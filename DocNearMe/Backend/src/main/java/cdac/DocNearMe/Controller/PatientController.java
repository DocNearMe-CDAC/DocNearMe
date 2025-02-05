package cdac.DocNearMe.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cdac.DocNearMe.Entity.Patient;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/patient")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController{

    //add service object with autowiring

    @PostMapping("/registerpatient")
    public String addPatient(@RequestBody Patient patient) {
        
        //add patient to database using service method
        
        return "Patient added";
    }
    
    
}