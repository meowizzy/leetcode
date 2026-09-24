type ApiUser = {
  id: number;
  first_name: string;
  last_name: string;
};

type TUser = {
  id: number;
  firstName: string;
  lastName: string;
};

interface UserApi {
  getUser(id: number): Promise<ApiUser>;
}

class ApiUserClient implements UserApi {
  async getUser(id: number): Promise<ApiUser> {
    const response = await fetch(`/users/${id}`);

    return response.json();
  }
}

interface IMyUserService {
  getUser(id: number): Promise<TUser>;
}

class UserApiAdapter implements IMyUserService {
  constructor(private api: UserApi) {}

  async getUser(id: number): Promise<TUser> {
    const response = await this.api.getUser(id);

    return {
      id: response.id,
      firstName: response.first_name,
      lastName: response.last_name,
    };
  }
}

const newUser = new UserApiAdapter(new ApiUserClient());