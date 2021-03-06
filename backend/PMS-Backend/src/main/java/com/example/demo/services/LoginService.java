package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositries.LoginRepositry;

@Service
public class LoginService {
	
	@Autowired
	LoginRepositry lrepo;
	
	public Object checkLogin(String username, String password) {
		
		Object l = lrepo.checkLogin(username, password);
		
//		if(l.size()==1)
//		{
			//System.out.println(l.get(0)[0]+" : "+l.get(0)[1]);
			return l;
			
//		}
//		else
//		{
//			return null;
//		}
	}
	
	public Login add(Login l) {
		return lrepo.save(l);
	}
	
	public int updatePassword(String password, String username) {
		return lrepo.updatePassword(password, username);
	}

}
