import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class wallet1560477507178 implements MigrationInterface {

  private tableUserByForeignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
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
      name: 'wallet',
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
          name: 'description',
          type: 'varchar',
          length: '500',
          isNullable: true,
        },
        {
          name: 'user_id',
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
      this.tableUserByForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('wallet', [
      this.tableUserByForeignKey,
      this.tableModifiedForeignKey,
      this.tableCreateByForeignKey,
    ]);

    await queryRunner.dropTable('wallet');
  }

}
