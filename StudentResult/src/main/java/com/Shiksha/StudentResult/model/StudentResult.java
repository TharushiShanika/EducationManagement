package com.Shiksha.StudentResult.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder

@Document(collection = "Result")
public class StudentResult {


        @Id
        private String _id;
        private String StudentName;
        private int Score;

        private String Grade;

        public StudentResult(String _id, String studentName, int score, String grade) {
                this._id = _id;
                this.StudentName = studentName;
                this.Score = score;
                this.Grade = grade;
        }

        public StudentResult() {
        }

        public String get_id() {
                return _id;
        }

        public void set_id(String _id) {
                this._id = _id;
        }

        public String getStudentName() {
                return StudentName;
        }

        public void setStudentName(String studentName) {
                this.StudentName = studentName;
        }

        public int getScore() {
                return Score;
        }

        public void setScore(int score) {
                this.Score = score;
        }

        public String getGrade() {
                return Grade;
        }

        public void setGrade(String grade) {
                this.Grade = grade;
        }

        @Override
        public String toString() {
                return "StudentResult{" +
                        "_id='" + _id + '\'' +
                        ", StudentName='" + StudentName + '\'' +
                        ", Score=" + Score +
                        ", Grade='" + Grade + '\'' +
                        '}';
        }

}

