package com.Shiksha.Examination.Model;



import lombok.Builder;
import lombok.Data;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "Examination")
@Data
@Builder

public class Exam {
    @Id
    private String examId;
    private String ModuleName;
    private String Date;
    private String Time;
    private String Venue;

    public String getExamId() {
        return examId;
    }

    public void setExamId(String examId) {
        this.examId = examId;
    }

    @Override
    public String toString() {
        return "Exam{" +
                "examId='" + examId + '\'' +
                ", ModuleName='" + ModuleName + '\'' +
                ", Date='" + Date + '\'' +
                ", Time='" + Time + '\'' +
                ", Venue='" + Venue + '\'' +
                '}';
    }
}


