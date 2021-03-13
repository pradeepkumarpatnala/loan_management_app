package com.cognizant.loanservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.cognizant.loanservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	
	List<User> findUserByUsernameAndPassword(String username,String password);
	List<User> findUserById(int id);

}
