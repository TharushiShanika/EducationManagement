package com.Shiksha.Examination.exception;

public class ExamNotFoundException extends RuntimeException {
    public ExamNotFoundException(String examId) {
        super("Could not found the user with examId " + examId);
    }
}