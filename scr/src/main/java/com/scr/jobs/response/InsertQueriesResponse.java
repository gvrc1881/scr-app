/**
 * 
 */
package com.scr.jobs.response;

import java.util.LinkedHashMap;

import org.springframework.stereotype.Component;

import com.scr.message.response.ResponseStatus;

import lombok.Data;

/**
 * @author vt1056
 *
 */
@Component
public @Data class InsertQueriesResponse extends ResponseStatus{
	private LinkedHashMap<String, String> insertQueries;

	public LinkedHashMap<String, String> getInsertQueries() {
		return insertQueries;
	}

	public void setInsertQueries(LinkedHashMap<String, String> insertQueries) {
		this.insertQueries = insertQueries;
	}
	
	
}
