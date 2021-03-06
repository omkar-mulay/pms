package com.example.demo.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Project;
import com.example.demo.services.ProjectService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

	@Autowired
	ProjectService pservice;
	
	@PostMapping("/add_project")
	public Project add_Project(@RequestBody Project p) {
		return pservice.insertProject(p);
	}
	
	@GetMapping("/delete_project")
	public int delete_Project(@RequestParam int projectid) {
		return pservice.deleteProject(projectid);
	}
	
	@GetMapping("/update_project")
	public int update_Project(@RequestParam int managerid, String projectname, String project_desc, String enddate,int projectid) {
		return pservice.updateProject(managerid, projectname, project_desc, enddate, projectid);
	}
	
	@GetMapping("/show_all_projects")
	public List<Project> showAllProjects(){
		return pservice.showAllProjects();
	}
	
	@GetMapping("/search_by_projectname")
	public Project searchByProjectName(@RequestParam String projectname) {
		return pservice.searchByProjectName(projectname);
	}
	
	@GetMapping("/search_by_projectid")
	public Project searchByProjectId(@RequestParam int projectid) {
		return pservice.searchByProjectId(projectid);
	}
	
	@GetMapping("/search_by_managerid")
	public List<Project> searchByManagerId(@RequestParam int managerid){
		return pservice.searchByManagerId(managerid);
	}
	
	@GetMapping("/search_by_clientid")
	public List<Project> searchByClientId(@RequestParam int clientid){
		return pservice.searchByClientId(clientid);
	}
	
}
