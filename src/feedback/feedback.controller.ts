import { Controller, Post, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) { }

  @Post('addFeedback')
  async addFeedback(@Body() feedbackData: any) {
    return this.feedbackService.addFeedback(feedbackData);
  }
}
