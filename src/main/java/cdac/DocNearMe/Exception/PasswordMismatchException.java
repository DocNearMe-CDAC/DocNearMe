package cdac.DocNearMe.Exception;

@SuppressWarnings("serial")
public class PasswordMismatchException extends RuntimeException{

	public PasswordMismatchException(String message) {
		super(message);
	}

}
