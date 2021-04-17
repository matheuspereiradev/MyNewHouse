import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class createSlugField1618161354198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"slug",
                type:"varchar",
                length:"25",
                isNullable:true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","slug")
    }

}
