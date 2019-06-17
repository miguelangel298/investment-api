import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class personContacts1560741835955 implements MigrationInterface {

  private tableContactTypeByForeignKey = new TableForeignKey({
    columnNames: ['contact_type_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'contact_type',
  });

  private tablePersonByForeignKey = new TableForeignKey({
    columnNames: ['person_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'persons',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'person_contacts',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
        },
        {
          name: 'value',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'ext',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'contact_type_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'person_id',
          type: 'int',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKeys(table, [
      this.tableContactTypeByForeignKey,
      this.tablePersonByForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKeys('person_contacts', [
      this.tableContactTypeByForeignKey,
      this.tablePersonByForeignKey,
    ]);
    await queryRunner.dropTable('person_contacts');
  }

}
