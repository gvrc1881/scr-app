/**
 * 
 */
package com.scr.services;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scr.model.DivisionsHistory;
import com.scr.model.JobsHistory;
import com.scr.model.Repository;
import com.scr.model.SchedulerJobsTracking;
import com.scr.repository.DivisionHistoryRepository;
import com.scr.repository.SchedulerTrackingRepository;

/**
 * @author vt1056
 *
 */
@Service
public class SchedulerTrackingService {

	@Autowired
	private SchedulerTrackingRepository schedulerTrackingRepository;
	
	@Autowired
	private DivisionHistoryRepository divisionHistoryRepository;
	
	public List<JobsHistory> findByOperationIdOrderByProcessedDateDesc(Integer operationId) {	
		return schedulerTrackingRepository.findByOperationIdOrderByProcessedDate(operationId);
	}

	public List<DivisionsHistory> findDivisionsHistoryByJobsHistoryId(Integer jobsHistoryId) {		
		return divisionHistoryRepository.findByJobsHistoryId(jobsHistoryId);
	}

	
	
}
