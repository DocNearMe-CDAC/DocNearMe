package cdac.DocNearMe.Exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import cdac.DocNearMe.DTO.APIResponse;

@ControllerAdvice
public class GlobalExceptionHandler {

    
    @ExceptionHandler(EmailAlreadyRegisteredException.class)
    public APIResponse<String> handleEmailAlreadyRegistered(EmailAlreadyRegisteredException ex) {
        return new APIResponse<String>(false,ex.getMessage());
    }

    @ExceptionHandler(PasswordMismatchException.class)
    public APIResponse<String> handlePasswordMismatch(PasswordMismatchException ex) {
        return new APIResponse<String>(false,ex.getMessage());
    }

}
