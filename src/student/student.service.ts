import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { students } from '../db';
import {
  CreateStudentDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dtos/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudents() {
    return this.students;
  }

  getStudentByID(studentID) {
    return this.students.find((student) => student.id === studentID);
  }

  createStudent(payload: CreateStudentDTO) {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(studentID: string, payload: UpdateStudentDTO) {
    let updatedStudent: StudentResponseDTO;

    const updateStudentList = this.students.map((student) => {
      if (student.id === studentID) {
        return (updatedStudent = {
          id: studentID,
          ...payload,
        });
      } else return student;
    });

    this.students = updateStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherID(teacherID: string) {
    return this.students.filter((student) => student.teacher === teacherID);
  }

  updateStudentTeacher(teacherID: string, studentID: string) {
    let updatedStudent: StudentResponseDTO;

    const updateStudentList = this.students.map((student) => {
      if (student.id === studentID) {
        return (updatedStudent = {
          ...student,
          teacher: teacherID,
        });
      } else return student;
    });

    this.students = updateStudentList;

    return updatedStudent;
  }
}
