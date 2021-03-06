import db from "../models/_sequelize_setup_.js"
import faker from 'faker';
import { Sequelize } from "sequelize";
const Op = Sequelize.Op;

export default function(){}

setTimeout(async () => {
/*
    let player1 = await createPlayer();
    let player2 = await createPlayer();
    let player3 = await createPlayer();

    let quiz1 = await createQuiz(1);
    let quiz2 = await createQuiz(2);
    let quiz3 = await createQuiz(3);

    let word1 = await createWord("der Tisch", "Masa");
    let word2 = await createWord("das Handy", "Cep Telefonu");
    let word3 = await createWord("der Computer", "Bilgisayar");
    let word4 = await createWord("das Buch", "Kitap");
    let word5 = await createWord("die Bäckerei", "Pastahane");
    let word6 = await createWord("die Wand", "Duvar");

    let quizContainer11 = await addWordToQuiz(word1.get('id'), quiz1.get('id'));
    let quizContainer12 = await addWordToQuiz(word2.get('id'), quiz1.get('id'));
    let quizContainer13 = await addWordToQuiz(word3.get('id'), quiz1.get('id'));
    let quizContainer14 = await addWordToQuiz(word4.get('id'), quiz1.get('id'));
    let quizContainer15 = await addWordToQuiz(word5.get('id'), quiz1.get('id'));
    let quizContainer24 = await addWordToQuiz(word4.get('id'), quiz2.get('id'));
    let quizContainer25 = await addWordToQuiz(word5.get('id'), quiz2.get('id'));
    let quizContainer26 = await addWordToQuiz(word6.get('id'), quiz2.get('id'));

    startQuiz(player1.get('id'), quiz1.get('id'));

    await answerQuestion(player1.get('id'), quizContainer11.get('id'));
    await answerQuestion(player1.get('id'), quizContainer12.get('id'));
    await answerQuestion(player1.get('id'), quizContainer13.get('id'));
    await answerQuestion(player1.get('id'), quizContainer14.get('id'));
    await answerQuestion(player1.get('id'), quizContainer14.get('id'));
    await answerQuestion(player1.get('id'), quizContainer14.get('id'));

    let res = await getWordList(quiz1.get('id'), player1.get('id'));
    
    */

    //let res = await getWordList(1, 1);
    //console.log(res)
}, 5*1000); 


async function getWordList(pQuizId, pPlayerId){
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
            // include: [
            //   { model: db.playerAnswer,
            //     where: {
            //       correct:{[Op.lte]: 5},
            //       playerId: pPlayerId
            //     }
            //   }
            // ]
        }    
        ]
      });
}


async function answerQuestion(pPlayerId, pQuizContainerId){

    let answer = await db.playerAnswer.findOne({
        where: 
        {
            playerId: pPlayerId,
            quizContainerId: pQuizContainerId
        }
    });
    
    if(!answer){
        await db.playerAnswer.create({
            playerId: pPlayerId,
            quizContainerId: pQuizContainerId,
            correct: 1
        });
    }else{
        answer.increment(['correct'], { by: 1});
    }
}


async function startQuiz(pPlayerId, pQuizId){
    return await db.playerQuiz.create({
        playerId: pPlayerId,
        quizId: pQuizId
    });
}

async function addWordToQuiz(pWordId, pQuizId){
    return await   db.quizContainer.create({
        quizId: pQuizId,
        wordId: pWordId
    });
}

async function createPlayer(){
    return await db.player.create({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.email()
      });
}

async function createQuiz(pNumber){
    return await db.quiz.create({
        name: `Quiz ${pNumber}`//faker.animal.type()
    });
}

async function createWord(pWord, pMeaning){
    return await db.word.create({
        name: pWord,
        meaning: pMeaning
      });
}