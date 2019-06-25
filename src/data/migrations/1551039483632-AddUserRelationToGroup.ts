import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class AddUserRelationToGroup1551039483632 implements MigrationInterface {

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
    await queryRunner.createForeignKeys('groups', [this.tableCreateByForeignKey,
      this.tableModifiedForeignKey]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('groups', [this.tableCreateByForeignKey,
      this.tableModifiedForeignKey]);
  }

}
