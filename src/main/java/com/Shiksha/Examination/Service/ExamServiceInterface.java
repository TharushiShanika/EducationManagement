package com.Shiksha.Examination.Service;

import com.Shiksha.Examination.Model.Exam;
import java.util.List;
import java.util.Optional;

public interface ExamServiceInterface {
    String save(Exam examination);
    List<Exam> getAllExams();

    void deleteExam(String examId);

    Exam updateExam(Exam examination);

    Optional<Exam> findById(String examId);
}
