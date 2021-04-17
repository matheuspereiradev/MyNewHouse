import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addFieldProperty1618098003362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_property",new TableColumn(
            {
                name:"created_at",
                type:"timestamp",
                default:"CURRENT_TIMESTAMP"
            })
        )       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_property","created_at")
    }

}
