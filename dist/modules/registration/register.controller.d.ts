import { RegisterDto } from './register.dto';
import { RegisterService } from './register.service';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    getEducationDetailsByRole(query: any): Array<object>;
    getDegreeByEducationType(query: any): Array<object>;
    getBranchByDegreeType(query: any): Array<object>;
    studentRegistration(registerDto: RegisterDto): String;
    uploadFile(file: any): string;
}
