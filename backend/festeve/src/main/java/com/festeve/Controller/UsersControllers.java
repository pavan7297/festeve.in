package com.festeve.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class UsersControllers {
	
	@GetMapping("get-all-products")
	private String getAllProducts() {
		return "products list";
	}

}
