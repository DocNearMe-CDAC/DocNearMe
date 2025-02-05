package cdac.DocNearMe.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctors")
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int doctorId;

	@Column(name = "doctor_name", nullable = false)
	private String doctorName;

	@Column(name = "specialization", nullable = false)
	private String doctorSpecialization;

	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@Column(name = "address", nullable = false)
	private String address;

	@Column(name = "opening_time", nullable = false)
	private String openingTime;

	@Column(name = "closing_time", nullable = false)
	private String closingTime;

	@Column(name = "license", nullable = true)
    private String licensePath;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "confirm_password", nullable = false)
	private String confirmPassword;

	public Doctor() {
		
	}

	public Doctor(String doctorName, String doctorSpecialization, String email, String address, String openingTime,
			String closingTime, String licensePath, String password, String confirmPassword) {
		this.doctorName = doctorName;
		this.doctorSpecialization = doctorSpecialization;
		this.email = email;
		this.address = address;
		this.openingTime = openingTime;
		this.closingTime = closingTime;
		this.licensePath = licensePath;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}

	
	public int getId() {
		return doctorId;
	}

	public void setId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getDoctorSpecialization() {
		return doctorSpecialization;
	}

	public void setDoctorSpecialization(String doctorSpecialization) {
		this.doctorSpecialization = doctorSpecialization;
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

	public String getOpeningTime() {
		return openingTime;
	}

	public void setOpeningTime(String openingTime) {
		this.openingTime = openingTime;
	}

	public String getClosingTime() {
		return closingTime;
	}

	public void setClosingTime(String closingTime) {
		this.closingTime = closingTime;
	}

	public String getLicensePath() {
        return licensePath;
    }

    public void setLicensePath(String licensePath) {
        this.licensePath = licensePath;
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
}
