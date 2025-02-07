package cdac.DocNearMe.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import cdac.DocNearMe.DTO.DoctorDTO;
import cdac.DocNearMe.DTO.DoctorResponseDTO;
import cdac.DocNearMe.Entity.Doctor;
import cdac.DocNearMe.Exception.EmailAlreadyRegisteredException;
import cdac.DocNearMe.Exception.PasswordMismatchException;
import cdac.DocNearMe.Repository.DoctorRepository;

@Service
public class DoctorService {
	@Autowired
    private  DoctorRepository doctorRepository;
    
    private Path fileStorageLocation;

    public DoctorService() {
       
        this.fileStorageLocation = Paths.get("uploads").toAbsolutePath().normalize();
        
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Could not create upload directory!", ex);
        }
    }

    public DoctorResponseDTO registerDoctor(DoctorDTO doctorDTO) throws IOException {
        if (!doctorDTO.getPassword().equals(doctorDTO.getConfirmPassword())) {
            throw new PasswordMismatchException("Passwords do not match");
        }

        if (doctorRepository.findByEmail(doctorDTO.getEmail()).isPresent()) {
            throw new EmailAlreadyRegisteredException("Email already registered");
        }

        String fileName = storeFile(doctorDTO.getLicenseImage());

        Doctor doctor = new Doctor();
        doctor.setDoctorName(doctorDTO.getDoctorName());
        doctor.setSpecialization(doctorDTO.getSpecialization());
        doctor.setEmail(doctorDTO.getEmail());
        doctor.setAddress(doctorDTO.getAddress());
        doctor.setOpeningTime(doctorDTO.getOpeningTime());
        doctor.setClosingTime(doctorDTO.getClosingTime());
        doctor.setLicense(fileName);
        doctor.setPassword(doctorDTO.getPassword());

        Doctor savedDoctor = doctorRepository.save(doctor);
        return convertToResponseDTO(savedDoctor);
    }

    private String storeFile(MultipartFile file) throws IOException {
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path targetLocation = this.fileStorageLocation.resolve(fileName);
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
        return fileName;
    }

    private DoctorResponseDTO convertToResponseDTO(Doctor doctor) {
        DoctorResponseDTO dto = new DoctorResponseDTO();
        
        dto.setName(doctor.getDoctorName());
        dto.setSpecialization(doctor.getSpecialization());
        dto.setEmail(doctor.getEmail());
        dto.setAddress(doctor.getAddress());
        dto.setOpeningTime(doctor.getOpeningTimeString());
        dto.setClosingTime(doctor.getClosingTimeString());
        dto.setLicenseFileName(doctor.getLicense());
        return dto;
    }
}