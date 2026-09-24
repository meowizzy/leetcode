type Listener<T> = (value: T) => void;

type MyUser = {
  name: string;
  email: string;
}

class UserStore {
  private listeners = new Set<Listener<MyUser>>();

  subscribe(listener: Listener<MyUser>) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  setUser(user: MyUser) {
    this.listeners.forEach((listener) => listener(user));
  }
}

const userStore = new UserStore();

userStore.subscribe(console.log);

userStore.setUser({
  name: "Ivan",
  email: "Ivanov"
});