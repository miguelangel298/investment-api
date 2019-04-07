import IUserRepository from '../../src/data/repository/UserRepository/IUserRepository';
import GetUserLoginQuery,
{ GetUserLoginQueryHandler } from '../../src/domain/queries/GetUserLoginQuery';
import UserRepositoryMock from '../../src/data/repository/UserRepository/UserRepositoryMock';

let userRepository: IUserRepository;

describe('User domain and query', () => {
  beforeAll(async (done) => {
    userRepository = new UserRepositoryMock();
    done();
  });

  it('should find a user', async (done) => {
    const getUserLoginQueryHandle = new GetUserLoginQueryHandler(userRepository);
    const user: GetUserLoginQuery = {
      username: 'admin',
    };

    const userFind = await getUserLoginQueryHandle.handle(user);
    expect(user.username).toEqual(userFind.username);
    done();
  });

});
