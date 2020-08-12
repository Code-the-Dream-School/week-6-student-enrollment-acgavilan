
const table = document.getElementById("info");
//button variables
const student = document.getElementById("students");
const courses = document.getElementById("Courses");
const createNewStudent = document.getElementById("new_student");

//api's

const studentsApi = 'https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json';
const coursesApi = 'https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json';
const createStudentApi = 'https://student-challenge-api.herokuapp.com/students';




let coursesList;
let students;

// event listeners







function fetchData(api){
  return fetch(api).then(response =>response.json())
}

const displayStudentCourses = () => {

  fetchData(coursesApi)
  .then(data => {
     let coursesName = data;
        
        let coursesList = coursesName.map(key => {
          let html =  `
                        <div class="card-group">
                           <div class="card">
                              <div class="card-body">
                              <h5 class="card-title">${key.name} <span class="badge badge-info badge-pill">${key.duration}</span></h5>
                              <p class="card-text"></p>
                              <button type="button" class="btn btn-primary">Add student</button>
                              
                            </div>
                          </div>
                          </div>
                        `;
          return html;
        }).join('');
        table.innerHTML = coursesList;



       
    })
    
}



 const displayStudentName = () => {

        fetchData(studentsApi)
        .then(data => {
          students = data;
 
          let studentList = students.map(key => {
            
            let displayStatus = key.status === true ? '<span class="badge badge-info badge-pill">active</span>' : '<span class="notactive"></span>'
       
            let html =  `
                          <div class="card-group">
                             <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">${key.name} ${key.last_name} ${displayStatus}</h5>
                                <label>
                                <select id="text"></select><br>  
                                </label><br>
                                <button type="button" class="btn btn-primary" id="addclass">Add course</button>
                                <button type="button" class="btn btn-primary">Edit info</button>
                              </div>
                            </div>
                            </div>
                      
                            `
                            ;
            return html;

           
          }).join('');
          table.innerHTML = studentList;
           
          let btn = document.getElementById("addclass");
          console.log(btn)
          btn.addEventListener("click",  () =>{console.log("hello world")});
          
        
         
  })
  console.log(students)
 
 }



student.addEventListener("click",  displayStudentName);
courses.addEventListener("click", displayStudentCourses);



