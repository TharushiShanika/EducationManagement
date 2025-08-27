package com.Shiksha.Examination.Repo;

import com.Shiksha.Examination.Model.Exam;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;



@Repository
public interface ExamRepository extends MongoRepository<Exam,String> {




}
