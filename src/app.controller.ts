import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './database/models/task.entity';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Task[]> | void | string {
    return this.appService.getAllTask();
  }
}
