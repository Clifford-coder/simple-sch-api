import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { students } from '../../db';

@Injectable()
export class StudentExistMidWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello Middleware');
    const studentID = req.params.studentID;
    const studentExists = students.some((student) => student.id === studentID);
    if (!studentExists) {
      throw new HttpException(
        `Student with id : ${studentID} was not found!`,
        404,
      );
    }
    next();
  }
}
