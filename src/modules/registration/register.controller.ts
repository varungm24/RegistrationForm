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
import { ApiQuery } from '@nestjs/swagger';
import { RegisterDto } from './register.dto';
import { RegisterService } from './register.service';
import { Role, Education, Degree } from './enums';
//import { Profile } from './profile.model';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Version('1')
  @ApiQuery({ name: 'role', enum: Role })
  @Get('education')
  getEducationDetailsByRole(@Query() query): Array<object> {
    let educationDetails = [];
    const { role } = query;
    switch (role) {
      case 'softwaredeveloper':
        educationDetails = [
          { displayText: 'UG', value: 'ug' },
          { displayText: 'PG', value: 'pg' },
          { displayText: 'Diploma', value: 'diploma' },
        ];
        break;
      default:
        educationDetails = [];
        break;
    }
    return educationDetails;
  }

  @Version('1')
  @ApiQuery({ name: 'education', enum: Education })
  @Get('degree')
  getDegreeByEducationType(@Query() query): Array<object> {
    let degree = [];
    const { education } = query;
    switch (education) {
      case 'ug':
        degree = [
          { displayText: 'B.Tech', value: 'btech' },
          { displayText: 'B.E', value: 'be' },
          { displayText: 'BCA', value: 'bca' },
        ];
        break;
      case 'pg':
        degree = [
          { displayText: 'M.Tech', value: 'mtech' },
          { displayText: 'M.E', value: 'me' },
          { displayText: 'MCA', value: 'mca' },
          { displayText: 'MBA', value: 'mba' },
        ];
        break;
      case 'diploma':
        degree = [
          { displayText: 'Diploma 1', value: 'diploma1' },
          { displayText: 'Diploma 2', value: 'diploma2' },
        ];
        break;

      default:
        degree = [];
        break;
    }
    return degree;
  }

  @Version('1')
  @ApiQuery({ name: 'degree', enum: Degree })
  @Get('branch')
  getBranchByDegreeType(@Query() query): Array<object> {
    let branches = [];
    console.log({ query });
    const { degree } = query;
    switch (degree) {
      case 'be':
        branches = [
          { displayText: 'Computer Science', value: 'cs' },
          { displayText: 'Information Technology', value: 'it' },
        ];
        break;
      case 'mtech':
        branches = [
          { displayText: 'Computer Science', value: 'm-cs' },
          { displayText: 'Information Technology', value: 'm-it' },
        ];
        break;

      default:
        branches = [];
        break;
    }
    return branches;
  }

  @Version('1')
  @Post('register')
  studentRegistration(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
    return this.registerService.studentRegistration();
  }

  @Version('1')
  @Post('uploadresume')
  @UseInterceptors()
  // FileInterceptor('file', {
  //   dest: './uploads',
  // }),
  uploadFile(@UploadedFile() file) {
    console.log({ file });
    console.log('file', file.originalname);
    return 'File Uploaded Successfully';
  }
}
