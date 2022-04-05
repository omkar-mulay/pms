package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Task;
import com.example.demo.services.TaskService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TaskController {

	@Autowired
	TaskService taskservice;
	
	@GetMapping("/view_task_by_project")
	public List<Task> viewTaskByProject(@RequestParam int projectid){
		return taskservice.viewTaskByProject(projectid);
	}
	
	@GetMapping("/view_task_status")
	public List<String> viewTaskStatusByProject(@RequestParam int projectid){
		return taskservice.viewTaskStatusByProject(projectid);
	}
	
	@GetMapping("/insert_task")
	public int insertTask(@RequestParam String task_name, String start_date, String end_date, int projectid, String status, String description, String priority, int teammember_id) {
		return taskservice.insertTask(task_name, start_date, end_date, projectid, status, description, priority, teammember_id);
	}
	
	@GetMapping("/update_task")
	public int updateTask(@RequestParam String task_name, String start_date, String end_date, String description, String priority, int teammember_id, int taskid) {
		return taskservice.updateTask(task_name, start_date, end_date, description, priority, teammember_id, taskid);
	}
	
	@GetMapping("/update_task_by_employee")
	public int updateTaskByEmployee(String status, int taskid) {
		return taskservice.updateTaskByEmployee(status, taskid);
	}
	
	@GetMapping("delete_task")
	public int deleteTaskById(@RequestParam int taskid) {
		return taskservice.deleteTaskById(taskid);
	}
}
