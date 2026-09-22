interface EmailNotificationParams {
  email: string;
}

interface SmsNotificationParams {
  phone: string;
}

interface PushNotificationParams {
  deviceToken: string;
}

interface NotificationParams {
  email: EmailNotificationParams;
  sms: SmsNotificationParams;
  push: PushNotificationParams;
}

type NotificationTypes = keyof NotificationParams;

interface MyNotification<T extends NotificationTypes> {
  send(message: string, data: NotificationParams[T]): void;
}

class EmailNotification implements MyNotification<"email"> {
  send(message: string, data: EmailNotificationParams) {
    console.log("EmailNotification: " + message + ", Data: " + data.email);
  }
}

class SmsNotification implements MyNotification<"sms"> {
  send(message: string, data: SmsNotificationParams) {
    console.log("SmsNotification: " + message + ", Data: " + data.phone);
  }
}

class PushNotification implements MyNotification<"push"> {
  send(message: string, data: PushNotificationParams) {
    console.log("PushNotification: " + message + ", Data: " + data.deviceToken);
  }
}

interface NotificationMap {
  email: EmailNotification;
  sms: SmsNotification;
  push: PushNotification;
}

const notificationsMap = {
  email: EmailNotification,
  sms: SmsNotification,
  push: PushNotification,
};

const createNotification = <T extends NotificationTypes>(type: T): NotificationMap[T] => {
  const NotificationClass = notificationsMap[type];

  return new NotificationClass() as NotificationMap[T];
};

const emailNotification = createNotification("email");
const smsNotification = createNotification("sms");
const pushNotification = createNotification("push");

emailNotification.send("email notification message", {
  email: "maks14flay@gmail.com"
});

smsNotification.send("sms notification message", {
  phone: "+1213131313131"
});

pushNotification.send("push notification message", {
  deviceToken: "some token"
});
