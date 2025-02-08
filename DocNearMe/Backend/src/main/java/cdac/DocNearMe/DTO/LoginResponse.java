package cdac.DocNearMe.DTO;

public class LoginResponse {
    private boolean success;
    private String message;
    private String email;
    private String role;
    private String token;  // New field for JWT

    // Constructor for failure (without token)
    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    // Constructor for success (with token)
    public LoginResponse(boolean success, String message, String email, String role, String token) {
        this.success = success;
        this.message = message;
        this.email = email;
        this.role = role;
        this.token = token;
    }

    // Getters and setters

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
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
}
