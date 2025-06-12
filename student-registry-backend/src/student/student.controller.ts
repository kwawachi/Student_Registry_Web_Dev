import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() student: Partial<Student>) {
    return this.studentService.create(student);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Put(':studentId')
  update(@Param('studentId') studentId: string, @Body() student: Partial<Student>) {
    return this.studentService.updateByStudentId(studentId, student);
  }

  @Delete(':studentId')
  remove(@Param('studentId') studentId: string) {
    return this.studentService.removeByStudentId(studentId);
  }
}