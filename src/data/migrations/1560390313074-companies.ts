import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class companies1560390313074 implements MigrationInterface {

  private tableBankForeignKey = new TableForeignKey({
    columnNames: ['bank_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'bank',
  });

  private tableDayOfPaymentForeignKey = new TableForeignKey({
    columnNames: ['day_of_payment_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'days_of_payments',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'companies',
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
          length: '300',
          isNullable: false,
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '25',
          isNullable: true,
        },
        {
          name: 'ext',
          type: 'varchar',
          length: '10',
          isNullable: true,
        },
        {
          name: 'email',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'address',
          type: 'varchar',
          length: '500',
          isNullable: true,
        },
        {
          name: 'day_of_payment_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'bank_id',
          type: 'integer',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKeys(table, [
      this.tableDayOfPaymentForeignKey,
      this.tableBankForeignKey]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('companies', [
      this.tableDayOfPaymentForeignKey,
      this.tableBankForeignKey,
    ]);
    await queryRunner.dropTable('companies');
  }

}
