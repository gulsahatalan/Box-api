import db from "../models/_sequelize_setup_.js"
import logger from '../service/logging-service.js'

export async function getAll(){
  return await db.userList.findAll(    
    {
      // include: [
      //   { model: db.word},
      // ]
    }); 
}

export async function findById(pId){
  return await db.userList.findOne({
    where: {id: pId},
    include: [
      { model: db.quiz},
    ]
  });
}

export async function create(pEntity){
  return await db.userList.create(pEntity);
}

export async function remove(pId){
  return await db.userList.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.userList.update(pUpdatedEntity, {
    where: { id: pId }
  });
}