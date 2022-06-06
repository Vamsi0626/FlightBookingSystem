package com.project.checkinMicroservice;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface CheckInRepositary extends MongoRepository<ChechIn, String> {

}
