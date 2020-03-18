package com.scr.controller;

import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.scr.model.DriveChecklist;
import com.scr.model.DriveTarget;
import com.scr.model.Drives;
import com.scr.services.DrivesService;
import com.scr.util.Constants;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/scr/api")
public class DrivesController {
	static Logger logger = LogManager.getLogger(DrivesController.class);
	
	@Autowired
	private DrivesService service;
	
	@RequestMapping(value = "/drives", method = RequestMethod.GET , headers = "Accept=application/json")
	public ResponseEntity<List<Drives>> findAllDrives() throws JSONException {
		List<Drives> usersList = null;
		try {			
			usersList = service.findAllDrivesByStatusId(Constants.ACTIVE_STATUS_ID);			
		} catch (NullPointerException e) {			
			logger.error(e);
		} catch (Exception e) {			
			logger.error(e);
		}
		return ResponseEntity.ok((usersList));
	}
	
	
	@RequestMapping(value = "/checklist", method = RequestMethod.GET , headers = "Accept=application/json")
	public ResponseEntity<List<DriveChecklist>> findAllChecklist() throws JSONException {
		List<DriveChecklist> checkList = null;
		try {			
			checkList = service.findAllChecklistByStatusId(Constants.ACTIVE_STATUS_ID);			
		} catch (NullPointerException e) {			
			logger.error(e);
		} catch (Exception e) {			
			logger.error(e);
		}
		return ResponseEntity.ok((checkList));
	}
	
	@RequestMapping(value = "/driveTarget", method = RequestMethod.GET , headers = "Accept=application/json")
	public ResponseEntity<List<DriveTarget>> findAllDriveTargets() throws JSONException {
		List<DriveTarget> driveTargetList = null;
		try {			
			driveTargetList = service.findAllDriveTargetByStatusId(Constants.ACTIVE_STATUS_ID);			
		} catch (NullPointerException e) {			
			logger.error(e);
		} catch (Exception e) {			
			logger.error(e);
		}
		return ResponseEntity.ok((driveTargetList));
	}
	
}
