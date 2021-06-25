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

router.get('/students/:studentId', asyncHandler(async (req, res, next) =>{
    let enrollments = await enrollmentService.getEnrollmentsByStundentId(req.params.studentId);
    res.status(200).send(enrollments);
}));

router.get('/teachers/:teacherId', asyncHandler(async (req, res, next) =>{
    let enrollments = await enrollmentService.getEnrollmentsByTeacherId(req.params.teacherId);
    res.status(200).send(enrollments);
}));

router.get('/lectures/:lectureId', asyncHandler(async (req, res, next) =>{
    let enrollments = await enrollmentService.getEnrollmentsByLectureId(req.params.lectureId);
    res.status(200).send(enrollments);
}));

router.get('/classes/:classId', asyncHandler(async (req, res, next) => {
    let enrollments = await enrollmentService.getEnrollmentsByInstructorId(req.params.classId);
    res.status(200).send(enrollments);
}));

export default router;