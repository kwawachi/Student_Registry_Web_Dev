import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  studentId: string; // Your custom Student ID

  @Column()
  name: string;

  @Column()
  program: string;

  @Column()
  city: string;

  @Column('float')
  gpa: number;

  @Column()
  gender: string;

  @Column()
  contactEmail: string;
}