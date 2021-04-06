import {MigrationInterface, QueryRunner} from "typeorm";

export class createFREEplan1617672721834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO `tb_plans` (`name`, `image_amount`, `video_amount`, `monthly_value`, `ads_amount`) VALUES (?,?,?,?,?);",['FREE', '1', '0', '0', '1']);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM `tb_plans` WHERE name = ?;",['FREE'])
    }

}
