import * as studentRepository from '../persistency/student-repository.js'
import config from '../environment-config.json';


export async function createStudent(pStudent){
    return await studentRepository.create(pStudent);
}

export async function deleteStudent(pId){
    return await studentRepository.remove(pId);
}

export async function getAllStudents(){
    return await studentRepository.getAll();
}

export async function getStudentById(pId){
    return await studentRepository.findById(pId);
}

export async function updateStudent(pId, pUpdateEntity){
    return await studentRepository.update(pId, pUpdateEntity);
}