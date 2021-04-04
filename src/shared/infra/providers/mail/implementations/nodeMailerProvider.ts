
import nodemailer, { Transporter } from 'nodemailer';
import handlebar from 'handlebars';
import fs from 'fs';
import ISendMail from '../model/ISendMail';
import emailConfig from '@config/email';
import {resolve} from 'path'

class NodeMailerProvider implements ISendMail {

    private client:Transporter;  

    constructor(){
        nodemailer.createTestAccount().then(account =>{
            const transporter = nodemailer.createTransport({
                host:account.smtp.host,
                port:account.smtp.port,
                secure:account.smtp.secure,
                auth:{
                    user:account.user,
                    pass:account.pass
                }
            });

            this.client = transporter;
        });
    }

    public async sendEmail(to:string,subject:string,variables:object,model:string):Promise<string>{

        const path = resolve(__dirname,"..","views",model);
        const templateFileContent = fs.readFileSync(path).toString('utf-8');
        const mailTemplateParse=handlebar.compile(templateFileContent);

        const html = mailTemplateParse(variables)

        const msg = await this.client.sendMail({
            to,
            subject,
            html,
            from:emailConfig.email.defaultEmail
        });

        return nodemailer.getTestMessageUrl(msg).toString();

    }
}

export default NodeMailerProvider;