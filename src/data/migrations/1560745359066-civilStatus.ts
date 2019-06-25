import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class civilStatus1560745359066 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'civil_status',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'status',
          type: 'varchar',
          length: '50',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('civil_status');
  }

}
