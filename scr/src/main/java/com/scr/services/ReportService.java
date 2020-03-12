package com.scr.services;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.scr.jobs.ReportResource;
import com.scr.message.request.ReportRequest;
import com.scr.model.ElementarySection;
import com.scr.model.Facility;
import com.scr.model.Failure;
import com.scr.model.PbSwitchControl;
import com.scr.model.PowerBlock;
import com.scr.model.ProductCategoryMember;
import com.scr.model.ReportParameter;
import com.scr.model.ReportRepository;
import com.scr.model.Schedule;
import com.scr.repository.ReportParametersRepository;
import com.scr.repository.ReportRepositoryRepository;
import com.scr.repository.ScheduleRepository;
import com.scr.repository.ElementarySectionsRepository;
import com.scr.repository.FacilityRepository;
import com.scr.repository.FailuresRepository;
import com.scr.repository.PBSwitchControlRepository;
import com.scr.repository.PowerBlockRepository;
import com.scr.repository.ProductRepository;


@Service
public class ReportService {
	
	static Logger log = LogManager.getLogger(ReportService.class);
	
	@Autowired
	private ReportResource reportResource;
	@Autowired
    private ReportParametersRepository reportParametersRepository;
	@Autowired
	private FacilityRepository facilityRepository;
	@Autowired
	private FailuresRepository failuresRepository;
	@Autowired
	private PowerBlockRepository powerBlockRepository;
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private ScheduleRepository scheduleRepository;
	@Autowired
	private PBSwitchControlRepository pbSwitchControlRepository;
	@Autowired
	private ElementarySectionsRepository elementarySectionsRepository;
	
	/*public ReportRequest runReport(ReportRequest reportData) {
		reportData= reportResource.runReport(reportData);
		return reportData;
	}*/
	@Autowired
	private ReportRepositoryRepository reportRepositoryRepository;

	public ArrayList<String> towerCarAssetTypes(ArrayList<String> reportName){
		reportName=reportResource.towerCarAssetTypes(reportName);
		return reportName ;
	}
	
	public List<ReportRepository> findAllDailyReports(String reportType) {	
		return reportRepositoryRepository.findByReportCategory(reportType);
	}
	
	public List<ReportParameter> findall() {	
		return reportParametersRepository.findAll();
	}
	public List<Facility> findAll() {	
	   return facilityRepository.findAll();
	}
	public List<Failure> findAllFailures(){
		return failuresRepository.findAll();
	}
	public List<PowerBlock> findAllPowerBlocks(){
		return powerBlockRepository.findAll();
	}
	public List<ProductCategoryMember> findAllProducts(){
		return productRepository.findAll();
	}
	public List<Schedule> findAllScheduleCodes(){
		return scheduleRepository.findAll();
	}
	public List<PbSwitchControl> findAllPBSwitch() {	
		   return pbSwitchControlRepository.findAll();
		}
	public List<ElementarySection>findAllElementarySection() {	
		   return elementarySectionsRepository.findAll();
		}
	
	public ArrayList<String> oheAssetTypes(ArrayList<String> reportName){
		reportName=reportResource.oheAssetTypes(reportName);
		return reportName ;
	}
	public ArrayList<String> oheAssetId(ArrayList<String> reportName){
		reportName=reportResource.oheAssetId(reportName);
		return reportName ;
	}
	public ArrayList<String> oheScheduleDate(ArrayList<String> reportName){
		reportName=reportResource.oheScheduleDate(reportName);
		return reportName ;
	}
	
	
	public ReportRequest submitForm(ReportRequest report) {
		report= reportResource.submitForm(report);
		return report;
	}
}
