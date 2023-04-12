import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS',
      description: 'NestJS Course',
      tags: ['node', 'nestjs', 'javascript'],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string): Course {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any): Course {
    const newCourse = {
      id: Date.now(),
      ...createCourseDto,
    };

    this.courses.push(newCourse);

    return newCourse;
  }

  update(id: string, updateCourseDto: any): Course {
    const existingCourse = this.findOne(id);

    if (existingCourse) {
      existingCourse.name = updateCourseDto.name ?? existingCourse.name;
      existingCourse.description =
        updateCourseDto.description ?? existingCourse.description;
      existingCourse.tags = updateCourseDto.tags ?? existingCourse.tags;
    }

    return existingCourse;
  }

  remove(id: string): Course {
    const courseIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    const course = this.courses[courseIndex];

    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1);
    }

    return course;
  }
}
