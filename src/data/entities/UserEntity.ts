import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import bcryptNodejs from 'bcrypt-nodejs';
import UserStatusEntity from './UserStatusEntity';
import PersonEntity from './PersonEntity';
import UserPermissionGroupEntity from './UserPermissionGroupEntity';
import RoleEntity from './RoleEntity';

@Entity('users')
export default class UserEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    username: string;

  @Column()
    password: string;

  @ManyToOne(() => UserStatusEntity)
    @JoinColumn({ name: 'user_status_id' })
    userStatus: UserStatusEntity;

  @ManyToOne(() => RoleEntity)
    @JoinColumn({ name: 'rol_id' })
    role: RoleEntity;

  @ManyToOne(() => PersonEntity)
    @JoinColumn({ name: 'person_id' })
    person: PersonEntity;

  @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'created_by' })
    createdBy: UserEntity;

  @Column({ name: 'created_at' })
    createdAt: Date;

  @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: 'updated_by' })
    updatedBy: UserEntity;

  @Column({ name: 'updated_at' })
    updatedAt: Date;

  @OneToMany(() => UserPermissionGroupEntity, userPermissionGroups => userPermissionGroups.user)
  userPermissionGroups: UserPermissionGroupEntity[];

  setPassword(password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      bcryptNodejs.genSalt(10, (saltErr, salt) => {
        if (saltErr) return reject(saltErr);
        bcryptNodejs.hash(password, salt, undefined, (hashErr, hash) => {
          if (hashErr) return reject(hashErr);
          this.password = hash;
          return resolve();
        });
      });
      this.password = password;
    });
  }

  comparePassword(candidatePassword: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      bcryptNodejs.compare(candidatePassword, this.password, (err, match) => {
        if (err) return reject(err);
        return resolve(match);
      });
    });
  }
}
