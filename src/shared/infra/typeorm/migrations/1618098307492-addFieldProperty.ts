import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addFieldProperty1618098307492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_property",new TableColumn(
            {
                name:"deleted_at",
                type:"timestamp",
                isNullable:true
            })
        )

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_property","deleted_at")
    }

}
