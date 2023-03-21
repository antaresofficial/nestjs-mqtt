import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MQTT_SERVICE') private client: ClientProxy) {}

  @Get('notifications')
  getNotifications() {
    return this.client.send(
      'notification_channel',
      "It's a Message From Client",
    );
  }
  @Get('process')
  getProcessClientData() {
    return this.client.send('process_channel', '');
  }
}
