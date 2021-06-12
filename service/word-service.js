import * as wordRepository from '../persistency/word-repository.js'
import config from '../environment-config.json';


export async function createLecture(pLecture){
    return await wordRepository.create(pLecture);
}

export async function deleteLecture(pId){
    return await wordRepository.remove(pId);
}

export async function getAllLectures(){
    return await wordRepository.getAll();
}

export async function getLectureById(pId){
    return await wordRepository.findById(pId);
}

export async function updateLecture(pId, pUpdateEntity){
    return await wordRepository.update(pId, pUpdateEntity);
}