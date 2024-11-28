import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    FeedbackModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.env.local',
    }),
  ],
})
export class AppModule { }
