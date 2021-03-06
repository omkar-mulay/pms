package com.example.demo.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Project;
import com.example.demo.repositries.ProjectRepositry;

@Service
public class ProjectService {

	@Autowired
	ProjectRepositry prepo;
	
	public Project insertProject(Project p) {
		return prepo.save(p);
	}
	
	public int deleteProject(int projectid) {
		return prepo.deleteProjectById(projectid);
	}
	
	public int updateProject(int managerid, String projectname, String project_desc, String enddate,int projectid) {
		return prepo.updateProjectById(managerid, projectname, project_desc, enddate, projectid);
	}
	
	public List<Project> showAllProjects(){
		return prepo.findAll();
	}
	
	public Project searchByProjectName(String projectname) {
		return prepo.searchByProjectName(projectname);
	}
	
	public Project searchByProjectId(int projectid) {
		return prepo.searchByProjectId(projectid);
	}
	
	public List<Project> searchByManagerId(int managerid) {
		return prepo.searchByManagerId(managerid);
	}
	
	public List<Project> searchByClientId(int clientid) {
		return prepo.searchByClientId(clientid);
	}
	
}
