package com.example.demo.repositries;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Project;

@Repository
@Transactional
public interface ProjectRepositry extends JpaRepository<Project, Integer> {

	@Modifying
	@Query(value="delete from project where projectid = ?1" , nativeQuery = true)
	public int deleteProjectById(int projectid);
	
	@Modifying
	@Query(value="update project p set p.managerid = ?1, p.projectname = ?2, p.project_desc = ?3, p.enddate = ?4 where p.projectid = ?5" , nativeQuery = true)
	public int updateProjectById(int managerid, String projectname, String project_desc, String enddate,int projectid);
	
}
