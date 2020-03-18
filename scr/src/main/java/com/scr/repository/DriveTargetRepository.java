package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scr.model.DriveTarget;

public interface DriveTargetRepository extends JpaRepository<DriveTarget, Long>{

	List<DriveTarget> findAllDriveTargetByStatusId(Integer statusId);

}
