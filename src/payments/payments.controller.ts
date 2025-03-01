import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config/services';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject(NATS_SERVICE) private readonly paymentClient: ClientProxy,) {}

  @Post()
  create(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentClient.send('payment_order', paymentSessionDto);
  }

  @Get('cancel')
  cancel() {
    return this.paymentClient.send('cancel_order', {});
  }

  @Get('success')
  success() {
    return this.paymentClient.send('success_order', {});
  }
}
