import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';


@Injectable()
export class DialogService {

  constructor() { }

  confirm(msg?:string):Observable<boolean>{
    const confirmation = window.confirm(msg || '确定离开吗?');
    return Observable.of(confirmation);
  }

}
