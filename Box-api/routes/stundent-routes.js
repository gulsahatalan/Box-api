import express from 'express';
const router = express.Router();
import * as studentService from '../service/student-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await studentService.getAllStudents())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await studentService.getStudentById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await studentService.createStudent(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await studentService.deleteStudent(req.params.id))));

export default router;