import { Get, Controller, Res, Param} from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';


@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  readAll():any {
    return this.clienteService.findAll();
  }
  
  @Get(':id')
  readOne(@Param('id') id):any {
    return this.clienteService.findOne(id)
  }

  @Get('/produto/:prod')
  readWhere(@Param('prod') prod):any {
    return this.clienteService.findWhere(prod)
  }

  @Get('/id/:id')
  readOnlyColumn(@Param('id') id):any {
    return this.clienteService.findOnlyColumn(id)
  }
}