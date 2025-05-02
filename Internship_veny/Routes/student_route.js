import express, { Router } from 'express';
import { Student } from '../Models/StudentClass.js';  // Ensure the path is correct
import dotenv from 'dotenv';

dotenv.config();

const studentRoute = Router();

studentRoute.post('/createstudent', async (req, res) => {
    const { name, rollNo, mobileNo, classId } = req.body;
    try {
      const newStudent = new Student({ name, rollNo, mobileNo, classId });
      await newStudent.save();
      res.status(201).send('Student created');
    } catch (err) {
      res.status(500).send(err.message);
    }
});

studentRoute.delete('/:id', async (req, res) => {
    try {
      await Student.findByIdAndDelete(req.params.id);
      res.send('Student deleted');
    } catch (err) {
      res.status(500).send(err.message);
    }
});

export { studentRoute };
