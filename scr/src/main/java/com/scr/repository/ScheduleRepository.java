package com.scr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.scr.model.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
	List<Schedule> findAll();

}
