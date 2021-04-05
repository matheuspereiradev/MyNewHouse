import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addSurnameField1617664862991 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"surname",
                type:"varchar",
                length:"50",
                isNullable:true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","surname")
    }

}
