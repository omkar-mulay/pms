package com.example.demo.repositries;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepositry extends JpaRepository<Login, Integer>{

	@Query("select l.loginid, l.role from Login l where username= :username and password= :password")
	public Object checkLogin(String username, String password);
}
