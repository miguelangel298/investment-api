import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class spousePerson1560885244112 implements MigrationInterface {

  private tablePersonByForeignKey = new TableForeignKey({
    columnNames: ['person_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'persons',
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table: Table = new Table({
      name: 'spouse_person',
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
          length: '150',
          isNullable: false,
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '30',
          isNullable: true,
        },
        {
          name: 'person_id',
          type: 'int',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
    await queryRunner.createForeignKey(table, this.tablePersonByForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('spouse_person', this.tablePersonByForeignKey);
    await queryRunner.dropTable('spouse_person');
  }

}
