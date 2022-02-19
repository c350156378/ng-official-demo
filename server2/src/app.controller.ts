import {
  Controller,
  Get,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { AppService } from './app.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { writeFile } from 'fs/promises';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('heroes')
  async getHero() {
    return this.appService.getHero();
  }

  @Get('caipiao')
  async getLottery(@Req() req: Request): Promise<any> {
    return await lastValueFrom(
      this.appService.getLottery(+req.query.page, +req.query.pageSize),
    );
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    // fs.writeFile();
    const ext = file.originalname.split('.')[1];
    const filename = Date.now();
    try {
      const aaa = await writeFile(
        'uploads/' + filename + '.' + ext,
        file.buffer,
        {},
      );
      return { message: '上传成功' };
    } catch (error) {
      return {
        message: '上传失败',
        error,
      };
    }
  }
}
