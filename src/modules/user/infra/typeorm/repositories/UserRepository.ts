
import { EntityRepository, Repository } from 'typeorm'
import {User} from '@modules/user/infra/typeorm/entities/User'

@EntityRepository(User)
class UserRepository extends Repository<User>{

}

export {UserRepository}