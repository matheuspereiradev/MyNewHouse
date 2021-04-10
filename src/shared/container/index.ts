import {container} from 'tsyringe';

import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository';
import IHashProvider from '@modules/user/infra/providers/HashProvider/models/IHashProvider';
import bcryptHashProvider from '@modules/user/infra/providers/HashProvider/implementation/bcryptHashProvider';
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import NodeMeiler from '@shared/infra/providers/mail/implementations/nodeMailerProvider';
import IBillingRepository from '@modules/billing/IRepositories/IBillingRepository';
import {BillingRepository} from '@modules/billing/infra/typeorm/repositories/BillingRepository';
import IGenerateCharge from '@modules/billing/infra/providers/charges/model/IGenerateCreditCardCharge';
import {GenerateChargeFake} from '@modules/billing/infra/providers/charges/fakes/GenerateChargeFake'
import IPlanRepository from '@modules/plans/IRepositories/IPlanRepository';
import {PlanRepository} from '@modules/plans/infra/typeorm/repositories/PlanRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IHashProvider>('HashProvider', bcryptHashProvider);
container.registerSingleton<ISendMail>('SendMail',NodeMeiler);
container.registerSingleton<IBillingRepository>('BillingRepository',BillingRepository);
container.registerSingleton<IPlanRepository>('PlanRepository',PlanRepository);

//TODO COLOCAR GERADOR CORRETO
container.registerSingleton<IGenerateCharge>('GenerateRemoteCharge',GenerateChargeFake);