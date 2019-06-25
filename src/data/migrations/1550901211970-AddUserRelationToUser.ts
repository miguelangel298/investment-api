import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class AddUserRelationToUser1550901211970 implements MigrationInterface {

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

  private tablePersonForeignKey = new TableForeignKey({
    columnNames: ['person_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'persons',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKeys('users', [this.tableCreateByForeignKey,
      this.tableModifiedForeignKey, this.tablePersonForeignKey]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('users', [this.tableCreateByForeignKey,
      this.tableModifiedForeignKey, this.tablePersonForeignKey]);
  }

}
