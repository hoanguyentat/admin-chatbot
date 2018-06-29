import { SharedService } from './../../shared/shared.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService extends SharedService {

  /**
  * ============================================================================================
  * Intents
  * ============================================================================================
  */
  public getListIntents(): Observable<any> {
    return this.get(this.BASE_URL + 'getdataaaa');
  }
}
