import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
  console.log(`"Server running on 3001"`);
}
bootstrap().catch((err) => {
  console.log('Bootstrap error: ', err);
  process.exit(1);
});
