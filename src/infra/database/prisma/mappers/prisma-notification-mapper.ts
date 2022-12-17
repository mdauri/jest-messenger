import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      canceldAt: notification.canceledAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: PrismaNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceldAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
