package com.cognizant.loanservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.loanservice.model.Loan;
import com.cognizant.loanservice.repository.LoanRepository;

@Service
public class LoanService {
	
	@Autowired
	private LoanRepository loanRepository;
	
	public List<Loan> getAllLoans(){
		return loanRepository.findAll();
	}
	public List<Loan> serachLoans(String firstname,String lastname,int id){
		return loanRepository.findLoanByFirstNameAndLastNameAndId(firstname, lastname, id);
	}
	public void addLoan(Loan loan) {
		loanRepository.save(loan);
	}
	
	public void deleteLoanById(int id) {
		loanRepository.deleteById(id);
	}
	public Loan getLoanById(int id) {
	
		return loanRepository.findById(id).get();
	}
	public void updateLoan(Loan loan) {
		loanRepository.save(loan);
	}
}
