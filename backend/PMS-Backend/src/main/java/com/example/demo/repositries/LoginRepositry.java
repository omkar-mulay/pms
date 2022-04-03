package com.example.demo.repositries;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
@Transactional
public interface LoginRepositry extends JpaRepository<Login, Integer>{

	@Query("select l.loginid, l.role from Login l where username= :username and password= :password")
	public Object checkLogin(String username, String password);
	
	@Modifying
	@Query(value="update login l set l.password = ?1 where l.username = ?2" , nativeQuery = true)
	public int updatePassword(String password, String username);
}
