package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.TeamMember;
import com.example.demo.services.TeamMemberService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TeamMemberController {
	
	@Autowired
	TeamMemberService tservice;
	
	@GetMapping("/assign_project")
	public int assignProjectToEmployee(@RequestParam int empid, int roleid, int projectid) {
		return tservice.assignProjectToEmployee(empid, roleid, projectid);
	}

}
