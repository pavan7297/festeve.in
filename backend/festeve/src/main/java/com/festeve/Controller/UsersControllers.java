package com.festeve.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.festeve.constants.Response;
import com.festeve.model.AddCategory;
import com.festeve.services.UsersServices;
import com.festeve.wrappers.UsersWrappers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/public")
public class UsersControllers {
	
	
	@Autowired
	private HttpServletRequest request;

	@Autowired
	@Qualifier("UserServices")
	private UsersServices dataServices;
	
	
	
	@GetMapping("get-all-products")
	private String getAllProducts() {
		return "products list	";
	}
	

	@RequestMapping(value = "/addcategory", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	private Response AddCategory(@RequestBody AddCategory addCategory) throws Exception {

		String reqIdValue = "dataid1";
		request.setAttribute("reqid", reqIdValue);
		String strRequestID = (String) request.getAttribute("reqid");

		UsersWrappers wrapper = new UsersWrappers();
		log.info(strRequestID + "::::Data adding to AddCategory:::::::save with:::::"+addCategory.toString());

		String listOfData = dataServices.addCategoryServices(addCategory, strRequestID);
		wrapper.setAddCategory(listOfData);
		wrapper.setResponseCode(org.springframework.http.HttpStatus.OK.value());
		wrapper.setStatus(org.springframework.http.HttpStatus.OK.getReasonPhrase());
		return wrapper;
	}
	

	
	

}
