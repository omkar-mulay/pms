package com.example.demo.repositries;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Client;

@Transactional
@Repository
public interface ClientRepositry extends JpaRepository<Client, Integer> {

	@Query(value="select c.clientid, concat(c.fname, ' ', c.lname) 'clientname' from client c join login l on c.loginid = l.loginid where l.role = 'client'", nativeQuery = true)
	public List<String> viewAllClient();
	
	@Modifying
	@Query(value="update client c set c.fname = ?1, c.lname = ?2, c.email = ?3, c.contactno = ?4 where c.clientid = ?5" , nativeQuery = true)
	public int updateAccount(String fname, String lname, String email, String contactno, int clientid);
}
