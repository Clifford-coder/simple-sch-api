import { Injectable } from '@nestjs/common';
import { teachers } from '../db';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  getAllTeachers() {
    return this.teachers;
  }

  getTeacherByID(teacherID: string) {
    return this.teachers.find((teacher) => teacher.id === teacherID);
  }
}
