import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('square', () => {
    it('should return square for the number', () => {
      expect(appController.square('5')).toBe("El cuadrado de 5 es 25");
    });
  });

  describe('cube', () => {
    it('should return cube for the number', () => {
      expect(appController.cube('5')).toBe("El cubo de 5 es 125");
    });
  });
});
