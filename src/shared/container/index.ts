import {container} from 'tsyringe';

import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);