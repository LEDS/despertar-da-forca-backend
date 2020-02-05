import { Get, Controller} from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { LojaService } from '../service/loja.service';


@Controller('loja')
export class LojaController {
  constructor(private readonly lojaService: LojaService) {}

  @Get()
  readAll():any {
    return this.lojaService.findAll();
  }
}