import { Content } from '@application/entities/content';
import {
  Notification,
  // eslint-disable-next-line prettier/prettier
  NotificationProps
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
