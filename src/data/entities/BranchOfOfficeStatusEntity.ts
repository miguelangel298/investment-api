import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('branch_of_office_status')
export default class BranchOfOfficeStatusEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
