import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('viaturas')
export class Viatura {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  Marca: string;

  @Column()
  Tipo: string;

  @Column()
  Nomenclatura: string;

  @Column({ nullable: true })
  Imagem: string;
}
