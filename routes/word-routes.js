import express from 'express';
const router = express.Router();
import * as wordService from '../service/word-service.js'

import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.getAllWords())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.getWordById(req.params.id))));
router.get('/quiz/:id', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.getWordListByQuizId(req.query.id, req.query.userId))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.createWord(req.body))));
router.put('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.updateWord(req.params.id,req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).json(await wordService.deleteWord(req.params.id))));



export default router;

