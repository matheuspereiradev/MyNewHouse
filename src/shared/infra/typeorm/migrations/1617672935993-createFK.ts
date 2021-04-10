import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class createFK1617672935993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("tb_user",new TableForeignKey({
            
                name:"fk_user_plans",
                referencedTableName:"tb_plans",
                referencedColumnNames:["id"],
                columnNames:["id_plan"],
                onUpdate:"CASCADE"
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tb_user","fk_user_plans")
    }

}
