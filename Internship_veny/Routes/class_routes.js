import express, { Router } from 'express';
import  { Class } from '../Models/Classmodels.js';
import { Student } from '../Models/StudentClass.js';
import dotenv from 'dotenv';

dotenv.config();

const classRoute = Router();

classRoute.post('/createclass', async (req, res) => {
    try {
      const { standard,division } = req.body;
      const newClass = new Class({ standard, division });
      await newClass.save();
      res.status(201).send('Class created');
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

classRoute.delete('/:id', async (req, res) => {
    try {
      await Class.findByIdAndDelete(req.params.id);
      res.send('Class deleted');
    } catch (err) {
      res.status(500).send(err.message);
    }
});

classRoute.put('/updateclass/:studentId', async (req, res) => {
    const { standard, division } = req.body;
    try {
      const classDoc = await Class.findOne({ standard, division });
      if (!classDoc) return res.status(404).send('Class not found');
  
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.studentId,
        { classId: classDoc._id },
        { new: true }
      );
      res.json(updatedStudent);
    } catch (err) {
      res.status(500).send(err.message);
    }
});

classRoute.get('/all-class-div-std', async (req, res) => {
    const { standard, division } = req.query;
    try {
      const classDoc = await Class.findOne({ standard, division });
      if (!classDoc) return res.status(404).send('Class not found');
  
      const students = await Student.find({ classId: classDoc._id });
      res.json(students);
    } catch (err) {
      res.status(500).send(err.message);
    }
});

classRoute.get('/all-divisions', async (req, res) => {
    const { standard } = req.query;
    try {
      const classes = await Class.find({ standard });
      const classIds = classes.map(cls => cls._id);
  
      const students = await Student.find({ classId: { $in: classIds } });
      res.json(students);
    } catch (err) {
      res.status(500).send(err.message);
    }
});

export { classRoute };