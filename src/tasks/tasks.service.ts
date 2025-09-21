import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  create(task: Partial<Task>) {
    const newTask = this.taskRepo.create(task);
    return this.taskRepo.save(newTask);
  }

  findAll() {
    return this.taskRepo.find();
  }

  findOne(id: number) {
    return this.taskRepo.findOneBy({ id });
  }

  update(id: number, task: Partial<Task>) {
    return this.taskRepo.update(id, task);
  }

  remove(id: number) {
    return this.taskRepo.delete(id);
  }
}
