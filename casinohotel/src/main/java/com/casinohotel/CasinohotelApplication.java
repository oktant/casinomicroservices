package com.casinohotel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CasinohotelApplication {

	public static void main(String[] args) {

		SpringApplication.run(CasinohotelApplication.class, args);
	}
}
