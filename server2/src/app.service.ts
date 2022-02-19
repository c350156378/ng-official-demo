import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { of, Observable, tap } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHero() {
    return [
      { id: 1, name: '熊大' },
      { id: 2, name: '熊二' },
      { id: 3, name: '光头强' },
    ];
  }

  getLottery(start = 0, num = 10): Observable<AxiosResponse<any, any>> {
    return this.httpService
      .get(
        `https://api.jisuapi.com/caipiao/history?appkey=6104293ffc4c8af1&caipiaoid=11&issueno=&start=${start}&num=${num}`,
      )
      .pipe(
        tap((rr) => console.log(rr.data)),
        map((res) => res.data.result),
        timeout(5000),
        catchError((error) => of(`Bad Promise: ${error}`)),
      );
  }
}
