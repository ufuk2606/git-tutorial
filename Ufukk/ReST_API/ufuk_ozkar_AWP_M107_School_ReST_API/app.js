const express = require('express');
const studentService = require('./service/StudentService');
const teacherService = require('./service/TeacherService');
const Student = require('./model/Student');
const Teacher = require('./model/Teacher');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/**student test kit */
/**
 * bütün ögrencileri getirir.
 */
app.get('/student', (req, res) => {
    let studentList = studentService.getStudents();
    res.send(studentList);
})

/**
 * sadece id'e sahip olan ögrenciyi getirir.
 */
app.get('/student/:id', (req, res) => {
    let studentById = studentService.getStudentById(req.params.id);
    res.send(studentById);
})

/**
 * ögrenci ekler.
 */
app.post('/student', function (req, res) {
    let st = req.body;
    let student = new Student(st.id, st.name, st.age, st.grade);
    studentService.addStudent(student);
    res.send('Kayit edilen Ogrenci');
})

/**
 * id'e sahip ögrencinin bilgilerini günceller.
 */
app.put('/student/:id', function (req, res) {
    let st = req.body;
    let student = new Student(st.id, st.name, st.age, st.grade);
    studentService.updateStudent(student, req.params.id);
    res.send('Bilgileri güncellenen ogrenci');
})

/**
 * id'e sahip ögrenci bilgilerini siler.
 */
app.delete('/student/:id', function (req, res) {
    studentService.deleteStudentById(req.params.id);
    res.send('Kaydi silinen ogrenci' + req.params.id);
})

/**teacher test kit */
/**
 * ögretmenleri getirir.
 */
app.get('/teacher', (req, res) => {
    let teacherList = teacherService.getTeachers();
    res.send(teacherList);
})

/**
 * id'e sahip ögretmeni getirir.
 */
app.get('/teacher/:id', (req, res) => {
    let teacherById = teacherService.getTeacherById(req.params.id);
    res.send(teacherById);
})

/**
 * ögretmen ekler.
 */
app.post('/teacher', function (req, res) {
    let tch = req.body;
    let teacher = new Teacher(tch.id, tch.name, tch.age, tch.profession);
    teacherService.addTeacher(teacher);
    res.send('Kayit edilen Ogretmen');
})

/**
 * id'e sahip ögretmeni getirip bilgilerini günceller.
 */
app.put('/teacher/:id', function (req, res) {
    let tch = req.body;
    let teacher = new Teacher(tch.id, tch.name, tch.age, tch.grade);
    teacherService.updateTeacher(teacher, req.params.id);
    res.send('Bilgileri güncellenen ogretmen');
})

/**
 * id'e sahip ögretmenin bilgilerini siler.
 */
app.delete('/teacher/:id', function (req, res) {
    teacherService.deleteTeacherById(req.params.id);
    res.send('Kaydi silinen ogretmen' + req.params.id);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));