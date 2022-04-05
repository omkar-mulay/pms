package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="task")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int taskid;
	
	@Column
	String task_name;
	
	@Column
	Date start_date;
	
	@Column
	Date end_date;
	
	@Column
	int projectid;
	
	@Column
	String status;
	
	@Column
	String description;
	
	@Column
	String priority;
	
	@Column
	int teammember_id;

	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Task(String task_name, Date start_date, Date end_date, int projectid, String status, String description,
			String priority, int teammember_id) {
		super();
		this.task_name = task_name;
		this.start_date = start_date;
		this.end_date = end_date;
		this.projectid = projectid;
		this.status = status;
		this.description = description;
		this.priority = priority;
		this.teammember_id = teammember_id;
	}

	public int getTaskid() {
		return taskid;
	}

	public void setTaskid(int taskid) {
		this.taskid = taskid;
	}

	public String getTask_name() {
		return task_name;
	}

	public void setTask_name(String task_name) {
		this.task_name = task_name;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public int getProjectid() {
		return projectid;
	}

	public void setProjectid(int projectid) {
		this.projectid = projectid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public int getTeammember_id() {
		return teammember_id;
	}

	public void setTeammember_id(int teammember_id) {
		this.teammember_id = teammember_id;
	}

	@Override
	public String toString() {
		return "Task [taskid=" + taskid + ", task_name=" + task_name + ", start_date=" + start_date + ", end_date="
				+ end_date + ", projectid=" + projectid + ", status=" + status + ", description=" + description
				+ ", priority=" + priority + ", teammember_id=" + teammember_id + "]";
	}
	
	
	
}
