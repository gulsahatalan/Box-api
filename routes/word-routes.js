import express from 'express';
const router = express.Router();
import * as wordService from '../service/word-service.js'

import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.getAllWords())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.getWordById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.createWord(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await wordService.deleteWord(req.params.id))));

export default router;