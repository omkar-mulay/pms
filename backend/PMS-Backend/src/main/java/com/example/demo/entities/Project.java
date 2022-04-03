package com.example.demo.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "project")
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int projectid;
	
	@Column
	int managerid;
	
	@Column
	String projectname;
	
	@Column
	String project_desc;
	
	@Column
	Date startdate;
	
	@Column
	Date enddate;
	
	@Column
	int clientid;

	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Project(int managerid, String projectname, String project_desc, Date startdate, Date enddate, int clientid) {
		super();
		this.managerid = managerid;
		this.projectname = projectname;
		this.project_desc = project_desc;
		this.startdate = startdate;
		this.enddate = enddate;
		this.clientid = clientid;
	}

	public int getProjectid() {
		return projectid;
	}

	public void setProjectid(int projectid) {
		this.projectid = projectid;
	}

	public int getManagerid() {
		return managerid;
	}

	public void setManagerid(int managerid) {
		this.managerid = managerid;
	}

	public String getProjectname() {
		return projectname;
	}

	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}

	public String getProject_desc() {
		return project_desc;
	}

	public void setProject_desc(String project_desc) {
		this.project_desc = project_desc;
	}

	public Date getStartdate() {
		return startdate;
	}

	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}

	public Date getEnddate() {
		return enddate;
	}

	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}

	public int getClientid() {
		return clientid;
	}

	public void setClientid(int clientid) {
		this.clientid = clientid;
	}

	@Override
	public String toString() {
		return "Project [projectid=" + projectid + ", managerid=" + managerid + ", projectname=" + projectname
				+ ", project_desc=" + project_desc + ", startdate=" + startdate + ", enddate=" + enddate + ", clientid="
				+ clientid + "]";
	}
	
	

	

	
}
