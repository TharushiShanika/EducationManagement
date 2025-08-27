package com.Shiksha.StudentResult.Respository;

import com.Shiksha.StudentResult.model.StudentResult;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentResultRepository extends MongoRepository<StudentResult,String> {



}
