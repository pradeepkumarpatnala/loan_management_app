package com.cognizant.loanservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.loanservice.model.User;
import com.cognizant.loanservice.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public List<User> authenticate(String username,String password){
		return userRepository.findUserByUsernameAndPassword(username, password);
	}
	
	public List<User> getUserById(int userid){
		return userRepository.findUserById(userid);
	}
}
