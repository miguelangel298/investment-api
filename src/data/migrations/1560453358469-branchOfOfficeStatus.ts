import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class branchOfOfficeStatus1560453358469 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'branch_of_office_status',
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
          length: '50',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('branch_of_office_status');
  }

}
