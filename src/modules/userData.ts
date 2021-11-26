import { Base } from './base';

export class UserData extends Base {
  constructor(apiKey = '', apiSecret = '') {
    super(apiKey, apiSecret);
  }
}
