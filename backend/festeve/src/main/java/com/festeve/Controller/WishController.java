package com.festeve.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class WishController {
	
	

	@GetMapping("/hello")
	public String Wish() {
		return "<h1>Hello Welcomes you to festeve Spring api</h1>";
	}

}
