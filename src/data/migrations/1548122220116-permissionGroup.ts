import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class permissionGroup1548122220116 implements MigrationInterface {

  private tableGroupForeignKey = new TableForeignKey({
    columnNames: ['group_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'groups',
    onDelete: 'CASCADE',
  });

  private tablePermissionForeignKey = new TableForeignKey({
    columnNames: ['permission_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'permission',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'c',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'group_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'permission_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'create_by',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'creation_date',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'modified_by',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'modification_date',
          type: 'timestamp',
          isNullable: true,
        },
      ],
    });

    await queryRunner.createTable(table, true);

    await queryRunner.createForeignKey(table, this.tableGroupForeignKey);
    await queryRunner.createForeignKey(table, this.tablePermissionForeignKey);

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await  queryRunner.dropForeignKey('permission_group', this.tableGroupForeignKey);
    await  queryRunner.dropForeignKey('permission_group', this.tablePermissionForeignKey);

    await queryRunner.dropTable('permission_group');
  }

}
