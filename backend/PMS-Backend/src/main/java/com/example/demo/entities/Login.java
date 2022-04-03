package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="login")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int loginid;
	
	@Column(name="username")
	String username;
	
	@Column(name="password")
	String password;
	
	@Column
	String role;
	
	public Login() {
		super();
	}

	public Login(String username, String password, String role) {
		super();
		
		this.username = username;
		this.password = password;
		this.role = role;
	}

	@Override
	public String toString() {
		return "Login [loginid=" + loginid + ", username=" + username + ", password=" + password + ", role=" + role
				+ "]";
	}


	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
		this.loginid = loginid;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	
}
