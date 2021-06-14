import db from "../models/_sequelize_setup_.js"
import faker from 'faker';

export default function(){}
/*
setInterval(async () => {

  // create teacher
  // create the lecture if not exists
  // create a teacher
  // add the created lecture to the newly vreated teacher
  // find or create an instructor (a teacher with an lecture assignment)
  // add teacher and instructor to the enrollment

  let student = await db.student.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    className: faker.animal.type(),
    age: Math.random()*20
  });

  let lectureList = await db.lecture.findOrCreate(
    { where: {name: "Math"}}
  )

  let teacher = await db.teacher.create(
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }
  )  
  
  teacher.addLecture(lectureList[0]);

  let classList = await db.class.findOrCreate(
    { 
      where: {
        lectureId: lectureList[0].id,
        teacherId: teacher.id
      }
    }
  )
console.log(lectureList)
console.log(classList)
  let enrollment = await db.enrollment.create({
    studentId: student.id,
    instructorId: classList[0].id
  })

}, 5*1000); 

*/