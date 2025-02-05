package cdac.DocNearMe.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import cdac.DocNearMe.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmail(String Email);
	

}
