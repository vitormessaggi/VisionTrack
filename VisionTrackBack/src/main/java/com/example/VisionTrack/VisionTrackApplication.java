package com.example.VisionTrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class VisionTrackApplication {

	public static void main(String[] args) {
		SpringApplication.run(VisionTrackApplication.class, args);
	}

}
