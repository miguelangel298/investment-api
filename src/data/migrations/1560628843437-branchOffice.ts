import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class branchOffice1560628843437 implements MigrationInterface {

  private tableCompanyByForeignKey = new TableForeignKey({
    columnNames: ['company_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'companies',
  });

  private tableWalletForeignKey = new TableForeignKey({
    columnNames: ['wallet_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'wallet',
  });

  private tableBranchOfOfficeStatusByForeignKey = new TableForeignKey({
    columnNames: ['branch_of_office_status_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'branch_of_office_status',
  });

  private tableCreateByForeignKey = new TableForeignKey({
    columnNames: ['created_by'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
  });

  private tableModifiedForeignKey = new TableForeignKey({
    columnNames: ['updated_by'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'branch_office',
      columns: [
        {
          name: 'id',
          type: 'integer',
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
          name: 'min_percent',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'max_percent',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'location',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'company_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'wallet_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'branch_of_office_status_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'created_by',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'updated_by',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    });

    await queryRunner.createTable(table);
    await queryRunner.createForeignKeys(table, [
      this.tableBranchOfOfficeStatusByForeignKey,
      this.tableCompanyByForeignKey,
      this.tableCreateByForeignKey,
      this.tableModifiedForeignKey,
      this.tableWalletForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('branch_office', [
      this.tableBranchOfOfficeStatusByForeignKey,
      this.tableCompanyByForeignKey,
      this.tableCreateByForeignKey,
      this.tableModifiedForeignKey,
      this.tableWalletForeignKey,
    ]);
    await queryRunner.dropTable('branch_office');
  }
}
