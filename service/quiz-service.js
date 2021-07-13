import * as quizRepository from '../persistency/quiz-repository.js'
import config from '../environment-config.json';


export async function createQuiz(pQuiz){
    return await quizRepository.create(pQuiz);
}

export async function deleteQuiz(pId){
    return await quizRepository.remove(pId);
}

export async function getAllQuizs(){
    return await quizRepository.getAll();
}

export async function getQuizById(pId){
    return await quizRepository.findById(pId);
}

export async function updateQuiz(pId, pUpdateEntity){
    return await quizRepository.update(pId, pUpdateEntity);
}