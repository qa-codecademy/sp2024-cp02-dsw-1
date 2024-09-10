import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { PaymentInfoModule } from './payment-info/payment-info.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the config module accessible through the whole app
    }),
    DatabaseModule,
    ProductsModule,
    UsersModule,
    OrdersModule,
    AuthModule,
    PaymentInfoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
