# Student_Registry_Web_Dev

## Introduction
The Student Registry System is a full-stack web application designed to demonstrate how an academic institutions can manage student records. It leverages modern web development frameworks and relational database technologies to provide a user-friendly solution.

## Features

- **MySQL Database:**  
  - Database: `student_db`
  - Table: `student`
- **NestJS Backend (port 3000):**
  - `POST /student` – Add a new student
  - `GET /student` – Retrieve all students
  - `PUT /student` – Update student information
  - `DELETE /student` – Delete a student
- **Next.js Frontend:(used port 3001)**
  - `/post-students` – Form to add a student
  - `/get-students` – View all students
  - `/update-students` – Update student information
  - `/delete-students` – Delete a student by ID

## Technologies Used

- Node.js, 22.16.0
- NestJS, 11.0.7
- MySQL, Ver 15.1 Distrib 10.1.38-MariaDB
- React
- TypeORM
- Next.js

## HOW TO SET IT ALL UP

### Database Setup

1. **Install XAMPP**, open its control panel then start the Php and MySQL server.
2. **Create the database `student_db` and table `student`:**
   ```sql
   CREATE DATABASE student_db;
   USE student_db;
   CREATE TABLE student (
     id INT AUTO_INCREMENT PRIMARY KEY,
     studentId VARCHAR(50) UNIQUE NOT NULL,
     name VARCHAR(255) NOT NULL,
     program VARCHAR(255) NOT NULL,
     city VARCHAR(255) NOT NULL,
     gpa FLOAT NOT NULL,
     gender VARCHAR(20) NOT NULL,
     contactEmail VARCHAR(255) NOT NULL
   );
   ```
### Backend Setup

1. **Clone the repository and install dependencies:**
   ```bash
   cd student-registry-backend
   npm install
   ```
2. **Configure MySQL credentials in `app.module.ts` or `.env` as needed.**
3. **Start the server:**
   ```bash
   npm run start
   ```
   The backend will run on  [http://localhost:3000](http://localhost:3000)---DEFAULT

### Frontend Setup

1. **Navigate to the frontend and install dependencies:**
   ```bash
   cd student-registry-frontend
   npm install
   ```
2. **Start the frontend:**
   ```bash
   npm run build
   set PORT=3001 && npm start
   ```
   I ran the frontend on [http://localhost:3001](http://localhost:3001) OR you can use any free port.

## If you want to check it out, visit

- `/post-students` to add a new student.
- `/get-students` to view all students.
- `/update-students` to update student information.
- `/delete-students` to delete a student.

## Conclusion

This process created own student registry, to design how to manage student records.

&copy;Kwawachi

Follow me for collaborations.


