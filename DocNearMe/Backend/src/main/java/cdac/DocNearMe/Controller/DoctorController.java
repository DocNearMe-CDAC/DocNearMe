
package cdac.DocNearMe.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cdac.DocNearMe.Entity.Doctor;
import cdac.DocNearMe.Service.DoctorService;

@RestController
@RequestMapping("/api/doctor")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {

    //add service object with autowiring
	DoctorService doctorService;

    @PostMapping("/registerdoctor")
    public String addDoctor(@RequestBody Doctor doctor) {

        //add doctor to database using service method

        return "Doctor Added";
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getAllDoctors")
    public Optional<List<Doctor>> getAllDoctor()
    {
    	return doctorService.getAllDoctor();
    }
    
}
