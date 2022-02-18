import { Controller, Get } from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getLottery(): Promise<any> {
    return await lastValueFrom(this.appService.getLottery());
  }
}
