import { Module } from '@nestjs/common';
import { FunctionsModule } from './functions/functions.module';

@Module({
  imports: [FunctionsModule],
})
export class AppModule {}
