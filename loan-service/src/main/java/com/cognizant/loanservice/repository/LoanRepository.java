package com.cognizant.loanservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.cognizant.loanservice.model.Loan;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Integer> {

	List<Loan> findLoanByFirstNameAndLastNameAndId(String FirstName,String LastName,int id);
}
