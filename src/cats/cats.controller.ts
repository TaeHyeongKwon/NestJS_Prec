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
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `${id}번 고양이`;
  }

  @Post()
  create(@Body() CreateCatDto: CreateCatDto) {
    return this.catsService.create(CreateCatDto);
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
