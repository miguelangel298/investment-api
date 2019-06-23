import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class municipalities1561297669098 implements MigrationInterface {

  private tableProvinceForeignKey = new TableForeignKey({
    columnNames: ['province_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'provinces',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'municipalities',
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
        },
        {
          name: 'province_id',
          type: 'int',
        },
        {
          name: 'code',
          type: 'varchar',
          length: '50',
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey(table, this.tableProvinceForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('municipalities', this.tableProvinceForeignKey);
    await queryRunner.dropTable('municipalities');
  }

}
