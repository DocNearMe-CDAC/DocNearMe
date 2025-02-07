package cdac.DocNearMe.Entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum Gender {
	MALE("male"),
	FEMALE("female"),
	OTHER("other");
	
	private final String value;

    Gender(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
	@JsonCreator
    public static Gender fromValue(String value) {
        for (Gender gender : Gender.values()) {
            if (gender.value.equalsIgnoreCase(value)) {
                return gender;
            }
        }
        throw new IllegalArgumentException("Invalid gender: " + value);
     }
}