package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="teammember")
public class TeamMember {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int teammember_id;

	@Column
	int empid;
	
	@Column
	int roleid;
	
	@Column
	int projectid;

	public TeamMember() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TeamMember(int empid, int roleid, int projectid) {
		super();
		this.empid = empid;
		this.roleid = roleid;
		this.projectid = projectid;
	}

	public int getTeammember_id() {
		return teammember_id;
	}

	public void setTeammember_id(int teammember_id) {
		this.teammember_id = teammember_id;
	}

	public int getEmpid() {
		return empid;
	}

	public void setEmpid(int empid) {
		this.empid = empid;
	}

	public int getRoleid() {
		return roleid;
	}

	public void setRoleid(int roleid) {
		this.roleid = roleid;
	}

	public int getProjectid() {
		return projectid;
	}

	public void setProjectid(int projectid) {
		this.projectid = projectid;
	}

	@Override
	public String toString() {
		return "TeamMember [teammember_id=" + teammember_id + ", empid=" + empid + ", roleid=" + roleid + ", projectid="
				+ projectid + "]";
	}
	
	
}
