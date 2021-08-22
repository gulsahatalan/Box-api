import * as userRepository from '../persistency/player-repository.js'
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
// static async sendUserAnswerById(userId, quizId, wordId, pAnswer) {

//     let response = await axios.get(`${config.backendURL}/words/quiz`)

//     return response.data
//   }

export async function sendUserAnswerById(userId, quizId, wordId, pAnswer){
    return await userRepository.send(userId, quizId, wordId, pAnswer);
}