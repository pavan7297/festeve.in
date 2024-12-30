package com.festeve.wrappers;

import java.io.Serializable;

import com.festeve.constants.Response;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UsersWrappers extends Response implements Serializable{/**
	 * 
	 */
	private static final long serialVersionUID = 6226090352509712293L;
	
	
	String addCategory;

}
