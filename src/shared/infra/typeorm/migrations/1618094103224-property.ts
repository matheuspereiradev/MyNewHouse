import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class property1618094103224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_property",
            columns:[
                {
                    name:"id",
                    type:"varchar",
                    length:"50",
                    isPrimary:true,
                    isUnique:true
                },
                {
                    name:"id_advertiser",
                    type:"varchar",
                    length:"50"
                },
                {
                    name:"street",
                    type:"varchar",
                    length:"70"
                },
                {
                    name:"district",
                    type:"varchar",
                    length:"70"
                },
                {
                    name:"house_number",
                    type:"int"
                },
                {
                    name:"id_city",
                    type:"int"
                },
                {
                    name:"id_contract_type",
                    type:"int"
                },
                {
                    name:"id_property_type",
                    type:"int"
                },
                {
                    name:"amount_value",
                    type:"numeric(10,2)"
                },
                {
                    name:"is_financing",
                    type:"tinyint",
                    default:0
                },
                {
                    name:"latitude",
                    type:"point"
                },
                {
                    name:"longitude",
                    type:"point"
                },
                {
                    name:"amount_bathroom",
                    type:"int"
                },
                {
                    name:"amount_bedroom",
                    type:"int"
                },
                {
                    name:"amount_parking",
                    type:"int"
                },
                {
                    name:"has_pool",
                    type:"tinyint"
                },
                {
                    name:"note",
                    type:"text",
                    isNullable:true
                },
                {
                    name:"length",
                    type:"numeric(6,2)"
                },
                {
                    name:"width",
                    type:"numeric(6,2)"
                }
            ],
            foreignKeys:[
                {
                    name:"fk_property_user",
                    referencedTableName:"tb_user",
                    referencedColumnNames:["id"],
                    columnNames:["id_advertiser"],
                    onUpdate:"CASCADE"
                },{
                    name:"fk_property_property_type",
                    referencedTableName:"tb_property_type",
                    referencedColumnNames:["id"],
                    columnNames:["id_property_type"],
                    onUpdate:"CASCADE"
                },{
                    name:"fk_property_contract_type",
                    referencedTableName:"tb_contract_type",
                    referencedColumnNames:["id"],
                    columnNames:["id_contract_type"],
                    onUpdate:"CASCADE"
                },{
                    name:"fk_property_city",
                    referencedTableName:"tb_city",
                    referencedColumnNames:["id"],
                    columnNames:["id_city"],
                    onUpdate:"CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_property")
    }

}
