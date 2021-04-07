import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableBillings1617822537876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_billing",
            columns:[
                {
                    name:"id",
                    type:"varchar",
                    length:"50",
                    isPrimary:true,
                    isUnique:true
                },
                {
                    name:"barcode",
                    type:"varchar",
                    length:"100"
                },
                {
                    name:"digitable_line",
                    type:"varchar",
                    length:"70"
                },
                {
                    name:"payment_link",
                    type:"varchar",
                    length:"150"
                },
                {
                    name:"our_number",
                    type:"varchar",
                    length:"30"
                },
                {
                    name:"payment_day",
                    type:"timestamp"
                },
                {
                    name:"id_user",
                    type:"varchar",
                    length:"50",
                    isUnique:true
                },
                {
                    name:"billing_value",
                    type:"numeric(6,2)"
                },
                {
                    name:"expiration_date",
                    type:"timestamp"
                },
                {
                    name:"id_product",
                    type:"int"
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
        ],
        foreignKeys:[
            {
                name:"fk_billing_user",
                referencedTableName:"tb_user",
                referencedColumnNames:["id"],
                columnNames:["id_user"],
                onUpdate:"CASCADE"
            },
            {
                name:"fk_billing_plan",
                referencedTableName:"tb_plans",
                referencedColumnNames:["id"],
                columnNames:["id_product"],
                onUpdate:"CASCADE"
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_billing");
    }


}
