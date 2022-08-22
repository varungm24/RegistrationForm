import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsOptional, Max, Min } from "class-validator";

export class RegisterDto {
        @ApiProperty({
            description:"First name of the student"
        })
        @IsNotEmpty() 
        private firstName: String;

        @ApiProperty({
            description:"Middle name of the student"
        }) 
        @IsOptional()
        private middleName: String;

        @ApiProperty({
            description:"Last name of the student"
        }) 
        @IsNotEmpty()
        private lastName: String;

        @ApiProperty({
            description:"Email Id of the student in the format of abc.@gmail.com"
        }) 
        @IsEmail()
        @IsNotEmpty()
        private email: String;

        @ApiProperty({
            description:"Contact Number of the student(10 digits only)"
        }) 
        @IsNotEmpty()
        @Min(1000000000)
        @Max(9999999999)
        private contactNumber:  number;

        @ApiProperty({
            description:"Date of birth of the student in the format of (DD/MM/YYYY)"
        }) 
        @IsNotEmpty()
        private dateOfBirth: String;

        @ApiProperty({
            description:"select the gender"
        }) 
        @IsNotEmpty()
        private gender: String;

        @ApiProperty({
            description: "10th class percentage of the student(format : 00.00)"
        })
        @IsNotEmpty()
        private tenthPercentage: number;

        @ApiProperty({
            description : "12th class percentage of the student(format : 00.00)"
        })
        @IsNotEmpty()
        private twelfthPercentage: number;

        @ApiProperty({
            description : "select the education type of the student",
        })
        @IsNotEmpty()
        private educationType: String;
        
        @ApiProperty({
            description : "highest degree of the student"
        })
        @IsNotEmpty()
        private degree: String;
        
        @ApiProperty({
            description : "college name of the student"
        })
        @IsNotEmpty()
        private collegeName: String;

        @ApiProperty({
            description : "registration number of the student"
        })
        @IsAlphanumeric()
        @IsNotEmpty()
        private registerNumber: String;

        @ApiProperty({
        description : "branch of the student"
        })
        @IsNotEmpty()
        private branch: String;

        @ApiProperty({
        description : "backlogs of the student",
        default : "no",
         })
        @IsNotEmpty()
        private backlogs: String;
      
}