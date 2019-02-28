import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class permission1548121346295 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'permission',
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
          name: 'description',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'code',
          type: 'varchar',
          length: '20',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('permission');
  }

}
