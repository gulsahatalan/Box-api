import * as userRepository from '../persistency/user-repository.js'
import config from '../environment-config.json';


export async function createClass(pClass){
    return await userRepository.create(pClass);
}

export async function deleteClass(pId){
    return await userRepository.remove(pId);
}

export async function getAllClasses(){
    return await userRepository.getAll();
}

export async function getClassById(pId){
    return await userRepository.findById(pId);
}

export async function updateClass(pId, pUpdateEntity){
    return await userRepository.update(pId, pUpdateEntity);
}