import { IAuthJob } from '@auth/interface/auth.interface';
import { BaseQueue } from '@service/queue/base.queue';

class AuthQueue extends BaseQueue {
  constructor() {
    super('auth');
  }

  public addAuthUserJob(name: string, data: IAuthJob): void {
    this.addJob(name, data);
  }
}

export const authQueue: AuthQueue = new AuthQueue();
