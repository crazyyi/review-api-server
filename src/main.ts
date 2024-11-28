import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // Create the NestJS app by passing the AppModule
  const app = await NestFactory.create(AppModule);

  // Enable CORS (Cross-Origin Resource Sharing) if needed for frontend-backend communication
  app.enableCors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Start the application on port 3000 (or any other port you'd like)
  await app.listen(4000);

  Logger.log('Application is running on: http://localhost:4000');
}

bootstrap();
