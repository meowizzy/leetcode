interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IUserService {
  getUser(id: number): Promise<IUser>;
}

class LoggingUserService implements IUserService {
  constructor(private service: IUserService) {}

  async getUser(id: number): Promise<IUser> {
    console.log("getUser:", id);

    const user = await this.service.getUser(id);

    console.log("result:", user);

    return user;
  }
}

class RetryUserService implements IUserService {
  constructor(private service: IUserService) {}

  async getUser(id: number): Promise<IUser> {
    let attempts = 0;

    while (attempts < 3) {
      try {
        return await this.service.getUser(id);
      } catch (e) {
        attempts++;

        if (attempts >= 3) {
          throw e;
        }

        console.log("Retrying to get user...");
      }
    }

    throw new Error("Unexpected error");
  }
}

class CachedUserService implements IUserService {
  private cachedUsers = new Map<number, IUser>();

  constructor(private service: IUserService) {}

  async getUser(id: number): Promise<IUser> {
    const existingUser = this.cachedUsers.get(id);

    if (existingUser) return existingUser;

    const user = await this.service.getUser(id);

    this.cachedUsers.set(id, user);

    return user;
  }
}

class ApiUserService implements IUserService {
  async getUser(id: number): Promise<IUser> {
    const response = await fetch(`/users/${id}`);

    return await response.json();
  }
}

const loggingUserService = new RetryUserService(new LoggingUserService(new CachedUserService(new ApiUserService())));

loggingUserService.getUser(12);