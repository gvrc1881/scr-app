package com.scr.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scr.model.DriveChecklist;
import com.scr.model.DriveTarget;
import com.scr.model.Drives;
import com.scr.repository.ChecklistRepository;
import com.scr.repository.DriveTargetRepository;
import com.scr.repository.DrivesRepository;

@Service
public class DrivesService {

	@Autowired
	private DrivesRepository driveRepository;
	
	@Autowired
	private ChecklistRepository checklistRepository;
	
	@Autowired
	private DriveTargetRepository driveTargetRepository;
	
	public List<Drives> findAllDrivesByStatusId(Integer statusId) {
		return driveRepository.findAllDrivesByStatusId(statusId);
	}

	public List<DriveChecklist> findAllChecklistByStatusId(Integer statusId) {
		return checklistRepository.findAllDrivesByStatusId(statusId);
	}

	public List<DriveTarget> findAllDriveTargetByStatusId(Integer statusId) {
		return driveTargetRepository.findAllDriveTargetByStatusId(statusId);
	}

}
