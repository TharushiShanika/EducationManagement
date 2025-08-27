package com.Shiksha.Examination.Controller;

import com.Shiksha.Examination.Model.Exam;
import com.Shiksha.Examination.Service.ExamService;
import com.Shiksha.Examination.exception.ExamNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/Examination")
@CrossOrigin ("http://localhost:3000")
public class ExamController {
    @Autowired
    private ExamService examService;


    @PostMapping("/save")
    public String saveExam(@RequestBody Exam exam) {
        return examService.save(exam);
    }

    @GetMapping("/all")
    public List<Exam> getAllExams() {
        return examService.getAllExams();
    }

    @GetMapping("/{examId}")
    Exam getExamById(@PathVariable String examId) {
        return examService.findById(examId).orElseThrow(() -> new ExamNotFoundException(examId));

    }


    @DeleteMapping("/{examId}")
    public void deleteExam(@PathVariable String examId) {
        examService.deleteExam(examId);
    }


    @PutMapping("/{examId}")
    public ResponseEntity<Exam> updateExam(@PathVariable String examId, @RequestBody Exam exam) {
        exam.setExamId(examId);
        Exam updatedExam = examService.updateExam(exam);
        return ResponseEntity.ok(updatedExam);

    }

}
