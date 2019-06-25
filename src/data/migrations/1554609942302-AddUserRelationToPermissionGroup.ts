import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class AddUserRelationToPermissionGroup1554609942302 implements MigrationInterface {

  private tableCreateByForeignKey = new TableForeignKey({
    columnNames: ['created_by'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey('permission_group', this.tableCreateByForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('permission_group', this.tableCreateByForeignKey);
  }

}
