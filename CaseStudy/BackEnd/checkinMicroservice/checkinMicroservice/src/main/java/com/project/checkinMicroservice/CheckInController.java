package com.project.checkinMicroservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
public class CheckInController {
	
	@Autowired
	private MongoOperations mongoOperations;
	
	@RequestMapping("/welcome")
	public String getting() {
		return "hello Vamsi";
	}
	
	 @GetMapping("/regexDate/{ticketId}")
	  public List<ChechIn> regexFlightDate(@RequestBody String ticketId){
		  Query query = new Query();
		  query.addCriteria(Criteria.where("ticketId"));
		  List<ChechIn> trai = mongoOperations.find(query,ChechIn.class);
		  /*if(trai.size()==0) {
			 return "success"; 
		  }
		  else {
			  return "not";
		  }*/
		  return trai;
	  }
	  
}

