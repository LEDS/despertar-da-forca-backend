import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('cliente_database')
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async findOne(id): Promise<Cliente> {
    return this.clienteRepository.findOne({ id: id });
  }

  async findWhere(produtos) {
    console.log();
    return this.clienteRepository
      .createQueryBuilder('cliente')
      .select('produtos')
      .where('cliente.produtos ilike :produtos', { produtos: `%${produtos}%` })
      .getRawMany();
  }

  async findOnlyColumn(id) {
    let retornoProduto = await this.clienteRepository
      .createQueryBuilder()
      .select('produtos')
      .where({ id: id })
      .getRawOne();
    let listaProdutos = retornoProduto.produtos.split(',').map(tech => tech.trim())
    console.log(listaProdutos[0])
    return listaProdutos
  }
}
