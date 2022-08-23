"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const register_dto_1 = require("./register.dto");
const register_service_1 = require("./register.service");
const enums_1 = require("./enums");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    getEducationDetailsByRole(query) {
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
    getDegreeByEducationType(query) {
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
    getBranchByDegreeType(query) {
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
    studentRegistration(registerDto) {
        console.log(registerDto);
        return this.registerService.studentRegistration();
    }
    uploadFile(file) {
        console.log({ file });
        console.log('file', file.originalname);
        return 'File Uploaded Successfully';
    }
};
__decorate([
    (0, common_1.Version)('1'),
    (0, swagger_1.ApiQuery)({ name: 'role', enum: enums_1.Role }),
    (0, common_1.Get)('education'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], RegisterController.prototype, "getEducationDetailsByRole", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, swagger_1.ApiQuery)({ name: 'education', enum: enums_1.Education }),
    (0, common_1.Get)('degree'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], RegisterController.prototype, "getDegreeByEducationType", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, swagger_1.ApiQuery)({ name: 'degree', enum: enums_1.Degree }),
    (0, common_1.Get)('branch'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], RegisterController.prototype, "getBranchByDegreeType", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "studentRegistration", null);
__decorate([
    (0, common_1.Version)('1'),
    (0, common_1.Post)('uploadresume'),
    (0, common_1.UseInterceptors)(),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "uploadFile", null);
RegisterController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map