package cdac.DocNearMe.Exception;

@SuppressWarnings("serial")
public class EmailAlreadyRegisteredException extends RuntimeException{

	public EmailAlreadyRegisteredException(String message) {
		super(message);
	}

}
