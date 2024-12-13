import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViaturasService } from './viaturas.service';
import { ViaturasController } from './viaturas.controller';
import { Viatura } from './viaturas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Viatura])], // Importa a entidade Viatura
  controllers: [ViaturasController],
  providers: [ViaturasService],
})
export class ViaturasModule {}
