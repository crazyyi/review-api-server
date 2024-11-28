// src/feedback/feedback.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class FeedbackService {
  constructor(
    @Inject('DATABASE_POOL') private readonly pool: Pool, // Inject the Pool
  ) { }

  // Call the PostgreSQL function add_feedback
  async addFeedback(
    data: {
      projectId: string;
      userName: string;
      userEmail: string;
      message: string;
      rating: number;
    }) {
    try {
      const query = `
        SELECT add_feedback($1, $2, $3, $4, $5);
      `;

      const result = await this.pool.query(query, [
        data.projectId,
        data.userName,
        data.userEmail,
        data.message,
        data.rating,
      ]);
      return result.rows[0];
    } catch (error) {
      console.error('Error executing add_feedback function:', error);
      throw new Error('Failed to add feedback.');
    }
  }
}
