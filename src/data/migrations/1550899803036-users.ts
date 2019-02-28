import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class users1550899803036 implements MigrationInterface {

  private tableUserStatusForeignKey = new TableForeignKey({
    columnNames: ['user_status_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'user_status',
  });

  private tableRoleForeignKey = new TableForeignKey({
    columnNames: ['rol_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'roles',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'username',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'password',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'person_id',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'rol_id',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'user_status_id',
          type: 'integer',
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
      this.tableUserStatusForeignKey,
      this.tableRoleForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('users', [
      this.tableUserStatusForeignKey,
      this.tableRoleForeignKey,
    ]);
    await queryRunner.dropTable('users');
  }

}
