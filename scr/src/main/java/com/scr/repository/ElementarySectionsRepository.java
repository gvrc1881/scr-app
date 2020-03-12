package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scr.model.ElementarySection;


public interface ElementarySectionsRepository extends JpaRepository<ElementarySection, Long>{
	List<ElementarySection> findByElementarySectionCode(String elementary_section_code);
}
