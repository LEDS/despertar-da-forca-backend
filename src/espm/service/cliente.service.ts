import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('cliente_database')
    private readonly photoRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.photoRepository.find();
  }
}