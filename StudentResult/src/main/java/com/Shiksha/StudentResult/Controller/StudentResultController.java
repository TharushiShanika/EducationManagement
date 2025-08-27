package com.Shiksha.StudentResult.Controller;

import com.Shiksha.StudentResult.Service.StudentResultService;
import com.Shiksha.StudentResult.model.StudentResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/Result")
@CrossOrigin (origins = "*")
public class StudentResultController {

    @Autowired
    private StudentResultService studentResultService;

    @PostMapping(value="/save")
    public String saveStudentResult(@RequestBody StudentResult studentResult) {
        studentResultService.saveorUpdate(studentResult);
        return studentResult.get_id();
    }

    @GetMapping(value="/all")
    private Iterable<StudentResult> getStudentResults(){
        return studentResultService.listAll();
    }
    @DeleteMapping("delete/{id}")
    private void delete(@PathVariable String id) {


        studentResultService.deleteStudentResult(id);
    }


    @PutMapping("edit/{id}")
    private StudentResult update(@RequestBody StudentResult studentResult,@PathVariable(name="id")String _id){
     studentResult.set_id(_id);
     studentResultService.saveorUpdate(studentResult);
     return studentResult;
    }
    @RequestMapping
    private StudentResult getStudentresult(@PathVariable(name="id")String id){
        return studentResultService.getStudentResultByID(id);
    }
}