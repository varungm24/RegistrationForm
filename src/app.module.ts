import { Module } from '@nestjs/common';
import { RegisterModule } from './modules/registration/register.module';
import { StatusCodeModule } from './modules/statusCodes/statuscode.module';

@Module({
  imports: [RegisterModule,StatusCodeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
