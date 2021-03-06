/**
 * 
 */
package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scr.model.ReportRepository;

/**
 * @author opentaps
 *
 */
@Repository
public interface ReportRepositoryRepository extends JpaRepository<ReportRepository, Long> {

	List<ReportRepository> findByReportCategory(String reportCategory);

}
