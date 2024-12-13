import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ViaturasService } from './viaturas.service';
import { Viatura } from './viaturas.entity';

@Controller('viaturas')
export class ViaturasController {
  constructor(private readonly viaturasService: ViaturasService) {}

  @Get()
  async findAll(): Promise<Viatura[]> {
    // Retorna todos os dados da tabela viaturas
    return this.viaturasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Viatura> {
    // Retorna uma viatura com base no ID fornecido
    return this.viaturasService.findOne(+id);
  }

  @Post()
  async create(@Body() viatura: Viatura): Promise<Viatura> {
    // Adiciona uma nova viatura ao banco de dados
    return this.viaturasService.create(viatura);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    // Remove uma viatura com base no ID fornecido
    await this.viaturasService.remove(+id);
  }
}
