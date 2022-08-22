import { Injectable } from "@nestjs/common";

@Injectable()
export class StatusCodeService{
    getStatusCode() : string {
        return "HTTP status code cheet sheet"
    }
}