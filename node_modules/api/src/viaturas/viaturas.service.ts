import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Viatura } from './viaturas.entity';

@Injectable()
export class ViaturasService {
  constructor(
    @InjectRepository(Viatura)
    private readonly viaturasRepository: Repository<Viatura>,
  ) {}

  findAll(): Promise<Viatura[]> {
    return this.viaturasRepository.find().then((data) => {
    //  console.log('Dados buscados no banco de dados:', data);
      return data;
    });
  }
  
  findOne(id: number): Promise<Viatura> {
    return this.viaturasRepository.findOneBy({ ID: id });
  }

  create(viatura: Viatura): Promise<Viatura> {
    return this.viaturasRepository.save(viatura);
  }

  async remove(id: number): Promise<void> {
    await this.viaturasRepository.delete(id);
  }
}
