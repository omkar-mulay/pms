package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TeamMember;
import com.example.demo.repositries.TeamMemberRepositry;

@Service
public class TeamMemberService {

	@Autowired
	TeamMemberRepositry trepo;
	
	public int assignProjectToEmployee(int empid, int roleid, int projectid) {
		return trepo.assignProjectToEmployee(empid, roleid, projectid);
	}
}
