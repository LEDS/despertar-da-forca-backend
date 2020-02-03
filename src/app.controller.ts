import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/soma/:valor1/:valor2')
  somaController(@Param() params): number {
    return this.appService.soma(params.valor1, params.valor2);
  }

  @Get('/soma2/:valor1/:valor2')
  somaController2(@Param('valor1') valor1, @Param('valor2') valor2): number {
    return this.appService.soma(valor1, valor2);
  }
}
