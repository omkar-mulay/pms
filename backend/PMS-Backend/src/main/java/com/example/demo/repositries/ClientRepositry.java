package com.example.demo.repositries;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Client;

@Transactional
@Repository
public interface ClientRepositry extends JpaRepository<Client, Integer> {

}
