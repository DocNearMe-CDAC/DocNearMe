package cdac.DocNearMe.DTO;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class DoctorDTO{
    @NotBlank(message = "Doctor name is required")
    private String doctorName;

    @NotBlank(message = "Specialization is required")
    private String specialization;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Address is required")
    private String address;

    @Pattern(regexp = "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$", message = "Invalid time format (HH:mm)")
    private String openingTime;

    @Pattern(regexp = "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$", message = "Invalid time format (HH:mm)")
    private String closingTime;

    @NotNull(message = "License image is required")
    private MultipartFile licenseImage;

    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;

    @Size(min = 8, message = "Confirm password must be at least 8 characters")
    private String confirmPassword;

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

	public MultipartFile getLicenseImage() {
		return licenseImage;
	}

	public void setLicenseImage(MultipartFile licenseImage) {
		this.licenseImage = licenseImage;
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