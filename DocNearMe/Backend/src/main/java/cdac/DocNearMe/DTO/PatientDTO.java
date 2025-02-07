package cdac.DocNearMe.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import cdac.DocNearMe.Entity.Gender;

public class PatientDTO {

    @NotBlank(message = "Name is mandatory")
    private String fullName;

    @NotBlank(message = "Phone number is mandatory")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
    private String phoneNumber;

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    private String email;

    @NotNull(message = "Age is mandatory")
    private Integer age;

    @NotBlank(message = "Address is mandatory")
    private String address;

    private String medicalHistory;

    @NotNull(message = "Gender is mandatory")
    private Gender gender; 

    @NotBlank(message = "Password is mandatory")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;

    @NotBlank(message = "Confirm Password is mandatory")
    private String confirmPassword;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
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

    // Password confirmation check
    public boolean isPasswordMatching() {
        return this.password != null && this.password.equals(this.confirmPassword);
    }

	@Override
	public String toString() {
		return "PatientDTO [fullName=" + fullName + ", phoneNumber=" + phoneNumber + ", email=" + email + ", age=" + age
				+ ", address=" + address + ", medicalHistory=" + medicalHistory + ", gender=" + gender + ", password="
				+ password + ", confirmPassword=" + confirmPassword + "]";
	}
    
    
}
