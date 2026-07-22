package com.example.GymTracker.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.GymTracker.dto.WorkoutRequest;
import com.example.GymTracker.dto.WorkoutResponse;
import com.example.GymTracker.model.Workout;
import com.example.GymTracker.repository.WorkoutRepository;

@Service
public class WorkoutService {

    private final WorkoutRepository repository;

    public WorkoutService(WorkoutRepository repository) {
        this.repository = repository;
    }

    public List<Workout> getAll() {
        return repository.findAll();
    }

    public List<Workout> findByUserId(UUID userId) {
        return repository.findByUserId(userId);
    }

    public WorkoutResponse createWorkout(
        WorkoutRequest request,
        UUID userId
) {


    Workout workout = new Workout();

    workout.setExercise(request.getExercise());
    workout.setSets(request.getSets());
    workout.setReps(request.getReps());
    workout.setWeight(request.getWeight());
    workout.setUserId(userId);


    Workout saved = repository.save(workout);


    return new WorkoutResponse(
            saved.getId(),
            saved.getExercise(),
            saved.getSets(),
            saved.getReps(),
            saved.getWeight()
    );
    }
    
    public void delete(Long id, UUID userId) {

            Workout workout = repository
                    .findByIdAndUserId(id, userId)
                    .orElseThrow(() ->
                        new RuntimeException("Workout not found.")
                    );

            repository.delete(workout);
    }
}
