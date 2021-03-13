package com.cognizant.loanservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.loanservice.model.User;
import com.cognizant.loanservice.service.UserService;

@RestController
@RequestMapping("/userService")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers(){
		
		 return userService.getAllUsers();
	}
	
	@GetMapping("/authenticate")
	public List<User> authenticateUser(@RequestParam String username,@RequestParam String password) {
		return userService.authenticate(username, password);
	}
	
	@GetMapping("/getUser")
	public List<User> getUserById(@RequestParam int id){
		return userService.getUserById(id);
	}
}
