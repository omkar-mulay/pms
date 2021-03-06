package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="client")
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int clientid;
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String contactno;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="loginid")
	Login loginid;

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Client(String fname, String lname, String email, String contactno,
			Login loginid) {
		super();
		
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contactno = contactno;
		//this.regtime = regtime;
		this.loginid = loginid;
	}

	public int getClientid() {
		return clientid;
	}

	public void setClientid(int clientid) {
		this.clientid = clientid;
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

	public Login getLoginid() {
		return loginid;
	}

	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}

	@Override
	public String toString() {
		return "Client [clientid=" + clientid + ", fname=" + fname + ", lname=" + lname + ", email=" + email
				+ ", conactno=" + contactno + ",  loginid=" + loginid + "]";
	}
	
	
	

}
