import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { TeacherResponseDTO } from './dtos/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getAllTeachers(): TeacherResponseDTO[] {
    return this.teacherService.getAllTeachers();
  }

  @Get('/:teacherID')
  getTeacherByID(
    @Param('teacherID', new ParseUUIDPipe()) teacherID: string,
  ): TeacherResponseDTO {
    return this.teacherService.getTeacherByID(teacherID);
  }
}
