package com.Shiksha.StudentResult.Service;

import com.Shiksha.StudentResult.Respository.StudentResultRepository;

import com.Shiksha.StudentResult.model.StudentResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class StudentResultService {
    @Autowired
    private StudentResultRepository StudentResultRepository;



    public void saveorUpdate(StudentResult studentResult) {
        StudentResultRepository.save(studentResult);

    }


    public Iterable<StudentResult> listAll() {

        return StudentResultRepository.findAll();
    }



    public void deleteStudentResult(String id){
        StudentResultRepository.deleteById(id);

    }

    public StudentResult getStudentResultByID(String id) {
        return StudentResultRepository.findById(id).get();
    }



    }



