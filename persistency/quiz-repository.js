import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.quiz.findAll(); 
}

export async function findById(pId){
  return await db.quiz.findByPk(pId);
}

export async function create(pQuiz){
  return await db.quiz.create(pQuiz);
}

export async function remove(pId){
  return await db.quiz.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedQuiz){
  return await db.quiz.update(pUpdatedQuiz, {
    where: { id: pId }
  });
}

