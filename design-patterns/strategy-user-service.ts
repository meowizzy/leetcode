type User = {
  id: number;
  name: string;
};

interface UserApiStrategy {
  getUsers(): Promise<User[]>;
}

const users = [
  {
    id: 123,
    name: "Ivan"
  },
  {
    id: 124,
    name: "Maksim"
  },
  {
    id: 125,
    name: "Dmitriy"
  },
  {
    id: 126,
    name: "Ulugb"
  }
];

function promisedUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    resolve(users);
  });
}

class FetchUserApi implements UserApiStrategy {
  async getUsers(): Promise<User[]> {
    const response = await fetch("/users");

    return response.json();
  }
}

class AxiosUserApi implements UserApiStrategy {
  async getUsers(): Promise<User[]> {
    return promisedUsers(); // here may be axios request
  }
}

class UserService {
  constructor(private api: UserApiStrategy) {}

  setApi(api: UserApiStrategy) {
    this.api = api;
  }

  async getUsers() {
    return this.api.getUsers();
  }
}

const userService = new UserService(new FetchUserApi());

userService.getUsers();

userService.setApi(new AxiosUserApi());