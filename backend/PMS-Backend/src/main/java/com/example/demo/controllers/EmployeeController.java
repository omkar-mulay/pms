package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Employee;
import com.example.demo.entities.EmployeeRegister;
import com.example.demo.entities.Login;
import com.example.demo.services.EmployeeService;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {

	@Autowired
	EmployeeService eservice;
	
	@Autowired
	LoginService lservice;
	
	@PostMapping("/reg_emp")
	public Employee reg_emp(@RequestBody EmployeeRegister er) {
		Login l = new Login(er.getUsername(), er.getPassword(), er.getRole());
		
		Login inserted = lservice.add(l);
		
		Employee e = new Employee(er.getFname(), er.getLname(), er.getEmail(), er.getContactno(), inserted);
		
		return eservice.add(e);
	}
	
	@GetMapping("/update_employee_account")
	public int updateAccount(@RequestParam String fname, String lname, String email, String contactno, int empid) {
		return eservice.updateAccount(fname, lname, email, contactno, empid);
	}
	
	@GetMapping("/view_all_emp")
	public List<Employee> viewAllEmp(){
		return eservice.viewAllEmp();
	}
	
	@GetMapping("/view_all_manager")
	public List<Employee> viewAllManager(){
		return eservice.viewAllManager();
	}
}

