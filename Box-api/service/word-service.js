import * as wordRepository from '../persistency/word-repository.js'
import config from '../environment-config.json';


export async function createWord(pLecture){
    return await wordRepository.create(pLecture);
}

export async function deleteWord(pId){
    return await wordRepository.remove(pId);
}

export async function getAllWords(){
    return await wordRepository.getAll();
}

export async function getWordById(pId){
    return await wordRepository.findById(pId);
}

export async function updateLecture(pId, pUpdateEntity){
    return await wordRepository.update(pId, pUpdateEntity);
}