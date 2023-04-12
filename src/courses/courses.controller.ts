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
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(): Course[] {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Course {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() course: any): Course {
    return this.coursesService.create(course);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() course: any): Omit<Course, 'id'> {
    return this.coursesService.update(id, course);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Course {
    return this.coursesService.remove(id);
  }
}
