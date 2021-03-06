package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Task;
import com.example.demo.repositries.TaskRepositry;

@Service
public class TaskService {

	@Autowired
	TaskRepositry taskrepo;
	
	public List<Task> viewTaskByProject(int projectid){
		return taskrepo.viewTaskByProject(projectid);
	}
	
	public Task viewTaskByTaskid(int taskid){
		return taskrepo.viewTaskByTaskid(taskid);
	}
	
	public List<Task> showTaskByEmpid(int empid){
		return taskrepo.showTaskByEmpid(empid);
	}
	
	public List<String> viewStatusCount(int projectid){
		return taskrepo.viewStatusCount(projectid);
	}
	
	public List<String> viewTaskStatusByProject(int projectid){
		return taskrepo.viewTaskStatusByProject(projectid);
	}
	
	public int insertTask(String task_name, String start_date, String end_date, int projectid, String status, String description, String priority, int teammember_id) {
		return taskrepo.insertTask(task_name, start_date, end_date, projectid, status, description, priority, teammember_id);
	}
	
	public int updateTask(String task_name, String start_date, String end_date, String description, String priority, int teammember_id, int taskid) {
		return taskrepo.updateTask(task_name, start_date, end_date, description, priority, teammember_id, taskid);
	}
	
	public int updateTaskByEmployee(String status, int taskid) {
		return taskrepo.updateTaskByEmployee(status, taskid);
	}
	
	public int deleteTaskById(int taskid) {
		return taskrepo.deleteTaskById(taskid);
	}
}
