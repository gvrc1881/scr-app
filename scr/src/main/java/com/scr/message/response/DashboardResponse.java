/**
 * 
 */
package com.scr.message.response;

import java.util.List;

import lombok.Data;

/**
 * @author vt1056
 *
 */
public  class DashboardResponse {	
	
	
	private List<DashboardDetailsResponse> lastOneWeekDetails;
	private List<DashboardDetailsResponse> lastProcessedDetails;
	private List<DashboardDetailsResponse> assetTypeList;
	private List<DashboardDetailsResponse> schDoneList;
	
	public List<DashboardDetailsResponse> getLastOneWeekDetails() {
		return lastOneWeekDetails;
	}
	public void setLastOneWeekDetails(List<DashboardDetailsResponse> lastOneWeekDetails) {
		this.lastOneWeekDetails = lastOneWeekDetails;
	}
	public List<DashboardDetailsResponse> getLastProcessedDetails() {
		return lastProcessedDetails;
	}
	public void setLastProcessedDetails(List<DashboardDetailsResponse> lastProcessedDetails) {
		this.lastProcessedDetails = lastProcessedDetails;
	}
	public List<DashboardDetailsResponse> getAssetTypeList() {
		return assetTypeList;
	}
	public void setAssetTypeList(List<DashboardDetailsResponse> assetTypeList) {
		this.assetTypeList = assetTypeList;
	}
	public List<DashboardDetailsResponse> getSchDoneList() {
		return schDoneList;
	}
	public void setSchDoneList(List<DashboardDetailsResponse> schDoneList) {
		this.schDoneList = schDoneList;
	}
	
	
}
