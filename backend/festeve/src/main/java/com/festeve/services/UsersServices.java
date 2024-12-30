package com.festeve.services;

import java.sql.SQLDataException;
import java.sql.SQLException;
import java.util.List;

import com.festeve.exceptions.DataNotFoundException;
import com.festeve.model.AddCategory;



public interface UsersServices {
	
	public String addCategoryServices(AddCategory addCategory, String strRequestID) throws Exception, SQLDataException;

	public List<AddCategory> getaddCategory(String strRequestID) throws DataNotFoundException, SQLException, DataNotFoundException;

}
