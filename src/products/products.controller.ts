import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ClientProxy, } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config/services';

@Controller('products')
export class ProductsController {
  constructor(@Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsClient.send(
      { cmd: 'create_product' },
      createProductDto,
    );
  }
}
