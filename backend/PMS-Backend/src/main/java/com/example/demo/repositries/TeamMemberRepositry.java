package com.example.demo.repositries;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TeamMember;

@Repository
@Transactional
public interface TeamMemberRepositry extends JpaRepository<TeamMember, Integer> {

	@Modifying
	@Query(value="insert into teammember (empid, roleid, projectid) values (?1, ?2, ?3)" , nativeQuery = true)
	public int assignProjectToEmployee(int empid, int roleid, int projectid);
}
