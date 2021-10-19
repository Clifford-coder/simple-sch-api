import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { StudentExistMidWare } from '../common/middlewares/StudentExists.middleware';
import { StdController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [StdController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule implements NestModule {
  configure(customer: MiddlewareConsumer) {
    customer.apply(StudentExistMidWare).forRoutes(StdController);
  }
}
