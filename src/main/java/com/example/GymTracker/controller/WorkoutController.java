package com.example.GymTracker.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.GymTracker.dto.WorkoutRequest;
import com.example.GymTracker.dto.WorkoutResponse;
import com.example.GymTracker.model.Workout;
import com.example.GymTracker.service.WorkoutService;

import jakarta.validation.Valid;

@CrossOrigin(
        origins = "https://gym-tracker-app-nine-bice.vercel.app",
        allowedHeaders = "*",
        methods = {
                org.springframework.web.bind.annotation.RequestMethod.GET,
                org.springframework.web.bind.annotation.RequestMethod.POST,
                org.springframework.web.bind.annotation.RequestMethod.DELETE,
                org.springframework.web.bind.annotation.RequestMethod.OPTIONS
        }
)
@RestController
@RequestMapping("/workouts")
public class WorkoutController {

    private final WorkoutService service;

    public WorkoutController(WorkoutService service) {
        this.service = service;
    }

    @GetMapping
    public List<Workout> getAll(
            @AuthenticationPrincipal Jwt jwt
    ) {
        UUID userId = UUID.fromString(jwt.getSubject());
        return service.findByUserId(userId);
    }

    @PostMapping
    public WorkoutResponse createWorkout(
            @Valid @RequestBody WorkoutRequest request,
            @AuthenticationPrincipal Jwt jwt
    ) {
        UUID userId = UUID.fromString(jwt.getSubject());
        return service.createWorkout(request, userId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkout(
            @PathVariable Long id,
            Authentication authentication
    ) {
        UUID userId = UUID.fromString(authentication.getName());
        service.delete(id, userId);
        return ResponseEntity.noContent().build();
    }
}