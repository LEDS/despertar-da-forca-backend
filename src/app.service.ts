import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  soma(valor1, valor2): number {
    return parseInt(valor1) + parseInt(valor2)
  }
}
