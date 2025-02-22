
import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';


export class OrderPaginationDto extends PaginationDto {

  @IsOptional()
  @IsEnum( OrderStatusList, {
    message: `El estatus no es valido, estos son los datos validos: ${ OrderStatusList }`
  })
  status: OrderStatus;


}
