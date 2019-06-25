import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class additionalInformation1560746588507 implements MigrationInterface {

  private tableCivilStatusByForeignKey = new TableForeignKey({
    columnNames: ['civil_status_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'civil_status',
  });

  private tablePersonByForeignKey = new TableForeignKey({
    columnNames: ['person_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'persons',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'additional_information',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'father_name',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'mother_name',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'dependents',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'civil_status_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'person_id',
          type: 'int',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(table);
    await queryRunner.createForeignKeys(table, [
      this.tableCivilStatusByForeignKey,
      this.tablePersonByForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('additional_information', [
      this.tablePersonByForeignKey,
      this.tableCivilStatusByForeignKey,
    ]);
    await queryRunner.dropTable('additional_information');
  }

}
