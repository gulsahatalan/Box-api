import * as wordRepository from '../persistency/word-repository.js'
import db from "../models/_sequelize_setup_.js"
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

export async function updateWord(pId, pUpdateEntity){
    return await wordRepository.update(pId, pUpdateEntity);
}

export async function getWordListByQuizId(quizId, playerId){
    return await wordRepository.findWordsByQuizId(quizId, playerId);
}

export async function checkGivenAnswer(quizId, playerId, wordId, answer){
    let result = false;
    // word bilgisini bul
    let word = await wordRepository.findById(wordId);

    if(word.meaning.toLowerCase() == answer.toLowerCase()){
        
        let quizContainer = await db.quizContainer.findOne({
            where:{
                wordId: wordId,
                quizId: quizId
            }
        });

        let answer = await db.playerAnswer.findOne({
            where:{
                playerId: playerId,
                quizContainerId: quizContainer.get('id')
            }
        });
        
        if(!answer){
            await db.playerAnswer.create({
                playerId: playerId,
                quizContainerId: quizContainer.get('id'),
                correct: 1
            });
            
        }else{
            await answer.increment(['correct'], { by: 1});
            
        }
      
        result = true;
    }
   
    return {result}
}

