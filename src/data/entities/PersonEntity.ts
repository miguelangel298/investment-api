import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany} from 'typeorm';
import GenderEntity from './GenderEntity';
import NationalityEntity from './NationalityEntity';
import UserEntity from './UserEntity';

@Entity('persons')
export default class PersonEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    names: string;

  @Column({ name: 'first_surname' })
    firstSurname: string;

  @Column({ name: 'second_surname' })
    secondSurname: string;

  @Column({ name: 'birth_date' })
    birthDate: Date;

  @Column({ name: 'card_id' })
    cardId: number;

  @Column()
    passport: string;

  @ManyToOne(() => GenderEntity)
    @JoinColumn({ name: 'sex_id' })
    gender: GenderEntity;

  @ManyToOne(() => NationalityEntity)
    @JoinColumn({ name: 'nationality_id' })
    nationality: NationalityEntity;

  @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: 'created_by' })
    createdBy: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

  @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: 'updated_by' })
    updatedBy: UserEntity;

  @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

  @OneToMany(() => UserEntity, user => user.person)
    users: UserEntity[];
}
