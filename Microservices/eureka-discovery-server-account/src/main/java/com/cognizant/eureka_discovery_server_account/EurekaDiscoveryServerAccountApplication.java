package com.cognizant.eureka_discovery_server_account;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EurekaDiscoveryServerAccountApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaDiscoveryServerAccountApplication.class, args);
	}

}
