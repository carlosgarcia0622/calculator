import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/square/:number (GET)', () => {
    return request(app.getHttpServer())
      .get('/square/5')
      .expect(200)
      .expect('El cuadrado de 5 es 25');
  });

  it('/cube/:number (GET)', () => {
    return request(app.getHttpServer())
      .get('/cube/5')
      .expect(200)
      .expect('El cubo de 5 es 125');
  });
});
