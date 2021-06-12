import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.student.findAll(); 
}

export async function findById(pId){
  return await db.student.findByPk(pId);
}

export async function create(pStudent){
  return await db.student.create(pStudent);
}

export async function remove(pId){
  return await db.student.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedStudent){
  return await db.student.update(pUpdatedStudent, {
    where: { id: pId }
  });
}