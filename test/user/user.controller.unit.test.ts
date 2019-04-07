import IUserRepository from '../../src/data/repository/UserRepository/IUserRepository';
import UserEntity from '../../src/data/entities/UserEntity';
import UserRepositoryMock from '../../src/data/repository/UserRepository/UserRepositoryMock';
import UserController from '../../src/presentation/controllers/UserController';
import GetUserLoginQuery from '../../src/domain/queries/GetUserLoginQuery';

let userRepository: IUserRepository;
let userController: UserController;
let user: UserEntity;

describe('User controller and domain, query', () => {

  beforeAll(async (done) => {
    userRepository = new UserRepositoryMock();
    userController = new UserController(userRepository);
    user = await userRepository.findOne();
    done();
  });

  it('should get a user ', async (done) => {
    const query: GetUserLoginQuery = {
      username: 'admin',
    };
    const userFind = await userController.show(query);

    expect(query.username).toEqual(userFind.username);
    done();
  });
});
