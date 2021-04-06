import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class createFieldPlanInTheUser1617672470501 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"id_plan",
                type:"int",
                default:1
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","id_plan")
    }

}
