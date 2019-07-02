import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import PersonEntity from './PersonEntity';
import BranchOfficeEntity from './BranchOfficeEntity';
import UserEntity from './UserEntity';

@Entity('person_jobs')
export default class PersonJobEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: string;

  @Column()
  salary: number;

  @Column({ name: 'date_admission' })
  dateAdmission: Date;

  @Column({ name: 'employee_code' })
  employeeCode: string;

  @Column({ name: 'supervisor_name' })
  supervisorName: string;

  @Column({ name: 'supervisor_phone' })
  supervisorPhone: string;

  @Column({ name: 'current_job' })
  currentJob: boolean;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  person: PersonEntity;

  @ManyToOne(() => BranchOfficeEntity)
  @JoinColumn({ name: 'branch_office_id' })
  branchOffice: BranchOfficeEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UserEntity;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
