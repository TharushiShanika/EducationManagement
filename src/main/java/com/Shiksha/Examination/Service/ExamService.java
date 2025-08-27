package com.Shiksha.Examination.Service;


import com.Shiksha.Examination.Model.Exam;
import com.Shiksha.Examination.Repo.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamService  implements ExamServiceInterface {

    @Autowired
    private ExamRepository ExamRepository;



    @Override
    public String save(Exam examination) {
        return ExamRepository.save(examination).getExamId();

    }
    @Override
    public List<Exam> getAllExams(){
        return ExamRepository.findAll();
    }

    @Override
    public void deleteExam(String examId){
    ExamRepository.deleteById(examId);

    }
    @Override
    public Exam updateExam(Exam examination) {
        // Check if examId exists
        Optional<Exam> optionalExam = ExamRepository.findById(examination.getExamId());

        if (optionalExam.isPresent()) {
            // If examId exists, update the existing exam object
            Exam existingExam = optionalExam.get();

            existingExam.setModuleName(examination.getModuleName());
            existingExam.setDate(examination.getDate());
            existingExam.setTime(examination.getTime());
            existingExam.setVenue(examination.getVenue());

            return ExamRepository.save(existingExam);
        } else {
           return null;
        }
    }
    @Override
    public Optional<Exam> findById(String examId) {
        return ExamRepository.findById(examId);
    }

}
