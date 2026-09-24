type EventEmitterListener<A> = (arg: A) => void;

type EventListeners<TEvents extends Record<string, unknown>> = {
  [K in keyof TEvents]: Set<EventEmitterListener<TEvents[K]>>;
};

class EventEmitter<TEvents extends Record<string, unknown>> {
  private map: Partial<EventListeners<TEvents>> = {};

  subscribe<K extends keyof TEvents>(event: K, listener: EventEmitterListener<TEvents[K]>) {
    const listeners = this.map[event] ?? new Set<EventEmitterListener<TEvents[K]>>();

    listeners.add(listener);

    this.map[event] = listeners;

    console.log("subscribed");

    return () => {
      listeners.delete(listener);
    };
  }

  emit<K extends keyof TEvents>(event: K, data: TEvents[K]) {
    const listeners = this.map[event];

    listeners?.forEach((listener) => {
      listener(data);
    });
  }
}

type Events = {
  userCreated: {
    name: string;
    lastName: string;
  };
  userDeleted: number;
};

const eventEmitter = new EventEmitter<Events>();

const unsubscribe= eventEmitter.subscribe("userDeleted", (id) => {
  console.log("delete user by id" + id);
});


eventEmitter.emit("userDeleted", 123);