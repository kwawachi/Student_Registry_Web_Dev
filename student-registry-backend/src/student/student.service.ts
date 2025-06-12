import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  create(student: Partial<Student>) {
    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find();
  }

  async updateByStudentId(studentId: string, update: Partial<Student>) {
    const student = await this.studentRepository.findOneBy({ studentId });
    if (!student) throw new Error('Student not found');
    Object.assign(student, update);
    return this.studentRepository.save(student);
  }

  async removeByStudentId(studentId: string) {
    const student = await this.studentRepository.findOneBy({ studentId });
    if (!student) throw new Error('Student not found');
    return this.studentRepository.remove(student);
  }
}