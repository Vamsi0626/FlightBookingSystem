package com.project.flightSerachMicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class FlightSerachMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightSerachMicroserviceApplication.class, args);
	}

}
