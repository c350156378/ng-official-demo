/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-03 14:00:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\service\dialog.service.ts
 */
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';


@Injectable()
export class DialogService {

  constructor() { }

  confirm(msg?:string):Observable<boolean>{
    const confirmation = window.confirm(msg || '确定离开吗?');
    return of(confirmation);
  }

}
