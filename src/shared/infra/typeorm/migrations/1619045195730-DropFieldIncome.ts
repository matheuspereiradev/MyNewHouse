import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class DropFieldIncome1619045195730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","income")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"income",
                type:"DECIMAL(6,2)",
                isNullable:true
            })
        )
    }

}
