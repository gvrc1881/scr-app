/**
 * 
 */
package com.scr.message.request;

import java.security.Timestamp;
import java.time.LocalDate;

import com.scr.model.AssetsScheduleHistory;
import com.scr.model.ElementarySection;
import com.scr.model.Facility;
import com.scr.model.ObservationCategory;
import com.scr.model.ObservationsCheckList;
import com.scr.model.PbSwitchControl;

//import java.util.ArrayList;

/**
 * @author winfocus
 *
 */
public class ReportRequest {
	
	private String outputData;
	private String reportId;
	private String zone;
	private Facility facilityName;
   private Facility facilityId;
	private String reportHeader;
	private String division;
	private ObservationCategory department;
	private Facility facility;
	private LocalDate toDate;
	private String productId;
	private LocalDate fromDate;
	private LocalDate failureFromDate;
	private LocalDate failureToDate;
	private ObservationsCheckList observationCategory;
	private String assetType;
	private AssetsScheduleHistory scheduleCode;
	private String assetId;
	private String scheduleDate;
	private String year;
	private String pbSwitchType;
	private PbSwitchControl pbExtentCode;
	private ElementarySection elementarySectionCode;
	private String fromkm;
	private String tokm;
	public ObservationsCheckList getObservationCategory() {
		return observationCategory;
	}

	public void setObservationCategory(ObservationsCheckList observationCategory) {
		this.observationCategory = observationCategory;
	}

	public LocalDate getFailureFromDate() {
		return failureFromDate;
	}

	public void setFailureFromDate(LocalDate failureFromDate) {
		this.failureFromDate = failureFromDate;
	}

	public LocalDate getFailureToDate() {
		return failureToDate;
	}

	public void setFailureToDate(LocalDate failureToDate) {
		this.failureToDate = failureToDate;
	}

	public LocalDate getFromDate() {
		return fromDate;
	}

	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}

	public Facility getFacility() {
		return facility;
	}

	public void setFacility(Facility facility) {
		this.facility = facility;
	}

	

	public LocalDate getToDate() {
		return toDate;
	}

	public void setToDate(LocalDate toDate) {
		this.toDate = toDate;
	}

	private String permission;
	
	public String getOutputData() {
		return outputData;
	}

	public void setOutputData(String outputData) {
		this.outputData = outputData;
		
		
	}

	public String getReportId() {
		return reportId;
	}

	public void setReportName(String reportId) {
		this.reportId = reportId;
	}

	public String getZone() {
		return zone;
	}

	public void setZone(String zone) {
		this.zone = zone;
	}

	public String getReportHeader() {
		return reportHeader;
	}

	public void setReportHeader(String reportHeader) {
		this.reportHeader = reportHeader;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}
	
	public String getPermission() {
		return permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
	}

	
	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}
	public ObservationCategory getDepartment() {
		return department;
	}

	public void setDepartment(ObservationCategory department) {
		this.department = department;
	}

	public Facility getFacilityId() {
		return facilityId;
	}

	public void setFacilityId(Facility facilityId) {
		this.facilityId = facilityId;
	}

	public Facility getFacilityName() {
		return facilityName;
	}

	public void setFacilityName(Facility facilityName) {
		this.facilityName = facilityName;
	}

	public String getAssetType() {
		return assetType;
	}

	public void setAssetType(String assetType) {
		this.assetType = assetType;
	}

	public AssetsScheduleHistory getScheduleCode() {
		return scheduleCode;
	}

	public void setScheduleCode(AssetsScheduleHistory scheduleCode) {
		this.scheduleCode = scheduleCode;
	}

	public String getAssetId() {
		return assetId;
	}

	public void setAssetId(String assetId) {
		this.assetId = assetId;
	}

	public String getScheduleDate() {
		return scheduleDate;
	}

	public void setScheduleDate(String scheduleDate) {
		this.scheduleDate = scheduleDate;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getPbSwitchType() {
		return pbSwitchType;
	}

	public void setPbSwitchType(String pbSwitchType) {
		this.pbSwitchType = pbSwitchType;
	}

	public PbSwitchControl getPbExtentCode() {
		return pbExtentCode;
	}

	public void setPbExtentCode(PbSwitchControl pbExtentCode) {
		this.pbExtentCode = pbExtentCode;
	}

	public ElementarySection getElementarySectionCode() {
		return elementarySectionCode;
	}

	public void setElementarySectionCode(ElementarySection elementarySectionCode) {
		this.elementarySectionCode = elementarySectionCode;
	}

	public String getFromkm() {
		return fromkm;
	}

	public void setFromkm(String fromkm) {
		this.fromkm = fromkm;
	}

	public String getTokm() {
		return tokm;
	}

	public void setTokm(String tokm) {
		this.tokm = tokm;
	}

	
}
