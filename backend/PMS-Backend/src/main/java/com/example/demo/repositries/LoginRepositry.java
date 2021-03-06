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

	@Query(value="(select l.loginid,e.empid 'id',concat(e.fname,' ',e.lname) 'name',l.role from login l join employee e on l.loginid=e.loginid where l.username=?1 and l.password=?2) union (select l.loginid, c.clientid 'id',concat(c.fname,' ',c.lname) 'name',l.role from login l join client c on l.loginid=c.loginid where l.username=?1 and l.password=?2)",nativeQuery = true)
	public Object checkLogin(String username, String password);
	
	@Modifying
	@Query(value="update login l set l.password = ?1 where l.username = ?2" , nativeQuery = true)
	public int updatePassword(String password, String username);
}
