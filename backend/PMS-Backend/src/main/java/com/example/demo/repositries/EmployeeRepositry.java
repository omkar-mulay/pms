package com.example.demo.repositries;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Employee;

@Transactional
@Repository
public interface EmployeeRepositry extends JpaRepository<Employee, Integer> {

}
