package com.example.demo.repositries;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Employee;

@Transactional
@Repository
public interface EmployeeRepositry extends JpaRepository<Employee, Integer> {

	@Modifying
	@Query(value="update employee e set e.fname = ?1, e.lname = ?2, e.email = ?3, e.contactno = ?4 where e.empid = ?5" , nativeQuery = true)
	public int updateAccount(String fname, String lname, String email, String contactno, int empid);
}
