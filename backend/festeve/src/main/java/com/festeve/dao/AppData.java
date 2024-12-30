package com.festeve.dao;

import java.util.List;

import com.festeve.exceptions.DataNotFoundException;

public interface AppData {
	public List<?> getData(String strQuery);

	public String saveData(String strQuery);

	public String getSingleData(String strQuery) throws DataNotFoundException;

}


