const express = require('express');
const studentService = require('./service/StudentService');
const teacherService = require('./service/TeacherService');
const app = express();
const port = 3000;

/**Student test kit */
app.get('/Student', (req, res) => {
    studentService.getStudents();
    res.send('Tüm ögrencileri getir')
})

app.get('/Student/:id', (req, res) => {
    studentService.getStudentById(id);
    res.send('Bu id olan ögrenciyi getir' + id)
})

app.post('/Student', function (req, res) {
    studentService.addStudent();
    res.send('Kayit edilen Ogrenci')
})

app.put('/Student', function (req, res) {
    studentService.putStudent();
    res.send('Bilgileri güncellenen ogrenci')
})

app.delete('/Student', function (req, res) {
    studentService.deleteStudents();
    res.send('Silinen tüm ogrenciler')
})

app.delete('/Student/:id', function (req, res) {
    studentService.deleteStudentById(id);
    res.send('Kaydi silinen ogrenci' + id)
})

/**Teacher test kit */
app.get('/Teacher', (req, res) => {
    res.send('Hosgeldin Ogretmen')
})

app.post('/Teacher', function (req, res) {
    res.send('Kayit edilen Ogretmen')
})

app.put('/Teacher', function (req, res) {
    res.send('Bilgileri güncellenen Ogretmen')
})

app.delete('/Teacher', function (req, res) {
    res.send('Kaydi silinen ogretmen')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))