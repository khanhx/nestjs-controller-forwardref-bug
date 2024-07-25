import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { RandomService } from './random.service';

@Injectable()
export class AppService {
  @Inject(forwardRef(() => RandomService))
  randomService: RandomService;

  instanceKey = Math.random();
  constructor() {
    console.log('AppService constructor', this.instanceKey);
    setTimeout(() => {
      console.log('AppService current value', this.instanceKey);
    }, 3000);
    this.init();
  }

  async init() {
    await new Promise((resolve) => {
      setTimeout(() => {
        this.instanceKey = Math.random();

        console.log('AppService switch key', this.instanceKey);
      }, 1000);

      resolve(false);
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
