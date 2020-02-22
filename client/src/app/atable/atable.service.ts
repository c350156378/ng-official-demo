/*
 * @Author: your name
 * @Date: 2019-12-16 14:54:57
 * @LastEditTime : 2019-12-19 13:36:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\atable\atable.service.ts
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtableItem } from './atable-datasource';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtableService {

  constructor(private http: HttpClient) { }

  getLottery(sort:string, order:string, page:number, pageSize:number, filter:string, filter2:string) {
    return this.http.get<any>(`http://localhost:3000/caipiao?sort=${sort}&order=${order}&page=${page + 1}&pageSize=${pageSize}&filter=${filter}&filter2=${filter2}`).pipe(
      tap(_ => console.log(_)
      )
    )
  }
}
