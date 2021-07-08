import express from 'express';
const router = express.Router();
import * as quizService from '../service/quiz-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await quizService.getAllQuizs())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await quizService.getQuizById(req.params.id))));
router.put('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await quizService.updateQuiz(req.params.id,req.body))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await quizService.createQuiz(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).json(await quizService.deleteQuiz(req.params.id))));

export default router;