import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { NatsModule } from 'src/nats/nats.module';

@Module({
  controllers: [PaymentsController],
  imports: [NatsModule],
  providers: [],
})
export class PaymentsModule {}
