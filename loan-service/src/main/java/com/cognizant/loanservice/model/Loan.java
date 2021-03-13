package com.cognizant.loanservice.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="loan")
public class Loan {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column
	private int id;
	@Column
	private int userid;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String loanProperty;
	@Column
	private int loanAmount;
	@Column
	private String loantype;
	@Column
	private int loanterm;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date dateOfOrigin;
	public Loan() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Loan(int id, int userid, String firstName, String lastName, String loanProperty, int loanAmount,
			String loantype, int loanterm, Date dateOfOrigin) {
		super();
		this.id = id;
		this.userid = userid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.loanProperty = loanProperty;
		this.loanAmount = loanAmount;
		this.loantype = loantype;
		this.loanterm = loanterm;
		this.dateOfOrigin = dateOfOrigin;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getLoanProperty() {
		return loanProperty;
	}
	public void setLoanProperty(String loanProperty) {
		this.loanProperty = loanProperty;
	}
	public int getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(int loanAmount) {
		this.loanAmount = loanAmount;
	}
	public String getLoantype() {
		return loantype;
	}
	public void setLoantype(String loantype) {
		this.loantype = loantype;
	}
	public int getLoanterm() {
		return loanterm;
	}
	public void setLoanterm(int loanterm) {
		this.loanterm = loanterm;
	}
	public Date getDateOfOrigin() {
		return dateOfOrigin;
	}
	public void setDateOfOrigin(Date dateOfOrigin) {
		this.dateOfOrigin = dateOfOrigin;
	}
	@Override
	public String toString() {
		return "Loan [id=" + id + ", userid=" + userid + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", loanProperty=" + loanProperty + ", loanAmount=" + loanAmount + ", loantype=" + loantype
				+ ", loanterm=" + loanterm + ", dateOfOrigin=" + dateOfOrigin + "]";
	}
	
}
