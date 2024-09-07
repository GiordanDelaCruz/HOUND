import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import pg from "pg";

const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client({
    user: "postgres", 
    host: "localhost",
    database: "workout-tracker-db",
    password: "!CryoGoat122",
    port: 5432
});
db.connect();

/***********************************************************/
/******              Middlewares                      ******/
/***********************************************************/
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

/***********************************************************/
/******             Route Handling                    ******/
/***********************************************************/
// [ GET: Retrieve all the workouts
app.get("/workouts", async(req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM workout"
        );
        const data = result.rows;
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});

// [ GET: Search for a workout based on the day
app.get("/search/workout", async(req, res) => {
    try {
        const day = req.body.day;
        console.log(day, workoutID)
        const result = await db.query(
            "SELECT * FROM workout WHERE day = $2",
            [workoutID, day]
        );
        const data = result.rows;
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});
// [ GET: Search for an exercise based on the name or tag
app.get("/search/exercise", async(req, res) => {
    try {
        const exerciseName = req.body.name;
        const tag = req.body.tag;
      
        const result = await db.query(
            "SELECT * FROM exercise WHERE name = $1 OR tag = $2",
            [exerciseName, tag]
        );
        const data = result.rows;
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});

// [ POST: Add a workout
app.post("/add/workout", async(req, res) => {
    try {
        const day = req.body.day;
        const date = req.body.date;

        const result = await db.query(
            "INSERT INTO workout (day, date) VALUES ($1, $2)",
            [day, date]
        );
        const data = result.rows;
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});

// [ POST: Add an exercise
app.post("/add/exercise", async(req, res) => {
    try {
        const exercise_name = req.body.exercise_name;
        const focus = req.body.focus;
        const tag = req.body.tag;
        const body_weight = req.body.body_weight;
        const weight = req.body.weight;
        const reps = req.body.reps;
        const sets = req.body.sets;
        const additional_notes = (req.body.additional_notes !== null) ? req.body.additional_notes : 'N/A';
        
        const result = await db.query(
            "INSERT INTO exercise (name, focus, tag, body_weight, weight, reps, sets, additional_notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            [exercise_name, focus, tag, body_weight, weight, reps, sets, additional_notes]
        );
        const data = result.rows;
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});

// TODO: Need to add this to the add workout routes
// [ POST: Add Account_Workout relationship data
app.post("/temp/accountWorkout", async(req, res) => {
    try {
        const accountID = req.body.account_id;
        const workoutID = req.body.workout_id;
        
        const result = await db.query(
            "INSERT INTO account_workout (account_id, workout_id) VALUES($1, $2)",
            [accountID, workoutID]
        );
        const data = result.rows;
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});

// TODO: Need to add this to the add workout routes
// [ POST: Add Workout_Exercise relationship data
app.post("/temp/workoutExercise", async(req, res) => {
    try {
        const workoutID = req.body.workout_id;
        const exerciseID = req.body.exercise_id;
        
        const result = await db.query(
            "INSERT INTO workout_exercise (workout_id, exercise_id) VALUES($1, $2)",
            [workoutID, exerciseID]
        );
        const data = result.rows;
        res.send(data);
    } catch (error) {
        console.log(error)
    }
});

// [ PUT: Edit a previous workout

// [ DELETE: Delete a workout
app.delete("/delete/workout", (req, res) => {
    try {
      const workoutID = req.body.workout_id;
  
      db.query(
        "DELETE FROM workout WHERE id = $1", 
        [workoutID]
      );
      res.send(`deleted record with id of ${workoutID}`);
    } catch (error) {
      console.log(error)
    }
  });

/***********************************************************/
/******              Start Server                     ******/
/***********************************************************/
app.listen( port, () => {
    console.log(`Server started on port ${3000}`);
});