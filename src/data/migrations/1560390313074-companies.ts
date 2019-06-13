import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class companies1560390313074 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'companies',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
          length: '300',
          isNullable: false,
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '25',
          isNullable: true,
        },
        {
          name: 'ext',
          type: 'varchar',
          length: '10',
          isNullable: true,
        },
        {
          name: 'email',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'address',
          type: 'varchar',
          length: '500',
          isNullable: true,
        },
        {
          name: 'day_of_payment_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'bank_id',
          type: 'integer',
          isNullable: false,
        }
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
