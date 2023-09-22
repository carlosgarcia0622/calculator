import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSquare(stringNumber: string) {
    const number = parseInt(stringNumber);
    if (typeof number !== 'number' || isNaN(number))
      throw new BadRequestException('MUST_PROVIDE_A_NUMBER');
    return number * number;
  }

  getCube(stringNumber: string) {
    const number = parseInt(stringNumber);
    if (typeof number !== 'number' || isNaN(number))
      throw new BadRequestException('MUST_PROVIDE_A_NUMBER');
    return number * number * number;
  }
}
