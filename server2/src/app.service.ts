import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { of, Observable, tap } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getLottery(): Observable<AxiosResponse<any, any>> {
    return this.httpService
      .get('https://www.sojson.com/open/api/lunar/json.shtml')
      .pipe(
        tap((rr) => console.log(rr.data)),
        map((res) => res.data),
        timeout(5000),
        catchError((error) => of(`Bad Promise: ${error}`)),
      );
  }
}
