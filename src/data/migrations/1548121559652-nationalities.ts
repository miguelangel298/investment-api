import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class nationalities1548121559652 implements MigrationInterface {

  private tableCountryForeignKey = new TableForeignKey({
    columnNames: ['country_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'countries',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'nationalities',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'country_id',
          type: 'int',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(table, true);

    await queryRunner.createForeignKey(table, this.tableCountryForeignKey);

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await  queryRunner.dropForeignKey('nationalities', this.tableCountryForeignKey);
    await queryRunner.dropTable('nationalities');
  }

}
