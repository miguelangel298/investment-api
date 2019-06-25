import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class contactType1560740131255 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'contact_type',
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
          length: '30',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('contact_type');
  }

}
