package com.example.GymTracker.controller;

import java.util.List;

import jakarta.validation.Valid;
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
@RestController
@RequestMapping("/workouts")
public class WorkoutController {

    private final WorkoutService service;

    public WorkoutController(WorkoutService service) {
        this.service = service;
    }

    @GetMapping
    public List<Workout> getAll() {
        return service.getAll();
    }

    @PostMapping
    public WorkoutResponse createWorkout(
            @Valid @RequestBody WorkoutRequest request) {

        return service.createWorkout(request);
    }

    @DeleteMapping("/{id}")
    public void deleteWorkout(@PathVariable Long id) {
        service.delete(id);
    }
}