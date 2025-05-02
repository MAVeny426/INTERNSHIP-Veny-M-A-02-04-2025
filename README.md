# INTERNSHIP-Veny-M-A-02-04-2025

## Postman Published Link

https://documenter.getpostman.com/view/39076226/2sB2j4gBqb

## Project Description

The **Internship-Veny** project is a Classroom Management System that enables managing classes, students, and related data. The system supports creating, updating, deleting classes, and enrolling students. It also provides APIs to retrieve student data based on class standards and divisions.

This project is built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

## Features

- **Create Class**: Create classes with a specific standard and division.
- **Create Student**: Enroll students in a specific class by associating them with a class `classId`.
- **Update Class**: Update class information (standard and division).
- **Delete Class**: Remove a class and its associated students from the system.
- **Fetch Students by Class**: Retrieve all students enrolled in a specific class.
- **Fetch All Students by Standard**: Retrieve students for a particular standard across all divisions.

## Installation

### Prerequisites
### Step 1: Clone the repository

```bash
git clone https://github.com/MAVeny426/INTERNSHIP-Veny-M-A-02-04-2025.git
cd INTERNSHIP-Veny-M-A-02-04-2025

## API Routes

### 1. **Create a Class**

**POST** `/api/class/createclass`

- **Description**: Creates a new class with the specified standard and division.

- **Request Body**:

```json
{
  "standard": "10",
  "division": "A"
}

- **Responses**:

```
{
  "message": "Class created"
}

### 2. **Update Student's Class**

**PUT** `/api/class/updateclass/:studentId`

- **Description**:  Updates a student's class based on the class standard and division. This will associate the student with a new class.
- 
- **URL Parameter:**: studentId - The ID of the student whose class needs to be updated

- **Responses**:

```
{
  "message": "Class deleted"
}

### 3. **Delete a Class**

**POST** `/api/class/:id`

- **Description**: Deletes a class by its ID.

- **URL Parameter:**:id - The ID of the class to delete.

- **Request Body**:

```
{
  "standard": "10",
  "division": "A"
}

- **Responses**:

```
{
  {
  "message": "Student updated successfully",
  "student": { 
    "_id": "studentId",
    "name": "John Doe",
    "rollNo": "12345",
    "mobileNo": "9876543210",
    "classId": "classId"
  }
}



