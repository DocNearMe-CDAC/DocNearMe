package cdac.DocNearMe.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cdac.DocNearMe.DTO.LoginRequest;
import cdac.DocNearMe.DTO.LoginResponse;
import cdac.DocNearMe.Entity.User;
import cdac.DocNearMe.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRespository;

	public LoginResponse login(LoginRequest loginRequest) {
		Optional<User> userOptional = userRespository.findByEmail(loginRequest.getEmail());
		if (userOptional.isPresent()) {
			User user = userOptional.get();

			if (user.getPassword().equals(loginRequest.getPassword())) {
				return new LoginResponse(true, "LoginSuccessfully", user.getEmail(), user.getRole().toString());
			} else {
				return new LoginResponse(false, "Invalid Password");
			}
		} else {
			return new LoginResponse(false, "User not found");
		}
	}
}
