import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addFieldPropertyCOmplemnt1618099127903 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_property",new TableColumn(
            {
                name:"complement",
                type:"varchar",
                length:"20",
                isNullable:true
            })
        )

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_property","complement")
    }

}
