package com.project.Login;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepositary extends MongoRepository<UserModel,String> {

	 

}
