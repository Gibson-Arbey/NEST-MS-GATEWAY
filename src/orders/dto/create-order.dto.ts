import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderItemDto } from './order-item.dto';

export class CreateOrderDto {

  @IsArray({message: "La orden debe ser una lista"})
  @ArrayMinSize(1, {message: "La orden debe contener al menos un elemento"})
  @ValidateNested({each: true})
  @Type( () => OrderItemDto)
  items: OrderItemDto[]

}