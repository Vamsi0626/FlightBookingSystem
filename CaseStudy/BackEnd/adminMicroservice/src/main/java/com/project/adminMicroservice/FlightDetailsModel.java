package com.project.adminMicroservice;

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
public class FlightDetailsModel {
	@Id
	private String flightId;
	private String flightName;
	private String from;
	private String to;
	private double fare;
	private String date;
	
}
