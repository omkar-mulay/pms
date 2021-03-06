package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Client;
import com.example.demo.entities.Login;
import com.example.demo.repositries.ClientRepositry;

@Service
public class ClientService {

	@Autowired
	ClientRepositry crepo;
	
	public Client save(Client c) {
		return crepo.save(c);
	}
	
	public Client add(Client c) {
		return crepo.save(c);
	}
	
	public List<Client> viewAllClient(){
		return crepo.viewAllClient();
	}
	
	public int updateAccount(String fname, String lname, String email, String contactno, int clientid) {
		return crepo.updateAccount(fname, lname, email, contactno, clientid);
	}
}
