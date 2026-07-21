package com.example.GymTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GymTracker.model.Workout;
public interface WorkoutRepository extends JpaRepository<Workout, Long> {

}