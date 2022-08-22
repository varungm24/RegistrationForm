import { Module } from '@nestjs/common';
import { RegisterController} from 'src/modules/registration/register.controller';
import { RegisterService } from 'src/modules/registration/register.service';
import { Profile } from './profile.model';


@Module({
  imports: [],
  controllers: [RegisterController],
  providers: [RegisterService, Profile],
})
export class RegisterModule {}
