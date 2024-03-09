import { HttpHeaders } from '@angular/common/http';

export class Utils {
  static getHttpHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }
}
