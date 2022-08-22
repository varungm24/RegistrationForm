import { RegisterDto } from './register.dto';
import { RegisterService } from './register.service';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    getJobProfile(query: {
        role: string;
    }): string;
    studentRegistration(registerDto: RegisterDto): String;
    uploadFile(file: any): string;
}
