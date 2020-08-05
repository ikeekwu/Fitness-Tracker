const router = require("express").Router();
const Workout = require("../models/workout");

// Route to post workouts to database 
router.post("/api/workouts", ({body}, res) => {
    console.log(body)
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Route for grabbing workout range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.send(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Route for editing specific workouts.
router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.update({"_id":params.id}, {$push: {exercises: body}})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

// Route that grabs the preivously stored workouts.
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;