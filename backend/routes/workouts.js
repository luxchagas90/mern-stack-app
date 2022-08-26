import express from 'express';
import { createWorkout, getWorkouts, getSingleWorkout } from '../controllers/workoutController.js';

export const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getSingleWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: "DELETE a workout" });
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: "UPDATE a workout" });
})
