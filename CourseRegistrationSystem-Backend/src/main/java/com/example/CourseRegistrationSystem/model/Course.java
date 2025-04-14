package com.example.CourseRegistrationSystem.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Course {

    @Id
    private String course_id;
    private String course_name;
    private String trainer;
    private int duration;
}
