import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 50 })
  nome: string;

  @Column({ type: 'char', length: 100 })
  cnpj: string;

  @Column({ type: 'char', length: 50 })
  cidade: string;

  @Column({ type: 'char', length: 50 })
  estado: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  // @ManyToOne(type => Pessoa, pessoa => pessoa.autenticacao, {
  //   eager: true, cascade: true, onDelete: "CASCADE"
  // })
  // pessoa: Pessoa;
}
