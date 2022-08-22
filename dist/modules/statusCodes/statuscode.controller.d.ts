import { StatusCodeService } from "./statuscode.service";
export declare class StatusCodeController {
    private readonly statusCodeService;
    constructor(statusCodeService: StatusCodeService);
    getAllErrorStatusCode(): Object;
}
