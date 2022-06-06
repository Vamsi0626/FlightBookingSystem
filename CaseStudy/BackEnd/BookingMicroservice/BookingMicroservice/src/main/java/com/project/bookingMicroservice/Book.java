package com.project.bookingMicroservice;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection="ID")
public class Book {
	
	@Id
	private String id;
	private String fullName;
	private String phoneNumber;
	private String email;
	private String flightId;
	private String flightName;
	private String from;
	private String to;
	private String fare;
	private String date;
}
