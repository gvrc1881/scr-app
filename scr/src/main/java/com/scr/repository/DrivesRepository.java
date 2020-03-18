package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scr.model.Drives;

@Repository
public interface DrivesRepository extends JpaRepository<Drives, Long> {

	List<Drives> findAllDrivesByStatusId(Integer statusId);

}
