package com.example.demo.services;

import java.util.List;

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
	
	public int updateAccount(String fname, String lname, String email, String contactno, int empid) {
		return erepo.updateAccount(fname, lname, email, contactno, empid);
	}
	
	public List<Employee> viewAllEmp(){
		return erepo.viewAllEmp();
	}
	
	public List<Employee> viewAllManager(){
		return erepo.viewAllManager();
	}
}
