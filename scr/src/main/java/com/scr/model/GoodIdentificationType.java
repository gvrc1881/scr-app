package com.scr.model;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the good_identification_type database table.
 * 
 */
@Entity
// @Table(name="good_identification_type")

@Table(name = "good_identification_type" , uniqueConstraints={@UniqueConstraint(name = "old_pk_good_identification_type_uniq", columnNames ={"good_identification_type_id"})})

//
@NamedQuery(name="GoodIdentificationType.findAll", query="SELECT g FROM GoodIdentificationType g")
public class GoodIdentificationType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Long id;

	@Column(name="created_stamp")
	private Timestamp createdStamp;

	@Column(name="created_tx_stamp")
	private Timestamp createdTxStamp;

	private String description;

	@Column(name="good_identification_type_id")
	private String goodIdentificationTypeId;

	@Column(name="has_table")
	private String hasTable;

	@Column(name="last_updated_stamp")
	private Timestamp lastUpdatedStamp;

	@Column(name="last_updated_tx_stamp")
	private Timestamp lastUpdatedTxStamp;

	@Column(name="parent_type_id")
	private String parentTypeId;

	public GoodIdentificationType() {
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Timestamp getCreatedStamp() {
		return this.createdStamp;
	}

	public void setCreatedStamp(Timestamp createdStamp) {
		this.createdStamp = createdStamp;
	}

	public Timestamp getCreatedTxStamp() {
		return this.createdTxStamp;
	}

	public void setCreatedTxStamp(Timestamp createdTxStamp) {
		this.createdTxStamp = createdTxStamp;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getGoodIdentificationTypeId() {
		return this.goodIdentificationTypeId;
	}

	public void setGoodIdentificationTypeId(String goodIdentificationTypeId) {
		this.goodIdentificationTypeId = goodIdentificationTypeId;
	}

	public String getHasTable() {
		return this.hasTable;
	}

	public void setHasTable(String hasTable) {
		this.hasTable = hasTable;
	}

	public Timestamp getLastUpdatedStamp() {
		return this.lastUpdatedStamp;
	}

	public void setLastUpdatedStamp(Timestamp lastUpdatedStamp) {
		this.lastUpdatedStamp = lastUpdatedStamp;
	}

	public Timestamp getLastUpdatedTxStamp() {
		return this.lastUpdatedTxStamp;
	}

	public void setLastUpdatedTxStamp(Timestamp lastUpdatedTxStamp) {
		this.lastUpdatedTxStamp = lastUpdatedTxStamp;
	}

	public String getParentTypeId() {
		return this.parentTypeId;
	}

	public void setParentTypeId(String parentTypeId) {
		this.parentTypeId = parentTypeId;
	}

}