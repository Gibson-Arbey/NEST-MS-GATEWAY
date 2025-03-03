import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { NatsModule } from './nats/nats.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [ProductsModule, OrdersModule, NatsModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
