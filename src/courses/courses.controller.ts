import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(): string {
    return 'This action returns all courses';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a course #${id}`;
  }

  @Post()
  create(@Body() course: any): string {
    return `This action adds a new course with name: ${course.name}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() course: any): string {
    return `This action updates a course #${id} with name: ${course.name}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a course #${id}`;
  }
}
