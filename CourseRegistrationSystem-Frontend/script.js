function showAvailableCourses(){
    console.log("show available courses is called");

    fetch("http://localhost:8080/courses")
    .then((response)=>response.json())
    .then((courses)=>{
        const dataTable = document.getElementById("coursetable");

        courses.forEach(course => {
            var row = `
            <tr>
            <td>${course.course_id}</td>
            <td>${course.course_name}</td>
            <td>${course.trainer}</td>
            <td>${course.duration}</td>
            </tr>
            `

            dataTable.innerHTML+=row;
        });
    })
}


function showEnrollStudents(){
    fetch("http://localhost:8080/courses/enroll")
    .then((response)=>response.json())
    .then((students)=>{
        const studTable = document.getElementById("enrolltable");

        students.forEach(student =>{
            var rows = `
            <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.emailid}</td>
            <td>${student.courseName}</td>
            `


            studTable.innerHTML+=rows
        })
    })
}