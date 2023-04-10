import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return '모든 고양이 확인';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `${id}번 고양이`;
  }

  @Post()
  create(@Body() CreateCatDto: CreateCatDto) {
    return '새 고양이 입양';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() CreateCatDto: CreateCatDto) {
    return `${id}번 고양이 중성화 완료`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `${id}번 고양이 분양`;
  }
}
