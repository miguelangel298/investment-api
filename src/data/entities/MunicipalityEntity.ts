import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import ProvinceEntity from './ProvinceEntity';

@Entity('municipalities')
export default class MunicipalityEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @OneToOne(() => ProvinceEntity)
  @JoinColumn({ name: 'province_id' })
  province: ProvinceEntity;
}
