package cdac.DocNearMe.DTO;

public class APIResponse<T> {
	private boolean success;
	private String message;
	private T Data;
	
	
	  
	public APIResponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	
	
	public APIResponse(boolean success, String message, T data) {
		super();
		this.success = success;
		this.message = message;
		Data = data;
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
	public T getData() {
		return Data;
	}
	public void setData(T data) {
		Data = data;
	}
	
	
	

}
