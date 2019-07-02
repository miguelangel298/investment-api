import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ProvinceEntity from './ProvinceEntity';
import UserEntity from './UserEntity';
import PersonEntity from './PersonEntity';

@Entity('person_address')
export default class PersonAddressEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sector: string;

  @Column()
  building: string;

  @Column()
  number: string;

  @Column()
  detail: string;

  @Column()
  active: boolean;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  person: PersonEntity;

  @ManyToOne(() => ProvinceEntity)
  @JoinColumn({ name: 'province_id' })
  province: ProvinceEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UserEntity;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;
}
