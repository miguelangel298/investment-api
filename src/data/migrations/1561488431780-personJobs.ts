import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class personJobs1561488431780 implements MigrationInterface {

  private tablePersonByForeignKey = new TableForeignKey({
    columnNames: ['person_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'persons',
  });

  private tableBranchOfficeForeignKey = new TableForeignKey({
    columnNames: ['branch_office_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'branch_office',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'person_jobs',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'branch_office_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'person_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'position',
          type: 'varchar',
          length: '200',
          isNullable: false,
        },
        {
          name: 'salary',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'date_admission',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'employee_code',
          type: 'varchar',
          length: '30',
          isNullable: false,
        },
        {
          name: 'supervisor_name',
          type: 'varchar',
          length: '150',
          isNullable: false,
        },
        {
          name: 'supervisor_phone',
          type: 'varchar',
          length: '50',
          isNullable: false,
        },
        {
          name: 'current_job',
          type: 'boolean',
          isNullable: false,
        },
        {
          name: 'created_by',
          type: 'integer',
          isNullable: true,
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
    await queryRunner.createTable(table);
    await queryRunner.createForeignKeys(table, [
      this.tableBranchOfficeForeignKey,
      this.tablePersonByForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('person_jobs', [
      this.tablePersonByForeignKey,
      this.tableBranchOfficeForeignKey,
    ]);
  }

}
