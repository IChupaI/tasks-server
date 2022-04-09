import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './database/models/task.entity';
import { CreateTaskDto } from './Interfaces/CreateTaskDto';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}

  getAllTask() {
    try {
      return this.taskRepository.find();
    } catch (err) {
      return Logger.error(`AppServices.getAllTask, ${err}`);
    }
  }

  createNewTask(task: CreateTaskDto) {
    try {
      return this.taskRepository.insert(task);
    } catch (err) {
      return Logger.error(`AppServices.createNewTask, ${err}`);
    }
  }
}
