import express from 'express';
const router = express.Router();
import * as wordService from '../service/word-service.js'

import asyncHandler from 'express-async-handler';



router.get('/quiz-words', asyncHandler(async function (req, res, next) {
    let quizId = req.query.quizId;
    let playerId = req.query.playerId; console.log(quizId, playerId)
    let wordList = await wordService.getWordListByQuizId(quizId, playerId)
   
    return res.status(200).send(wordList);
    
}));
router.get('/check', asyncHandler(async function (req, res, next) {
    let quizId = req.query.quizId;
    let playerId = req.query.playerId;
    let wordId = req.query.wordId;
    let answer = req.query.answer;

    let result = await wordService.checkGivenAnswer(quizId, playerId, wordId, answer);
    
    return res.status(200).send(result);
}));


router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.getAllWords())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.getWordById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.createWord(req.body))));
router.put('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.updateWord(req.params.id,req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).json(await wordService.deleteWord(req.params.id))));





export default router;

