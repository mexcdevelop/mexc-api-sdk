import { Base } from './base';

export default class Common extends Base {
  constructor(apiKey = '', apiSecret = '') {
    super(apiKey, apiSecret);
  }
}
