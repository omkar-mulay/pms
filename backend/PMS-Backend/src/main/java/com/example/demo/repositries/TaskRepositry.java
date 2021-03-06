package com.example.demo.repositries;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Project;
import com.example.demo.entities.Task;

@Repository
@Transactional
public interface TaskRepositry extends JpaRepository<Task, Integer> {
	
	@Query(value="select * from task where projectid = ?1", nativeQuery = true)
	public List<Task> viewTaskByProject(int projectid);
	
	@Query(value="select * from task where taskid = ?1", nativeQuery = true)
	public Task viewTaskByTaskid(int taskid);
	
	@Query(value="select * from task t join teammember tm on t.teammember_id=tm.teammember_id where tm.empid=?1", nativeQuery = true)
	public List<Task> showTaskByEmpid(int empid);
	
	@Query(value="select count(status) 'count', status from task where projectid=?1 group by status having status in ('To do', 'In Progress', 'Complete') order by status asc", nativeQuery = true)
	public List<String> viewStatusCount(int projectid);
	
	@Query(value="select taskid, task_name, status from task where projectid = ?1", nativeQuery = true)
	public List<String> viewTaskStatusByProject(int projectid);
	
	@Modifying
	@Query(value="insert into task (task_name, start_date, end_date, projectid, status, description, priority, teammember_id) values (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)" , nativeQuery = true)
	public int insertTask(String task_name, String start_date, String end_date, int projectid, String status, String description, String priority, int teammember_id);
	
	@Modifying
	@Query(value="update task t set t.task_name = ?1, t.start_date = ?2, t.end_date = ?3, t.description = ?4, t.priority = ?5, t.teammember_id = ?6 where t.taskid = ?7" , nativeQuery = true)
	public int updateTask(String task_name, String start_date, String end_date, String description, String priority, int teammember_id, int taskid);
	
	@Modifying
	@Query(value="update task t set t.status = ?1 where t.taskid = ?2" , nativeQuery = true)
	public int updateTaskByEmployee(String status, int taskid);
	
	@Modifying
	@Query(value="delete from task where taskid = ?1" , nativeQuery = true)
	public int deleteTaskById(int taskid);

}
