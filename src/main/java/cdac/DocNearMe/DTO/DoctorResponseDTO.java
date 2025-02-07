package cdac.DocNearMe.DTO;

public class DoctorResponseDTO {
    private String name;
    private String specialization;
    private String email;
    private String address;
    private String openingTime;
    private String closingTime;
    private String licenseFileName;
    
    
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public String getLicenseFileName() {
		return licenseFileName;
	}
	public void setLicenseFileName(String licenseFileName) {
		this.licenseFileName = licenseFileName;
	}

}