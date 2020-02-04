import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  nome: string;

  @Column({nullable:true})
  cnpj: string;

  @Column({nullable:true})
  cidade: string;

  @Column({nullable:true})
  estado: string;

  @Column({nullable:true})
  produtos: string;

}
