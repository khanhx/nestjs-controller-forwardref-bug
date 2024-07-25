import { Controller, Get, Inject, forwardRef } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(forwardRef(() => AppService))
    private appService: AppService,
  ) {
    setTimeout(() => {
      console.log('AppController current value', this.appService?.instanceKey);
    }, 3000);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
