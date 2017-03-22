import { schema } from 'normalizr';

export const courseSchema = new schema.Entity('courses');
export const curriculumSchema = new schema.Entity('curricula', {
  courses: [courseSchema]
});
