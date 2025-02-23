import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { NATS_SERVICE, } from 'src/config/services';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { StatusDto } from './dto/status.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(NATS_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  createProduct(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send({ cmd: 'create_order' }, createOrderDto);
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto) {
    return this.ordersClient.send({ cmd: 'get_all_orders' }, paginationDto);
  }

  @Get('id/:id')
  async findProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersClient.send({ cmd: 'get_one_order' }, { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get(':status')
  async findAllByStatus(
    @Param() statusDto: StatusDto,
    @Query() paginationDto: PaginationDto,
  ) {
    try {
      return this.ordersClient.send({cmd: 'get_all_orders'}, {
        ...paginationDto,
        status: statusDto.status,
      });
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  changeStatus(
    @Param('id', ParseUUIDPipe ) id: string,
    @Body() statusDto: StatusDto,
  ) {
    try {
      return this.ordersClient.send({cmd: 'change_order_status'}, { id, status: statusDto.status })
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
