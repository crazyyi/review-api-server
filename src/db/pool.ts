import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

// A function to initialize the pool with the correct configuration
export function createPool(configService: ConfigService): Pool {
  return new Pool({
    host: configService.get<string>('database.host'),
    user: configService.get<string>('database.user'),
    password: configService.get<string>('database.password'),
    database: configService.get<string>('database.database'),
    port: configService.get<number>('database.port'),
  });
}
