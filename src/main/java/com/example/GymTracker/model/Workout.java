package com.example.GymTracker.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "workouts")
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String exercise;
    private int sets;
    private int reps;
    private double weight;
    private UUID userId;

    public Workout() {
        
    }


    public Workout(String exercise, int sets, int reps, double weight, UUID userId) {
        this.exercise = exercise;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.userId = userId;
    }


    public Long getId() {
        return id;
    }


    public String getExercise() {
        return exercise;
    }


    public void setExercise(String exercise) {
        this.exercise = exercise;
    }


    public int getSets() {
        return sets;
    }


    public void setSets(int sets) {
        this.sets = sets;
    }


    public int getReps() {
        return reps;
    }


    public void setReps(int reps) {
        this.reps = reps;
    }


    public double getWeight() {
        return weight;
    }


    public void setWeight(double weight) {
        this.weight = weight;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }
}