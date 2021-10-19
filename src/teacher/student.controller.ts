import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import { StudentResponseDTO } from '../student/dtos/student.dto';

@Controller('teachers/:teacherID/Students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudentForTeacher(
    @Param('teacherID', new ParseUUIDPipe()) teacherID: string,
  ): StudentResponseDTO[] {
    return this.studentService.getStudentsByTeacherID(teacherID);
  }

  @Put('/:studentID')
  update(
    @Param('teacherID', new ParseUUIDPipe()) teacherID: string,
    @Param('studentID', new ParseUUIDPipe()) studentID: string,
  ): StudentResponseDTO {
    return this.studentService.updateStudentTeacher(teacherID, studentID);
  }
}
