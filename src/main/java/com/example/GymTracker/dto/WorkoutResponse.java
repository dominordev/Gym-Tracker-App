package com.example.GymTracker.dto;

public class WorkoutResponse {

    private Long id;
    private String exercise;
    private Integer sets;
    private Integer reps;
    private Double weight;

    public WorkoutResponse() {}

    public WorkoutResponse(Long id, String exercise, Integer sets, Integer reps, Double weight) {
        this.id = id;
        this.exercise = exercise;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
    }

    public Long getId() {
        return id;
    }

    public String getExercise() {
        return exercise;
    }

    public Integer getSets() {
        return sets;
    }

    public Integer getReps() {
        return reps;
    }

    public Double getWeight() {
        return weight;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public void setSets(Integer sets) {
        this.sets = sets;
    }

    public void setReps(Integer reps) {
        this.reps = reps;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }
}