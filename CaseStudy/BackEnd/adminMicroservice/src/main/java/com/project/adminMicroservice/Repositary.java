package com.project.adminMicroservice;



import org.springframework.data.mongodb.repository.MongoRepository;

public interface Repositary extends MongoRepository<FlightDetailsModel,String> {

	
}
