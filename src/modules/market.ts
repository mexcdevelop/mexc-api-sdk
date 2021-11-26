import { Base } from './base';

export default class Market extends Base {
  constructor(apiKey = '', apiSecret = '') {
    super(apiKey, apiSecret);
  }
}
