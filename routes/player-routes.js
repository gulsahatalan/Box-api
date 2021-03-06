import express from 'express';
const router = express.Router();
import * as userService from '../service/player-service.js'

import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).json(await userService.getAllUsers())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await userService.getUserById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await userService.createUser(req.body))));
router.put('/:id', asyncHandler(async (req, res, next) => res.status(200).json(await userService.updateUser(req.params.id,req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).json(await userService.deleteUser(req.params.id))));
// router.get('/:count', asyncHandler(async (req, res, next) => res.status(200).json(await userService.countGivenAnswer(req.params.id))));
export default router;