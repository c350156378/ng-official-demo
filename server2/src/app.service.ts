/*
 * @Author: your name
 * @Date: 2019-12-02 17:48:24
 * @LastEditTime: 2019-12-07 17:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\server2\src\app.service.ts
 */
import { Injectable, HttpService } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { AxiosResponse } from 'axios';

export interface Hero {
  id: number;
  name: string;
}

@Injectable()
export class AppService {
  private HEROES = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
  ]
  result: any;

  constructor(private readonly httpService: HttpService) { }

  getHeroes(): Hero[] {
    return this.HEROES;
  }

  getLottery(): any {

    
    for (let i = 2007; i < 2008; i++) {
      let _result;
      for (let j = 1; j < 2; j++) {
        let str;
        if (j < 10) {
          str = i + '00' + j;
        } else if (j >= 10 && j < 100) {
          str = i + '0' + j;
        } else {
          str = i + '' + j
        };
        
        this.httpService
          .post('https://www.cjcp.com.cn/ajax_kj.php?jsoncallback=jsonp1532326738107&dlt_qs=' + str)
          .subscribe(res => {
            console.log(res.data);
        // return;
        //     let _data = res.data.split('*');
        //     _result = [_data[1], _data[4], _data[5], _data[6], _data[7], _data[8], _data[9], _data[10]];
          });
      }
      this.result.push(_result);
    }


    return this.result;
  }
}
