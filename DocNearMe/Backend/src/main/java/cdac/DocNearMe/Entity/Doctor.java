package cdac.DocNearMe.Entity;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "doctors", uniqueConstraints = {
    @UniqueConstraint(columnNames = "email")
})
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctorId;

    @NotBlank(message = "Doctor name is required")
    @Column(name = "doctor_name", nullable = false)
    private String doctorName;

    @NotBlank(message = "Specialization is required")
    @Column(name = "specialization", nullable = false)
    private String specialization;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    @Column(nullable = false)
    private String email;

    @NotBlank(message = "Address is required")
    @Column(nullable = false)
    private String address;

    @Column(name = "opening_time", nullable = false)
    @JsonFormat(pattern = "HH:mm")
    private LocalTime openingTime;

    @Column(name = "closing_time", nullable = false)
    @JsonFormat(pattern = "HH:mm")
    private LocalTime closingTime;

    @Lob
    @Column(name = "license", columnDefinition = "LONGBLOB")
    private String license;

    @NotBlank(message = "Password is required")
    @Column(nullable = false)
    @JsonIgnore
    private String password;
    
    private String confirmPassword;
    
    
    public Doctor() {
    	
    }

    
    public void setOpeningTime(String time) {
        this.openingTime = LocalTime.parse(time);
    }

    public void setClosingTime(String time) {
        this.closingTime = LocalTime.parse(time);
    }

    public String getOpeningTimeString() {
        return openingTime != null ? openingTime.toString() : null;
    }

    public String getClosingTimeString() {
        return closingTime != null ? closingTime.toString() : null;
    }

	public Doctor(String doctorName,String specialization,String email,String address, LocalTime openingTime, LocalTime closingTime,
			String license, String password) {
		super();
		this.doctorName = doctorName;
		this.specialization = specialization;
		this.email = email;
		this.address = address;
		this.openingTime = openingTime;
		this.closingTime = closingTime;
		this.license = license;
		this.password = password;
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLicense() {
		return license;
	}

	public void setLicense(String license) {
		this.license = license;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
 
	

	public String getConfirmPassword() {
		return confirmPassword;
	}


	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}


	public Object getLicenseFileName() {
		// TODO Auto-generated method stub
		return null;
	}
}