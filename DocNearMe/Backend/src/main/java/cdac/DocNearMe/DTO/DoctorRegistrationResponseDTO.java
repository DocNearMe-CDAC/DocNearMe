package cdac.DocNearMe.DTO;

public class DoctorRegistrationResponseDTO {

	private boolean success;
    private String message;
    private String doctorName;
    private String email;

    public DoctorRegistrationResponseDTO(boolean success, String message) {
		this.success = success;
		this.message = message;
	}
    
    public DoctorRegistrationResponseDTO(boolean success, String message, String doctorName, String email) {
        this.success = success;
    	this.message = message;
        this.doctorName = doctorName;
        this.email = email;
    }

    
    
    public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
