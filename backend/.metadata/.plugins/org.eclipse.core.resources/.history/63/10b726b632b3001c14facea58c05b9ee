package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Employee;
import com.example.demo.repositries.EmployeeRepositry;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepositry erepo;
	
	public Employee save(Employee e){
		return erepo.save(e);
	}
	
	public Employee add(Employee e) {
		return erepo.save(e);
	}
}
