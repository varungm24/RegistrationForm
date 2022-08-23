import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class RegisterService  {
  logger:Logger;
  constructor(){
      this.logger = new Logger();   
  };


  // getJobProfileV1(params): Profile {
  //   let jobprofile = params.id.charAt(0).toUpperCase() + params.id.slice(1);
  //   this.profile.role = jobprofile;
  //   this.logger.warn("This is a Get request for Job profile, thereby it will return the same Job profile entered in the Get request");
  //   return this.profile;   
  // }

  // getJobProfile(param):string {
  //   return `Role: ${param}`;
  // }

  studentRegistration(): String  {
    this.logger.warn("This is a Post request for registration");
    return `Registration is Successfull`;
  }
}
