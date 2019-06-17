import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class personAddress1560718377658 implements MigrationInterface {

  private tablePersonByForeignKey = new TableForeignKey({
    columnNames: ['person_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'persons',
  });

  private tableProvinceByForeignKey = new TableForeignKey({
    columnNames: ['province_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'provinces',
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
      name: 'person_address',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'province_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'sector',
          type: 'varchar',
          length: '200',
          isNullable: true,
        },
        {
          name: 'building',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'number',
          type: 'varchar',
          length: '100',
          isNullable: true,
        },
        {
          name: 'detail',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'active',
          type: 'boolean',
          isNullable: false,
        },
        {
          name: 'person_id',
          type: 'int',
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
      this.tableCreateByForeignKey,
      this.tableModifiedForeignKey,
      this.tableProvinceByForeignKey,
      this.tablePersonByForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('person_address', [
      this.tableProvinceByForeignKey,
      this.tableModifiedForeignKey,
      this.tableCreateByForeignKey,
      this.tablePersonByForeignKey,
    ]);
    await queryRunner.dropTable('person_address');
  }

}
