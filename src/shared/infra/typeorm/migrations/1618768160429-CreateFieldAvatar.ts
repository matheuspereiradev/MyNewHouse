import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateFieldAvatar1618768160429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"avatar",
                type:"varchar",
                length:"100",
                isNullable:true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","avatar")
    }

}
