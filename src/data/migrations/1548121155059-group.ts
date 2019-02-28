import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class group1548121155059 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'groups',
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
          name: 'created_by',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'updated_by',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    });

    await queryRunner.createTable(table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('group');
  }

}
