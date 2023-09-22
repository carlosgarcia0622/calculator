import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('square/:number')
  square(@Param('number') number: string): string {
    const result = this.appService.getSquare(number);
    return `El cuadrado de ${number} es ${result}`;
  }

  @Get('cube/:number')
  cube(@Param('number') number: string): string {
    const numberInt = parseInt(number);
    return `El cubo de ${number} es ${numberInt * numberInt * numberInt}`;
  }
}
