package com.example.demo.entities;

public class EmployeeRegister {

	String username, password, fname, lname, email, contactno;

	public EmployeeRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public EmployeeRegister(String username, String password, String fname, String lname, String email,
			String contactno) {
		super();
		this.username = username;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contactno = contactno;
		//this.regtime = regtime;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

//	public String getRegtime() {
//		return regtime;
//	}
//
//	public void setRegtime(String regtime) {
//		this.regtime = regtime;
//	}

	@Override
	public String toString() {
		return "EmployeeRegister [username=" + username + ", password=" + password + ", fname=" + fname + ", lname="
				+ lname + ", email=" + email + ", contactno=" + contactno + "]";
	}
	
	
}
