import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateFieldSexo1618778187788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"gender",
                type:"varchar",
                length:"1",
                isNullable:true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","gender")
    }

}
