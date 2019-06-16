import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class provinces1560694741094 implements MigrationInterface {

  private tableCountryForeignKey = new TableForeignKey({
    columnNames: ['country_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'countries',
  });

  // private tableModifiedForeignKey = new TableForeignKey({
  //   columnNames: ['updated_by'],
  //   referencedColumnNames: ['id'],
  //   referencedTableName: 'users',
  // });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'provinces',
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
          length: '100',
          isUnique: true,
        },
        {
          name: 'country_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'code',
          type: 'varchar',
          length: '10',
          isUnique: true,
          isNullable: true,
        },
      ],
    });
    await queryRunner.createTable(table, true);
    await queryRunner.createForeignKey(table, this.tableCountryForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('provinces', this.tableCountryForeignKey);
    await queryRunner.dropTable('provinces');
  }

}
