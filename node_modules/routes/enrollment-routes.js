import express from 'express';
var router = express.Router();
import * as enrollmentService from '../service/enrollment-service.js'

import asyncHandler from 'express-async-handler';

router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await enrollmentService.getEnrollmentById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await enrollmentService.createEnrollment(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await enrollmentService.deleteEnrollment(req.params.id))));

router.get('/', asyncHandler(async (req, res, next) => {
    let enrollments = await enrollmentService.getAllEnrollments();
    res.status(200).send(enrollments);
}));

router.get('/quizs/:quizId', asyncHandler(async (req, res, next) =>{
    let enrollments = await enrollmentService.getQuizQuestionsByQuizId(req.params.quizId);
    res.status(200).send(enrollments);
}));

// router.get('/teachers/:teacherId', asyncHandler(async (req, res, next) =>{
//     let enrollments = await enrollmentService.getEnrollmentsByTeacherId(req.params.teacherId);
//     res.status(200).send(enrollments);
// }));

router.get('/words/:wordId', asyncHandler(async (req, res, next) =>{
    let quizQuestions = await enrollmentService.getQuizQuestionsByWordId(req.params.wordId);
    res.status(200).send(quizQuestions);
}));

// router.get('/classes/:classId', asyncHandler(async (req, res, next) => {
//     let enrollments = await enrollmentService.getEnrollmentsByInstructorId(req.params.classId);
//     res.status(200).send(enrollments);
// }));

export default router;