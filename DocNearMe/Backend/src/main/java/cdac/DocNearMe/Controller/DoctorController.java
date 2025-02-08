
package cdac.DocNearMe.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cdac.DocNearMe.Entity.Doctor;

@RestController
@RequestMapping("/api/doctor")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {

    //add service object with autowiring

    @PostMapping("/registerdoctor")
    public String addDoctor(@RequestBody Doctor doctor) {

        //add doctor to database using service method

        return "Doctor Added";
    }
    
}
