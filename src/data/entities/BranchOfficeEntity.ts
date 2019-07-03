import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CompanyEntity from './CompanyEntity';
import WalletEntity from './WalletEntity';
import BranchOfOfficeStatusEntity from './BranchOfOfficeStatusEntity';
import UserEntity from './UserEntity';

@Entity('branch_office')
export default class BranchOfficeEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    location: string;

  @Column({ name: 'min_percent' })
    minPercent: number;

  @Column({ name: 'max_percent' })
    maxPercent: number;

  @ManyToOne(() => CompanyEntity)
  @JoinColumn({ name: 'company_id' })
    company: CompanyEntity;

  @ManyToOne(() => WalletEntity)
  @JoinColumn({ name: 'wallet_id' })
    wallet: WalletEntity;

  @ManyToOne(() => BranchOfOfficeStatusEntity)
  @JoinColumn({ name: 'branch_of_office_status_id' })
    status: BranchOfOfficeStatusEntity;

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
