import db from "../models/_sequelize_setup_.js"
import logger from '../service/logging-service.js'

export async function getAll(){
  return await db.enrollment.findAll(
    {
      include: [
        { model: db.student},
        { model: db.userList, 
          include: [
            { model: db.word},
            { model: db.teacher},
          ]
        }
      ]
    }
  ); 
}

export async function getAllByStundentId(pStudentId){
  return await db.enrollment.findAll({
    where: {
      studentId: pStudentId
    },
    include: [
      { model: db.student},
      { model: db.userList, 
        include: [
          { model: db.word},
          { model: db.teacher},
        ]
      }
    ]
  }); 
}

export async function getAllByTeacherId(pTeacherId){
  return await db.enrollment.findAll({
    include: [
      { model: db.student},
      { model: db.userList, 
        include: [
          { model: db.word},
          { 
            model: db.teacher,
            where: {
              id: pTeacherId
            }
          },
        ]
      }
    ]
  }); 
}

export async function getAllByLectureId(pLectureId){
  return await db.enrollment.findAll({
    include: [
      { model: db.student},
      { model: db.userList, 
        include: [
          { 
            model: db.word,
            where: {
              id: pLectureId
            }},
          { 
            model: db.teacher
          },
        ]
      }
    ]
  }); 
}

export async function findById(pId){
  return await db.enrollment.findOne({
    where: {id: pId},
    include: [
      { model: db.student},
      { model: db.userList, 
        include: [
          { model: db.word},
          { model: db.teacher},
        ]
      }
    ]
  });
}

export async function create(pEntity){
  return await db.enrollment.create(pEntity);
}

export async function remove(pId){
  return await db.enrollment.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.enrollment.update(pUpdatedEntity, {
    where: { id: pId }
  });
}