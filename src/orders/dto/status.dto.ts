import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `El estatus no es valido, estos son los datos validos: ${ OrderStatusList }`,
  })
  status: OrderStatus;
}
