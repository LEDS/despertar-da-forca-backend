import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  nome: string;

  @Column({nullable:true})
  data_nasc: Date;

  @Column({nullable:true})
  cpf: string;

  @Column({nullable:true})
  cidade: string;

  @Column({nullable:true})
  estado: string;

  @Column({nullable:true})
  produtos: string;

}
