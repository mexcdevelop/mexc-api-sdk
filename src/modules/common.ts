import { Market } from './market';

export class Common extends Market {
  /**
   * Test Connectivity
   */
  public ping() {
    const res = this.publicRequest('GET', '/ping')
    return JSON.parse(res.getBody())
  }

  /**
   * Check Server Time
   */
  public time() {
    const res = this.publicRequest('GET', '/time')
    return JSON.parse(res.getBody())
  }
}