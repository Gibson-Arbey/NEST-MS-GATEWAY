import { Type } from "class-transformer"
import { IsNumber, IsPositive, Min } from "class-validator"

export class OrderItemDto {

    @IsNumber()
    @IsPositive()
    productId: number

    @IsNumber()
    @IsPositive()
    @Min(1)
    @Type( () => Number)
    quantity: number

    @IsNumber()
    @IsPositive()
    @Type( () => Number)
    price: number
}