package com.project.flightSerachMicroservice.SearchRepositary;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.project.flightSerachMicroservice.mongoDB.model.flights;

public interface flightRepositary extends MongoRepository<flights,Integer> {
	
	//@Query("{'from':?0,'to':?1,'date':?2}")
	//List<flights> findByFromToAndDate(String from,String to,String date);
	//@Query("{'from': ?0,'to': ?1,'date':?2}")
	//List<flights> findByLocation(String from,String to,String date);
	@Query("{'from': ?0,'to': ?1}")
	List<flights> findByLocation(String from,String to);
	}
	

