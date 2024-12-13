import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViaturasModule } from './viaturas/viaturas.module'; // Importa o módulo Viaturas

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: '1234',
      database: 'projeto',
      entities: [__dirname + '/**/*.entity.{js,ts}'], // Registra todas as entidades automaticamente
      synchronize: true, // Somente em desenvolvimento
    }),
    ViaturasModule, // Registra o módulo Viaturas
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
