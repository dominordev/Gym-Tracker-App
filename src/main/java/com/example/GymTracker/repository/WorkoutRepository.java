package com.example.GymTracker.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GymTracker.model.Workout;
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    List<Workout> findByUserId(UUID userId);
}