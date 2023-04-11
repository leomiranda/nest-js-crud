import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
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
}
