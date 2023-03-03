import express from "express";
import connectDB from "./admindb.js";

import students from "./students.js";
import teachers from "./teachers.js";
import library from "./library.js";
import timetable from "./timetable.js";
import exams from "./exams.js";
import gallery from "./gallery.js";
import event from "./event.js";
import bustrack from "./bustrack.js";
import trackbus from "./trackbus.js";
connectDB();
const app=express();
app.use(express.json());
app.use('/students',students);
app.use('/teachers',teachers);
app.use('/library',library);
app.use('/timetable',timetable);
app.use('/exams',exams);
app.use('/gallery',gallery);
app.use('/event',event);
app.use('/bustrack',bustrack);
app.use('/trackbus',trackbus);
const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
 
});
