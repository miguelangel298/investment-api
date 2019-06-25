import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class daysOfPayments1560385362686 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'days_of_payments',
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
          length: '70',
          isNullable: false,
        },
        {
          name: 'dues',
          type: 'int',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('days_of_payments');
  }

}
