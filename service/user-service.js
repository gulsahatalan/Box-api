import * as userRepository from '../persistency/user-repository.js'
import config from '../environment-config.json';


export async function createUser(pUser){
    return await userRepository.create(pUser);
}

export async function deleteUser(pId){
    return await userRepository.remove(pId);
}

export async function getAllUsers(){
    return await userRepository.getAll();
}

export async function getUserById(pId){
    return await userRepository.findById(pId);
}

export async function updateUser(pId, pUpdateEntity){
    return await userRepository.update(pId, pUpdateEntity);
}