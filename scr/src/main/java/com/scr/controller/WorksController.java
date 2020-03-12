package com.scr.controller;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scr.services.WorksServices;

@RestController
@RequestMapping("/scr/api")
public class WorksController {
	
	private static Logger log = LogManager.getLogger(WorksController.class);
	
	@Autowired
	private WorksServices worksServices;
	

}
