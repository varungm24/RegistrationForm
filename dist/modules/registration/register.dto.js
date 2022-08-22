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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RegisterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "First name of the student"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Middle name of the student"
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "middleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Last name of the student"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Email Id of the student in the format of abc.@gmail.com"
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Contact Number of the student(10 digits only)"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(1000000000),
    (0, class_validator_1.Max)(9999999999),
    __metadata("design:type", Number)
], RegisterDto.prototype, "contactNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Date of birth of the student in the format of (DD/MM/YYYY)"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "select the gender"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "10th class percentage of the student(format : 00.00)"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], RegisterDto.prototype, "tenthPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "12th class percentage of the student(format : 00.00)"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], RegisterDto.prototype, "twelfthPercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "select the education type of the student",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "educationType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "highest degree of the student"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "degree", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "college name of the student"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "collegeName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "registration number of the student"
    }),
    (0, class_validator_1.IsAlphanumeric)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "registerNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "branch of the student"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "branch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "backlogs of the student",
        default: "no",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "backlogs", void 0);
exports.RegisterDto = RegisterDto;
//# sourceMappingURL=register.dto.js.map