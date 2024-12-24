package com.festeve.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
	
	
	@SuppressWarnings("removal")
	@Bean
	public SecurityFilterChain fiterChain (HttpSecurity http) throws Exception{
		
		http
		.csrf()
		.disable()
        .authorizeHttpRequests()
        .requestMatchers(AppConst.PUBLIC_URLS).permitAll() // Allow all public URLs
        .requestMatchers(AppConst.USERS_URLS).hasAnyAuthority("USER", "ADMIN")
        .requestMatchers(AppConst.ADMIN_URLS).hasAnyAuthority("SUPADMIN")
        .anyRequest().authenticated() // Require authentication for other requests
        .and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);


		DefaultSecurityFilterChain defaultSecurityFilterChain =http.build();
		
		return defaultSecurityFilterChain;
	}

}
