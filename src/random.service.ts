import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomService {
  getHello(): string {
    return 'Hello World!';
  }
}
