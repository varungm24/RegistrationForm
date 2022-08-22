import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { StatusCodeService } from "./statuscode.service";
import { ApiProperty } from "@nestjs/swagger";

@Controller()
export class StatusCodeController {
  constructor(private readonly statusCodeService: StatusCodeService) { }


  @Get('help')
  getAllErrorStatusCode(): Object {
    // Object.keys(HttpStatus).forEach(element => {
    //   console.log({element})
      
    // });
    return [
      {
        'OK': HttpStatus.OK
      },
      {
        'Created': HttpStatus.CREATED
      },
      {
        'Bad Request': HttpStatus.BAD_REQUEST
      },
      {
        'Unauthorized': HttpStatus.UNAUTHORIZED
      },
      {
        'Payment Required': HttpStatus.PAYMENT_REQUIRED
      },
      {
        'Forbidden': HttpStatus.FORBIDDEN
      },
      {
        'Not Found': HttpStatus.NOT_FOUND
      },
      {
        'Internal Server Error': HttpStatus.INTERNAL_SERVER_ERROR
      },
    ]
  }


}