package com.project.bookingMicroservice;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="*")
@RestController
@RequestMapping("/book")
public class BookController {
	Logger log=LoggerFactory.getLogger(BookController.class);
	@Autowired
	private BookRepositary bookrepositary;
	
	@RequestMapping("/welcome")
	public String getting()
	{
		//log.error("Getting() method executed");
		return "hello Vamsi";
	}
	@PostMapping("/bookTicket")
	public String saveFlight(@RequestBody Book ticket)
	{
		log.error("SaveFlight() method executed");
		bookrepositary.save(ticket);
		return "Flight booked Successfully";
	}
	
	@GetMapping("/orders")
	public List<Book> gettickets() {
		log.error("GetTickets() method executed");
		return bookrepositary.findAll(); 
	}
	@GetMapping("/checkIn/{id}")
	public Optional<Book> getSelectedFlight(@PathVariable String id){
		log.error("Get selected flight() method executed");
		return bookrepositary.findById(id);
	}
	
}
