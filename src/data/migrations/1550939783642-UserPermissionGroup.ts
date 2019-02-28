import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UserPermissionGroup1550939783642 implements MigrationInterface {

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

  private tableGroupForeignKey = new TableForeignKey({
    columnNames: ['group_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'groups',
  });

  private tableUserForeignKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'user_permission_group',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'group_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'user_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'created_by',
          type: 'integer',
          isNullable: false,
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
      this.tableCreateByForeignKey,
      this.tableGroupForeignKey,
      this.tableModifiedForeignKey,
      this.tableUserForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('user_permission_group', [
      this.tableCreateByForeignKey,
      this.tableGroupForeignKey,
      this.tableModifiedForeignKey,
      this.tableUserForeignKey,
    ]);
    await queryRunner.dropTable('user_permission_group');
  }

}
