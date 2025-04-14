package com.example.CourseRegistrationSystem.service;

import com.example.CourseRegistrationSystem.model.Course;
import com.example.CourseRegistrationSystem.model.CourseRegistry;
import com.example.CourseRegistrationSystem.repository.CourseRegistryRepository;
import com.example.CourseRegistrationSystem.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepository repo;

    @Autowired
    CourseRegistryRepository regrepo;

    public List<Course> getAllCourses() {
       return repo.findAll();
    }

    public List<CourseRegistry> getEnrolledStudents() {
        return regrepo.findAll();
    }

    public void registerCourse(String name, String emailid, String courseName) {
        CourseRegistry courseregistry = new CourseRegistry(name,emailid,courseName);
        regrepo.save(courseregistry);
    }
}
