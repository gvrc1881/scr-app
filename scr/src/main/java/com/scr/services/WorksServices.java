package com.scr.services;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scr.repository.WorksRepository;

@Service
public class WorksServices {

	private static Logger log = LogManager.getLogger(WorksServices.class);

	@Autowired
	private WorksRepository worksRepository;

}
