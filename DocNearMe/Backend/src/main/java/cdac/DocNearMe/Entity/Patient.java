package cdac.DocNearMe.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int patientId;

    @Column(name = "name", nullable = false)
    private String Name;

    @Column(name = "phone_number", nullable = false, unique = true)
    private String phoneNumber;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "medical_history", nullable = true, columnDefinition = "TEXT")
    private String medicalHistory;

    @Enumerated(EnumType.STRING) 
    @Column(name = "gender", nullable = false)
    private Gender gender;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "confirm_password", nullable = false)
    private String confirmPassword;

   
    public Patient() {
    	
    }

    public Patient(String Name, String phoneNumber, String email, Integer age, String address, 
                   String medicalHistory, Gender gender, String password, String confirmPassword) {
        this.Name = Name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
        this.address = address;
        this.medicalHistory = medicalHistory;
        this.gender = gender;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

   
    public int getId() {
        return patientId;
    }

    public void setId(int patientId) {
        this.patientId = patientId;
    }

    public String getName() {
        return Name;
    }

    public void setFirstName(String Name) {
        this.Name = Name;
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
}
