import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  CreateStudentDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dtos/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StdController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudents(): StudentResponseDTO[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentID')
  getStudentByID(
    @Param('studentID', new ParseUUIDPipe()) studentID: string,
  ): StudentResponseDTO {
    return this.studentService.getStudentByID(studentID);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentResponseDTO {
    return this.studentService.createStudent(body);
  }

  @Patch('/:studentID')
  updateStudent(
    @Param('studentID', new ParseUUIDPipe()) studentID: string,
    @Body() body: UpdateStudentDTO,
  ): StudentResponseDTO {
    return this.studentService.updateStudent(studentID, body);
  }
}
