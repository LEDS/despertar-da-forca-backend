import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Loja } from '../entity/loja.entity';

@Injectable()
export class LojaService {
  constructor(
    @Inject('cliente_database')
    private readonly photoRepository: Repository<Loja>,
  ) {}

  async findAll(): Promise<Loja[]> {
    return this.photoRepository.find();
  }
}