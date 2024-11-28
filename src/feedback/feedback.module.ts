import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { createPool } from 'src/db/pool';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [FeedbackController],
  providers: [
    FeedbackService,
    {
      provide: 'DATABASE_POOL', // Register pool provider in the FeedbackModule
      useFactory: (configService: ConfigService) => createPool(configService),
      inject: [ConfigService],
    },
  ],
})
export class FeedbackModule { }