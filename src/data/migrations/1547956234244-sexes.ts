import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class sexes1547956234244 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'sexes',
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
          length: '20',
          isNullable: false,
        },
        {
          name: 'code',
          type: 'varchar',
          length: '2',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('sexes');
  }

}
