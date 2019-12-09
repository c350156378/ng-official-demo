/*
 * @Author: your name
 * @Date: 2019-12-02 18:22:37
 * @LastEditTime: 2019-12-07 17:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\server2\src\core\http-exception.filter.ts
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

import {Request, Response} from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    //const status = exception.getStatus();


    response
      .status(400)
      .json({
        statusCode:400,
        timestamp:new Date().toISOString(),
        path:request.url
      });
    
  }
}
