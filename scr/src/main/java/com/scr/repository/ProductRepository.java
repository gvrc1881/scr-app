package com.scr.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


import com.scr.model.ProductCategoryMember;


public interface ProductRepository extends JpaRepository<ProductCategoryMember, Long> {
	List<ProductCategoryMember> findAll();

}
