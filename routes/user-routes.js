import express from 'express';
const router = express.Router();
import * as userService from '../service/user-service.js'

import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await userService.getAllClasses())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await userService.getClassById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await userService.createClass(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await userService.deleteClass(req.params.id))));

export default router;