import {
  Bind,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterDto } from './register.dto';
import { RegisterService } from './register.service';
//import { Profile } from './profile.model';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  // @Version('1')
  // @Get('jobprofile/:id')
  // @Bind(Param())
  // getJobProfileV1(params): Profile{
  //   return this.registerService.getJobProfileV1(params);
  // }



  @Version('1')
  @Get('jobprofile')
  getJobProfile(@Query() query: { role: string }): string {
    return this.registerService.getJobProfile(query.role);
  }

  @Version('1')
  @Post('register')
  studentRegistration(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
    return this.registerService.studentRegistration();
  }


  @Version('1')
  @Post('uploadresume')
  @UseInterceptors(
    // FileInterceptor('file', {
    //   dest: './uploads',
    // }),
  )
  uploadFile(@UploadedFile() file) {
    console.log({ file });
    console.log('file', file.originalname);
    return 'File Uploaded Successfully';
  }
}
