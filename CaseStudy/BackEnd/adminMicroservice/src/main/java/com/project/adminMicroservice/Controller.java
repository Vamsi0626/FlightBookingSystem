package com.project.adminMicroservice;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins="*")
@RequestMapping("/adminpage")
public class Controller {
	
	Logger log=LoggerFactory.getLogger(Controller.class);
	@Autowired
	private Repositary repositary;
	
	@GetMapping("/allFlights")
	public List<FlightDetailsModel> getFlights() 
	{
		log.error("GetFlights() method executed");
		return repositary.findAll(); 
	}
	@GetMapping("/flights/{id}")
	public Optional<FlightDetailsModel> getFlightById(@PathVariable(value="id") String flightId)
	{		log.error("GetFlightId() method executed");
			return repositary.findById(flightId);					
	}
	@PostMapping("/addFlight")
	public String createFlight(@RequestBody FlightDetailsModel flight) {
		log.error("CreateFlight() method executed");
		repositary.save(flight);
		return "Added Flight with ID:"+flight.getFlightId();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public String deleteFlight(@PathVariable String id){
		log.error("DeleteFlight() method executed");
		repositary.deleteById(id);
		return "Successfully deleted"+id;
	}
	@PutMapping("/update/{id}")
	public String putStudent(@PathVariable String id, @RequestBody FlightDetailsModel studentDto) {
		log.error("UpdateFlights() method executed");
		repositary.save(studentDto);
	    return "Successfully updated";
	}
}
