package com.scr.controller;

import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.scr.message.request.ReportRequest;
import com.scr.model.ElementarySection;
import com.scr.model.Facility;
import com.scr.model.Failure;
import com.scr.model.PbSwitchControl;
import com.scr.model.PowerBlock;
import com.scr.model.ReportParameter;
import com.scr.model.ReportRepository;
import com.scr.model.Schedule;
import com.scr.services.ReportService;



/**
 * 
 * @author 
 *
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/scr/api")
public class ReportController {

	static Logger log = LogManager.getLogger(ReportController.class);
	
	@Autowired
	private ReportService reportService;
	
	
	@RequestMapping(value = "/dailyProgressReports/{reportType}",method = RequestMethod.GET  , headers="accept=application/json" )
	public ResponseEntity<List<ReportRepository>> findAllDailyReports(@PathVariable("reportType") String reportType){
		List<ReportRepository> dailyReportsGroup= reportService.findAllDailyReports(reportType);
			return new ResponseEntity<List<ReportRepository>>(dailyReportsGroup, HttpStatus.OK);		
	}
	
	@RequestMapping(value = "/reportParameterNames", method = RequestMethod.GET ,headers = "accept=application/json")	
	public ResponseEntity<List<ReportParameter>> findall(){
		List<ReportParameter> reportPNames= reportService.findall();
			return new ResponseEntity<List<ReportParameter>>(reportPNames, HttpStatus.OK);	
		
	}
	@RequestMapping(value = "/facilityNames", method = RequestMethod.GET ,headers = "accept=application/json")	
	public ResponseEntity<List<Facility>> findAll(){
		List<Facility> facilityNames= reportService.findAll();
		return new ResponseEntity<List<Facility>>(facilityNames, HttpStatus.OK);	
		
	}
	@RequestMapping(value = "/failuresTable", method = RequestMethod.GET ,headers = "accept=application/json")	
	public ResponseEntity<List<Failure>> findAllFailures(){
		List<Failure> failuresTable= reportService.findAllFailures();
		return new ResponseEntity<List<Failure>>(failuresTable, HttpStatus.OK);	
		
	}
	@RequestMapping(value = "/powerBlocks", method = RequestMethod.GET ,headers = "accept=application/json")	
	public ResponseEntity<List<PowerBlock>> findAllPowerBlocks(){
		List<PowerBlock> powerBlocks= reportService.findAllPowerBlocks();
		return new ResponseEntity<List<PowerBlock>>(powerBlocks, HttpStatus.OK);	
		
	}
	@RequestMapping(value="/scheduleCode",method=RequestMethod.GET,headers = "accept=application/json")
	public ResponseEntity<List<Schedule>> findAllScheduleCodes(){
		List<Schedule> scheduleCode=reportService.findAllScheduleCodes();
		return new ResponseEntity<List<Schedule>>(scheduleCode,HttpStatus.OK);
	}
	
	@RequestMapping(value="/towerCarAssetTypes",method=RequestMethod.GET ,headers="accept=application/json")
	public @Valid ArrayList<String> towerCarReport(ArrayList<String> reportName){
		reportName=reportService.towerCarAssetTypes(reportName );
		return reportName ;
	}
	@RequestMapping(value = "/pbSwitchControl", method = RequestMethod.GET ,headers = "accept=application/json")	
	public ResponseEntity<List<PbSwitchControl>> findAllPBSwitch(){
		List<PbSwitchControl> pbSwitchControl= reportService.findAllPBSwitch();
		return new ResponseEntity<List<PbSwitchControl>>(pbSwitchControl,HttpStatus.OK);	
		
	}
	@RequestMapping(value = "/elementarySections", method = RequestMethod.GET ,headers = "accept=application/json")	
	public ResponseEntity<List<ElementarySection>> findAllElementarySection(){
		List<ElementarySection> elementarySections= reportService.findAllElementarySection();
		return new ResponseEntity<List<ElementarySection>>(elementarySections,HttpStatus.OK);	
		
	}
	@RequestMapping(value="/oheAssetTypes",method=RequestMethod.GET ,headers="accept=application/json")
	public @Valid ArrayList<String> oheAssetTypes(ArrayList<String> reportName){
		reportName=reportService.oheAssetTypes(reportName );
		return reportName ;
	}
	@RequestMapping(value="/oheAssetId",method=RequestMethod.GET ,headers="accept=application/json")
	public @Valid ArrayList<String> oheAssetId(ArrayList<String> reportName){
		reportName=reportService.oheAssetId(reportName );
		return reportName ;
	}
	@RequestMapping(value="/oheScheduleDate",method=RequestMethod.GET ,headers="accept=application/json")
	public @Valid ArrayList<String> oheScheduleDate(ArrayList<String> reportName){
		reportName=reportService.oheScheduleDate(reportName );
		return reportName ;
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/submitForm", method = RequestMethod.POST , headers = "Accept=application/json")
	public ReportRequest submitForm(@Valid @RequestBody ReportRequest report ) {
		log.info("the Data is"+report);
		log.info("the Data is"+report.getReportId());
	    log.info("Enter the request.....................sri");
	    report = reportService.submitForm(report);
		//return null;
		//log.info("data    :::::::"+report.getOutputData());
		//return new ArrayList<String>(reportRequest);
		return report;
		
	}

}
	

	
	
	
	
