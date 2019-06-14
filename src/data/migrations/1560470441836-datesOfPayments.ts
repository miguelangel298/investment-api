import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class datesOfPayments1560470441836 implements MigrationInterface {

  private tableCompanyForeignKey = new TableForeignKey({
    columnNames: ['company_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'companies',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'dates_of_payments',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'day',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'company_id',
          type: 'int',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey(table, this.tableCompanyForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('dates_of_payments', this.tableCompanyForeignKey);
    await queryRunner.dropTable('dates_of_payments');
  }

}
