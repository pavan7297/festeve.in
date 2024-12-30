package com.festeve.services.impl;

import java.sql.SQLDataException;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.festeve.exceptions.DataNotFoundException;
import com.festeve.model.AddCategory;
import com.festeve.services.UsersServices;

import lombok.extern.slf4j.Slf4j;


@Service("UserServices")
@Slf4j
public class UserServiceImpl implements UsersServices{@Override
	public String addCategoryServices(AddCategory addCategory, String strRequestID) throws Exception, SQLDataException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<AddCategory> getaddCategory(String strRequestID)
			throws DataNotFoundException, SQLException, DataNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	

}
