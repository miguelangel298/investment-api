import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

// tslint:disable-next-line:class-name
export class persons1550894970685 implements MigrationInterface {

  private tableSexForeignKey = new TableForeignKey({
    columnNames: ['sex_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'sexes',
  });

  private tableNationalityForeignKey = new TableForeignKey({
    columnNames: ['nationality_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'nationalities',
  });
  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'persons',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'names',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'first_surname',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'second_surname',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'birth_date',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'card_id',
          type: 'text',
          isNullable: true,
          isUnique: true,
        },
        {
          name: 'passport',
          type: 'text',
          isNullable: true,
          isUnique: true,
        },
        {
          name: 'sex_id',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'nationality_id',
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
    await queryRunner.createForeignKeys(table,
                                        [this.tableNationalityForeignKey, this.tableSexForeignKey]);

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('persons');
    await queryRunner.dropForeignKeys('persons',
                                      [this.tableNationalityForeignKey, this.tableSexForeignKey]);
  }

}
