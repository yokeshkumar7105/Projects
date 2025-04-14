package com.example.CourseRegistrationSystem.controller;


import com.example.CourseRegistrationSystem.model.Course;
import com.example.CourseRegistrationSystem.model.CourseRegistry;
import com.example.CourseRegistrationSystem.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://192.168.55.163:5501/")
public class CourseController {

    @Autowired
    CourseService service;

    @GetMapping("/courses")
    public List<Course> getAllCourses(){
        return service.getAllCourses();
    }

    @GetMapping("/courses/enroll")
    public List<CourseRegistry> getEnrolledStudents(){
        return service.getEnrolledStudents();
    }

    @PostMapping("/courses/register")
    public String registerCourse(@RequestParam("name") String name,
                                 @RequestParam("emailid") String emailid,
                                 @RequestParam("courseName") String courseName){
        service.registerCourse(name,emailid,courseName);
        return "Congrats "+name+" Enrolment success for "+courseName;
    }
}
