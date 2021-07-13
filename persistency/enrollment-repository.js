import db from "../models/_sequelize_setup_.js"
import logger from '../service/logging-service.js'

export async function getAll(){
  return await db.quizQuestion.findAll(
    {
      include: [
        { model: db.quiz},
        { model: db.userList, 
          include: [
            { model: db.word},
            // { model: db.teacher},
          ]
        }
      ]
    }
  ); 
}

export async function getAllByQuizId(pQuizId){
  return await db.quizQuestion.findAll({
    where: {
      quizId: pQuizId
    },
    include: [
      { model: db.quiz},
      { model: db.userList, 
        include: [
          { model: db.word},
          // { model: db.teacher},
        ]
      }
    ]
  }); 
}

// export async function getAllByTeacherId(pTeacherId){
//   return await db.enrollment.findAll({
//     include: [
//       { model: db.quiz},
//       { model: db.userList, 
//         include: [
//           { model: db.word},
//           // { 
//           //   model: db.teacher,
//           //   where: {
//           //     id: pTeacherId
//           //   }
//           // },
//         ]
//       }
//     ]
//   }); 
// }

export async function getAllByWordId(pLectureId){
  return await db.quizQuestion.findAll({
    include: [
      { model: db.quiz},
      { model: db.userList, 
        include: [
          { 
            model: db.word,
            where: {
              id: pWordId
            }},
          // { 
          //   model: db.teacher
          // },
        ]
      }
    ]
  }); 
}

export async function findById(pId){
  return await db.quizQuestion.findOne({
    where: {id: pId},
    include: [
      { model: db.quiz},
      { model: db.userList, 
        include: [
          { model: db.word},
          // { model: db.teacher},
        ]
      }
    ]
  });
}

export async function create(pEntity){
  return await db.quizQuestion.create(pEntity);
}

export async function remove(pId){
  return await db.quizQuestion.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.quizQuestion.update(pUpdatedEntity, {
    where: { id: pId }
  });
}