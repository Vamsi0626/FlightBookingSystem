package com.project.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="*")
@RestController
public class UserController {
	@Autowired
	private UserRepositary userRepositary;
	@PostMapping("/addUser")
	public String SaveUser(@RequestBody UserModel usermodel)
	{
		userRepositary.save(usermodel);
		return "user added successfully"+usermodel.getUsername();
	}

}
