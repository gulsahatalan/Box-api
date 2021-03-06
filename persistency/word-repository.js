import db from "../models/_sequelize_setup_.js"
import { Sequelize } from "sequelize";
const Op = Sequelize.Op;

export async function getAll(){
  return await db.word.findAll(); 
}

export async function findById(pId){
  return await db.word.findByPk(pId);
}

export async function create(pEntity){
  return await db.word.create(pEntity);
}

export async function remove(pId){
  return await db.word.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.word.update(pUpdatedEntity, {
    where: { id: pId }
  });
}

export async function findWordsByQuizId(pQuizId, pPlayerId){
  return await db.word.findAll({
    include: [
      { model: db.quiz,
        where:{
          id: pQuizId
        },
        include: [
            { model: db.playerQuiz,
                where:{
                  playerId: pPlayerId
                }
            }
        ]
      },
      { model: db.quizContainer, 
        where:{
            quizId: pQuizId
        },
        include: [
          { model: db.playerAnswer,
            where: {
              correct:{[Op.lte]: 5},
              playerId: pPlayerId
            }
          }
        ]
    }    
    ]
  });
}