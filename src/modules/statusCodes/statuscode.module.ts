import { Module } from "@nestjs/common";
import { StatusCodeService } from "./statuscode.service";
import { StatusCodeController } from "./statuscode.controller";

@Module({
    imports : [],
    controllers : [StatusCodeController],
    providers : [StatusCodeService],

})
export class StatusCodeModule{}