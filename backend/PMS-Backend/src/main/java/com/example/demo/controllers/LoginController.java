package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	@Autowired
	LoginService lservice;
	
	@PostMapping("/login")
	public Object checkLogin(@RequestBody Login l) {
		return lservice.checkLogin(l.getUsername(), l.getPassword());
	}
	
	@PostMapping("/update_password")
	public int updatePassword(@RequestParam String password, @RequestParam String username) {
		return lservice.updatePassword(password, username);
	}

}
