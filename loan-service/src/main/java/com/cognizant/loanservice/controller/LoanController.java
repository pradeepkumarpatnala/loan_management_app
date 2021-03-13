package com.cognizant.loanservice.controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.loanservice.model.Loan;
import com.cognizant.loanservice.service.LoanService;



@RestController
@RequestMapping("/loanService")
public class LoanController {
	
	@Autowired
	private LoanService loanService;
	
	@GetMapping("/getAllLoans")
	public List<Loan> getAllLoans() {
		return loanService.getAllLoans();
	}
	
	@GetMapping("/searchLoans")
	public List<Loan> serachForLoan(@RequestParam String firstName,@RequestParam String lastName,@RequestParam int id){
		return loanService.serachLoans(firstName, lastName, id);
	}
	@PostMapping("/addLoan")
	public void addLoan(@RequestBody Loan loan) {
		loanService.addLoan(loan);
		System.out.println(loan);
	}
	@DeleteMapping("/deleteLoan")
	public void deleteLoan(@RequestParam int id) {
		loanService.deleteLoanById(id);
	}
	@GetMapping("/getLoan")
	public Loan getLoanById(@RequestParam int id){
		return loanService.getLoanById(id);
	}
	@PutMapping("/updateLoan")
	public void updateLoan(@RequestBody Loan loan) {
		loanService.updateLoan(loan);
	}
}
