package com.example.demo.services;

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
}
