import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Loja } from '../entity/loja.entity';

@Injectable()
export class LojaService {
  constructor(
    @Inject('loja_database')
    private readonly lojaRepository: Repository<Loja>,
  ) {}

  async findAll(): Promise<Loja[]> {
    return this.lojaRepository.find();
  }
}