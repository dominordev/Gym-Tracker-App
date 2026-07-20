package com.example.GymTracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.GymTracker.model.Workout;
import com.example.GymTracker.repository.WorkoutRepository;


@Service
public class WorkoutService {


    private final WorkoutRepository repository;


    public WorkoutService(WorkoutRepository repository){
        this.repository = repository;
    }



    public List<Workout> getAll(){

        return repository.findAll();

    }



    public Workout save(Workout workout){

        return repository.save(workout);

    }



    public void delete(Long id){

        repository.deleteById(id);

    }

}