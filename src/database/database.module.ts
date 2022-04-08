import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.providers';
import { taskProviders } from './providers/task.providers';

@Module({
  providers: [...databaseProviders, ...taskProviders],
  exports: [...databaseProviders, ...taskProviders],
})
export class DatabaseModule {}
