package cdac.DocNearMe.DTO;

public class PatientRegistrationResponseDTO {

	private boolean success;
    private String message;
    private String Name;
    private String email;
    
    public PatientRegistrationResponseDTO(boolean success, String message) {
		this.success = success;
		this.message = message;
	}

    public PatientRegistrationResponseDTO(boolean success, String message, String Name, String email) {
        this.success = success;
    	this.message = message;
        this.Name = Name;
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

    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
