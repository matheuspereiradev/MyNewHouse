import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTablePlains1617671876032 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_plans",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name:"name",
                    type:"varchar",
                    length:"45"
                },
                {
                    name:"image_amount",
                    type:"int",
                    default:1

                },
                {
                    name:"video_amount",
                    type:"int",
                    default:0
                },
                {
                    name:"monthly_value",
                    type:"numeric(6,2)",
                },
                {
                    name:"ads_amount",
                    type:"int",
                    default:1
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"CURRENT_TIMESTAMP"
                },
                {
                    name:"deleted_at",
                    type:"timestamp",
                    isNullable:true
                }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_plans")
    }

}
