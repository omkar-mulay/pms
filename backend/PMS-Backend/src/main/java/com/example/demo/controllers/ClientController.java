package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.entities.ClientRegister;
import com.example.demo.entities.Login;
import com.example.demo.services.ClientService;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ClientController {

	@Autowired
	ClientService cservice;
	
	@Autowired
	LoginService lservice;
	
	@PostMapping("/reg_client")
	public Client reg_client(@RequestBody ClientRegister cr) {
		Login l = new Login(cr.getUsername(), cr.getPassword(), "client");
		
		Login inserted = lservice.add(l);
		
		Client c = new Client(cr.getFname(), cr.getLname(), cr.getEmail(), cr.getContactno(), inserted);
		
		return cservice.add(c);
	}
	
	@GetMapping("/view_all_client")
	public List<Client> viewAllClient(){
		return cservice.viewAllClient();
	}
	
	@GetMapping("/update_client_account")
	public int updateAccount(String fname, String lname, String email, String contactno, int clientid) {
		return cservice.updateAccount(fname, lname, email, contactno, clientid);
	}
	
	
}
