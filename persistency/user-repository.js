import db from "../models/_sequelize_setup_.js"
import logger from '../service/logging-service.js'

export async function getAll(){
  return await db.player.findAll();   
    
}

export async function findById(pId){
  return await db.player.findOne({
    where: {id: pId},
    include: [
      { model: db.quiz},
    ]
  });
}

export async function create(pEntity){
  return await db.player.create(pEntity);
}

export async function remove(pId){
  return await db.player.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.player.update(pUpdatedEntity, {
    where: { id: pId }
  });
}

export async function send(pId, pUpdatedEntityuserId, quizId, wordId, pAnswer){
  return await db.player.send(userId, quizId, wordId, pAnswer, {
    where: { id: pId },
    include: [
      { model: db.userAnswer,
        where: {
          found:{
            [Op.gt]: +1
          },
          userId: pUserId
        }
      }
    ]
  });
}